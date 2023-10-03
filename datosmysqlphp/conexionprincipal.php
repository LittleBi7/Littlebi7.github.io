<?php
$server = 'localhost';
$user = 'root';
$pass = '';
$based = 'hackatonweb';

try {
    $pdo = new PDO("mysql:host=$server;dbname=$based", $user, $pass);

    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $nombre_a_buscar = 'Bisuteria';

    $sql = "SELECT * FROM especialidad WHERE nombre = :nombre";

    $stmt = $pdo->prepare($sql);

    $stmt->bindParam(':nombre', $nombre_a_buscar, PDO::PARAM_STR);

    $stmt->execute();

    $num_filas = $stmt->rowCount();

    if ($num_filas > 0) {
        echo "El registro con nombre '$nombre_a_buscar' existe en la tabla.";
    } else {
        echo "El registro con nombre '$nombre_a_buscar' no existe en la tabla.";
    }
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}

try{
    // Valor a insertar en la tabla
    $nombre_especialidad = 'zapatero';

    // Consulta SQL para insertar el nuevo registro
    $sql = "INSERT INTO especialidad (nombre) VALUES (:nombre)";

    // Preparar la consulta
    $stmt = $pdo->prepare($sql);

    // Asignar el valor a los parámetros de la consulta
    $stmt->bindParam(':nombre', $nombre_especialidad, PDO::PARAM_STR);

    // Ejecutar la consulta
    $stmt->execute();

    echo "Registro insertado correctamente.";
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}

$pdo = null;
?>
