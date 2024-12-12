<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact - NCOOPS</title>
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #2c3e50; /* Dark blue background */
            color: #ecf0f1; /* Light text */
        }

        .container {
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            background-color: #34495e; /* Darker card background */
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        }

        h1 {
            text-align: center;
            color: #1abc9c; /* Teal for the title */
        }

        form {
            display: flex;
            flex-direction: column;
        }

        label {
            margin-bottom: 10px;
            font-weight: bold;
        }

        input, textarea, button {
            margin-bottom: 20px;
            padding: 10px;
            border: none;
            border-radius: 5px;
            font-size: 16px;
        }

        input, textarea {
            background-color: #ecf0f1;
            color: #2c3e50;
        }

        button {
            background-color: #1abc9c;
            color: #ecf0f1;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        button:hover {
            background-color: #16a085;
        }

        .nav {
            text-align: center;
            margin-bottom: 20px;
        }

        .nav a {
            margin: 0 15px;
            text-decoration: none;
            color: #1abc9c;
            font-weight: bold;
            transition: color 0.3s;
        }

        .nav a:hover {
            color: #ecf0f1;
        }
    </style>
</head>
<body>

<div class="container">
    <h1>Contactez-nous</h1>

    <div class="nav">
        <a href="menuNcoops.html">Menu</a>
        <a href="index.html">Accueil</a>
    </div>

    <form action="submit_contact.php" method="post">
        <label for="name">Nom :</label>
        <input type="text" id="name" name="name" placeholder="Votre nom" required>

        <label for="email">Email :</label>
        <input type="email" id="email" name="email" placeholder="Votre email" required>

        <label for="message">Message :</label>
        <textarea id="message" name="message" rows="5" placeholder="Votre message" required></textarea>

        <button type="submit">Envoyer</button>
    </form>
</div>

</body>
</html>
