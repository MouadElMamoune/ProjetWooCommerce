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
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul class="nav navbar-nav">
      <li><a href="home.php">Home</a></li>
      <li class="active"><a href="list_products.php">Products</a></li>
      <li><a href="list_customers.php">Customers</a></li>
    </ul>
  </div>
</nav>

<form action="product_updated.php" method="post">
    <input type="hidden" name="idProduct" value="<?= $_GET['idProduct'] ?>"/>
    <div class="form-group">
        <label for="nameProduct">Product name</label>
        <input type="text" class="form-control" id="nameProduct" name="nameProduct" placeholder="Enter product name" value="<?= $_GET['nameProduct'] ?>">
    </div>
    <div class="form-group">
        <label for="priceProduct">Product price</label>
        <input type="text" class="form-control" id="priceProduct" name="priceProduct" placeholder="Enter product price" value="<?= $_GET['priceProduct'] ?>">
    </div>
    <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="checkStockStatus" name="stockCheck">
        <label class="form-check-label" for="checkStockStatus">In Stock</label>
    </div>
    <button type="submit" class="btn btn-primary">Update</button>
</form>
</body>
</html>

