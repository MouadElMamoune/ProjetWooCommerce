<?php
namespace MailPoetVendor;
if (!defined('ABSPATH')) exit;
class Swift_KeyCache_ArrayKeyCache implements Swift_KeyCache
{
 private $contents = [];
 private $stream;
 public function __construct(Swift_KeyCache_KeyCacheInputStream $stream)
 {
 $this->stream = $stream;
 }
 public function setString($nsKey, $itemKey, $string, $mode)
 {
 $this->prepareCache($nsKey);
 switch ($mode) {
 case self::MODE_WRITE:
 $this->contents[$nsKey][$itemKey] = $string;
 break;
 case self::MODE_APPEND:
 if (!$this->hasKey($nsKey, $itemKey)) {
 $this->contents[$nsKey][$itemKey] = '';
 }
 $this->contents[$nsKey][$itemKey] .= $string;
 break;
 default:
 throw new Swift_SwiftException('Invalid mode [' . $mode . '] used to set nsKey=' . $nsKey . ', itemKey=' . $itemKey);
 }
 }
 public function importFromByteStream($nsKey, $itemKey, Swift_OutputByteStream $os, $mode)
 {
 $this->prepareCache($nsKey);
 switch ($mode) {
 case self::MODE_WRITE:
 $this->clearKey($nsKey, $itemKey);
 // no break
 case self::MODE_APPEND:
 if (!$this->hasKey($nsKey, $itemKey)) {
 $this->contents[$nsKey][$itemKey] = '';
 }
 while (\false !== ($bytes = $os->read(8192))) {
 $this->contents[$nsKey][$itemKey] .= $bytes;
 }
 break;
 default:
 throw new Swift_SwiftException('Invalid mode [' . $mode . '] used to set nsKey=' . $nsKey . ', itemKey=' . $itemKey);
 }
 }
 public function getInputByteStream($nsKey, $itemKey, Swift_InputByteStream $writeThrough = null)
 {
 $is = clone $this->stream;
 $is->setKeyCache($this);
 $is->setNsKey($nsKey);
 $is->setItemKey($itemKey);
 if (isset($writeThrough)) {
 $is->setWriteThroughStream($writeThrough);
 }
 return $is;
 }
 public function getString($nsKey, $itemKey)
 {
 $this->prepareCache($nsKey);
 if ($this->hasKey($nsKey, $itemKey)) {
 return $this->contents[$nsKey][$itemKey];
 }
 }
 public function exportToByteStream($nsKey, $itemKey, Swift_InputByteStream $is)
 {
 $this->prepareCache($nsKey);
 $is->write($this->getString($nsKey, $itemKey));
 }
 public function hasKey($nsKey, $itemKey)
 {
 $this->prepareCache($nsKey);
 return \array_key_exists($itemKey, $this->contents[$nsKey]);
 }
 public function clearKey($nsKey, $itemKey)
 {
 unset($this->contents[$nsKey][$itemKey]);
 }
 public function clearAll($nsKey)
 {
 unset($this->contents[$nsKey]);
 }
 private function prepareCache($nsKey)
 {
 if (!\array_key_exists($nsKey, $this->contents)) {
 $this->contents[$nsKey] = [];
 }
 }
}
