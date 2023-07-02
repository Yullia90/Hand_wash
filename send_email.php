if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $sink = $_POST['sink'];
    $name = $_POST['name'];
    $phone = $_POST['phone'];

    // Виконайте код відправки електронної пошти з використанням отриманих даних

    // Приклад використання функції mail() для відправки електронної пошти
    $to = "your-email@example.com";
    $subject = "Нове замовлення";
    $message = "Замовлення: " . $sink . "\nІм'я: " . $name . "\nТелефон: " . $phone;
    $headers = "From: y.tsarenko@harwind.com.ua";

    mail($to, $subject, $message, $headers);

    // Перенаправте користувача на сторінку підтвердження або виконайте інші дії після відправки електронної пошти
    header("Location: confirmation.html");
    exit();
}