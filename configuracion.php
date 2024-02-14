<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $nombre = $_POST['full_name'];
    $email = $_POST['email'];
    $telefono = $_POST['phone'];
    $asunto = $_POST['subject'];
    $mensaje = $_POST['message'];

    $destinatario = "mramonvv@gmail.com"; // Aquí pones tu correo electrónico
    $contenido = "Nombre: " . $nombre . "\nCorreo: " . $email . "\nTeléfono: " . $telefono . "\nMensaje: " . $mensaje;
    
    // Use wordwrap() if lines are longer than 70 characters
    $msg = wordwrap($contenido, 70);

    // Send email
    if(mail($destinatario, $asunto, $msg)){
        echo "Correo enviado con éxito.";
    } else {
        echo "Error al enviar correo.";
    }
}
?>
