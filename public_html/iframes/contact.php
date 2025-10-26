<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8">
  <title>Contact</title>
  <link rel="stylesheet" href="../css/main_styles.css">
</head>
<body>
  <!-- Links -->
  <section class="iframe-subnav">
    <nav>
      <ul>
        <li><a href="contact.php#bestuur">Ons bestuur</a></li>
        <li><a href="contact.php#contact">Contacteer ons</a></li>
      </ul>
    </nav>
  </section>

  <!-- Bestuur -->
  <a name="bestuur" id="bestuur"></a> 
  <section class="page">
    <h1>Ons bestuur</h1>
    <p>Hier vindt u informatie over ons bestuursteam.</p>
    <ul>
      <li>Voorzitter: Bram Hannes</li>
      <li>Secretaris: Luc Sannen</li>
      <li>Penningmeester: Alex Van Decraen</li>
    </ul>
  </section>

  <!-- Contact -->
  <a name="contact" id="contact"></a> 
  <section class="page">
    <h1>Contacteer ons</h1>
    <form action="contact.php" method="post" class="contact-form">
      <label>Naam:</label>
      <input type="text" name="naam" required>

      <label>E-mail:</label>
      <input type="email" name="email" required>

      <label>Bericht:</label>
      <textarea name="bericht" rows="5" required></textarea>

      <button type="submit">Verstuur</button>
    </form>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      echo "<p>Bedankt voor je bericht, " . htmlspecialchars($_POST["naam"]) . "!</p>";
    }
    ?>
  </section>
</body>
</html>
