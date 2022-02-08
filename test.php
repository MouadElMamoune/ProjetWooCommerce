<?php
require __DIR__ . '/vendor/autoload.php';
use Automattic\WooCommerce\Client;
$woocommerce = new Client(
	'http://localhost/wordpress',
	'ck_4c804cf2782d9b59c0c420920888a838cd6d31c2',
	'cs_6d55c694f7db1560191b6e4d55642c8e40f676be',
	[
		'wp_api' => true,
		'version' => 'wc/v3',
		'wp_api' => true
	]
);
$products = $woocommerce->get('products');

echo '<pre>';
print_r($products);
echo '</pre>';

?>