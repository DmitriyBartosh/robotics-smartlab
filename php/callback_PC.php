<?php
// Файлы phpmailer
require 'class.phpmailer.php';
require 'class.smtp.php';

// Переменные
$name = $_POST['name'];
$cancel = $_POST['cancel'];

// Настройки
$mail = new PHPMailer;
$mail->isSMTP(); 
$mail->Host = 'smtp.mail.ru'; 
$mail->SMTPAuth = true; 
$mail->Username = 'smartlab24'; 
$mail->Password = '1092016lab'; 
$mail->SMTPSecure = 'ssl'; 
$mail->Port = 465;
$mail->setFrom('smartlab24@mail.ru'); 
$mail->addAddress('inbox@smartlab24.ru');
$mail->addAddress('5evil5kraslan@mail.ru'); 

// Письмо
$mail->isHTML(true); 
$mail->CharSet = 'UTF-8';
$mail->Subject = "Заявка с сайта Робототехника | SmartLab"; 
$mail->Body = "Заявка с формы - <strong>Перенести занятие</strong> <br> <strong>Номер абонемента или имя и фамилия:</strong> $name <br> <strong>Причина переноса:</strong> $cancel"; 

// Результат
if(!$mail->send()) {
echo 'Сообщение не отправлено';
echo 'Ошибка: ' . $mail->ErrorInfo;
} else {
echo 'ok';
}
?>