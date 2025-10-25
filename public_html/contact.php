<?php include('includes/header.php'); ?>
<main>
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
</main>
<?php include('includes/footer.php'); ?>
