<?php
// Файлы phpmailer
require 'class.phpmailer.php';
require 'class.smtp.php';

// Переменные
$address = $_POST['address_OD_Q'];
$question = $_POST['question_OD_Q'];

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
$mail->Body = "Заявка с формы - <strong>Вопрос по курсу (один из пяти)</strong> <br> <strong>Адрес для ответа на вопрос:</strong> $address <br> <strong>Вопрос:</strong> $question"; 

// Результат
if(!$mail->send()) {
echo 'Сообщение не отправлено';
echo 'Ошибка: ' . $mail->ErrorInfo;
} else {
echo 'ok';
}
?>