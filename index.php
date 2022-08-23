<?php 
    include_once "templades/conexio.php";
    var_dump($db);
    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>App web</title>
    <link rel="shortcut icon" href="src/img/bus-solid.svg" type="image/x-icon">
    <link rel="stylesheet" href="src/css/style.css">
    
</head>
<body>
    <div class="fondo">
        <img src="src/img/omsa.jpg" alt="Imagen OMSA">
        <div class="login">
            <div class="inicio">
                <form method="POST" action="/">
                    <label for="user">Usuario</label>
                    <input type="text" id="user" placeholder="Nombre de Ususario" name="usuario">
                    <label for="pass">Password</label>
                    <input type="password" id="pass" placeholder="Password" name="password">
                    <input type="submit" value="Ingresar">
                </form>
                <nav>
                <a href="registro.html">Registrarse</a>
                <a href="olvide.html">Olvide</a>
                </nav>
            </div>
    </div>
    <script src="src/js/app.js"></script>
</body>
</html>