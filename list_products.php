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
?>


<!DOCTYPE html>
<html lang="en">
<head>
 <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>
<body>
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Achat-Vêtement</a>
    </div>
    <ul class="nav navbar-nav">
      <li><a href="home.php">Home</a></li>
      <li class="active"><a href="list_products.php">Products</a></li>
      <li><a href="list_customers.php">Customers</a></li>
    </ul>
  </div>
</nav>

<table class="table table-dark">
            <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Stock Status</th>
            </tr>
            </thead>
            <tbody>
            <?php foreach($products as $product): ?>
            <tr>
                <td><?= $product->name; ?></td>
                <td><?= $product->price; ?></td>
                <td><?= $product->stock_status; ?></td>
                <td><a href="update_product_form.php?idProduct=<?= $product->id; ?>&nameProduct=<?= $product->name; ?>&priceProduct=<?= $product->price; ?>"><button class="btn btn-info">Update</button></a></td>
                <td><a href="delete_product.php?idProduct=<?= $product->id; ?>"><button class="btn btn-info">Delete</button></a></td>
            </tr>
            <?php endforeach; ?>
            <form action="create_product_form.php" method="post">
                <button class="btn btn-primary">Add product</button>
            </form>
            </tbody>
        </table>

</body>
</html>