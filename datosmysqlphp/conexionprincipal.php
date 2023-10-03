<?php
class Cconexion{
    
    function conexionphp(){
        $server = 'localhost';
        $user = 'root';
        $pass = '';
        $based = 'hackatonweb';

        try{
            $conectar = new PDO($server, $user, $pass, $based);
            echo"Conexion exitosa con la bd"           
        } catch(PDOException $exp) {
            echo("No se logro la conexion con: $based, error: $exp")
        }
        return $conexionphp;
    }
        
}
        
?>