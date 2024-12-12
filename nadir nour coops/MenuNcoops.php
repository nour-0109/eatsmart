<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menu du OOPS</title>
</head>
<body>
    <h1>Menu du OOPS</h1>

    <?php
    $menu = [
        "Antipasti" => [
            ["name" => "INVOLTINI DE SPECK", "price" => 5.00, "description" => "Jambon speck, ricotta"],
            ["name" => "MINI POIVRONS FARCIS AU THON", "price" => 5.00, "description" => ""]
        ],
        "Bruschetta" => [
            ["name" => "BRUSCHETTA VEGETARIANA", "price" => 9.50, "description" => "Coulis de tomates, aubergines, tomates confites, champignons, poivrons, mozzarella"],
            ["name" => "BRUSCHETTA SAUMONE", "price" => 9.50, "description" => "Crème fraîche, saumon fumé, mozzarella"],
            ["name" => "BRUSCHETTA BOLOGNESE", "price" => 9.50, "description" => "Sauce bolognaise, mozzarella"]
        ],
        "Dito" => [
            ["name" => "DITO JAMBON", "price" => 3.00, "description" => "Coulis de tomates, jambon supérieur, mozzarella, origan"],
            ["name" => "DITO VIANDE HACHÉE", "price" => 3.00, "description" => "Coulis de tomates, viande hachée de bœuf, mozzarella, origan"],
            ["name" => "DITO SAUMONE", "price" => 3.00, "description" => "Crème fraîche, saumon fumé, mozzarella, origan"],
            ["name" => "DITO 3 FROMAGGI", "price" => 3.00, "description" => "Coulis de tomates, chèvre, parmesan, mozzarella, origan"]
        ],
        "Pizza" => [
            ["name" => "PIZZA VERDI", "price" => 9.00, "description" => "Coulis de tomates, jambon supérieur, mozzarella, origan"],
            ["name" => "PIZZA NAPOLETANA", "price" => 9.00, "description" => "Coulis de tomates, anchois, origan"],
            ["name" => "PIZZA REGINA", "price" => 10.00, "description" => "Coulis de tomates, champignons, jambon supérieur, mozzarella"],
            ["name" => "PIZZA 4 FORMAGGI", "price" => 10.00, "description" => "Coulis de tomates, chèvre, parmesan, mozzarella, origan"],
            ["name" => "PIZZA CAPRA", "price" => 10.00, "description" => "Coulis de tomates, chèvre, jambon de parme"],
            ["name" => "PIZZA VEGETARIANA", "price" => 12.00, "description" => "Coulis de tomates, champignons, aubergines, tomates confites, artichauts, mozzarella"],
            ["name" => "PIZZA MONTANARA", "price" => 12.00, "description" => "Coulis de tomates, pancetta, mozzarella"],
            ["name" => "PIZZA POLLO", "price" => 12.00, "description" => "Coulis de tomates, poulet, pancetta, mozzarella"],
            ["name" => "PIZZA MERGUET", "price" => 12.00, "description" => "Coulis de tomates, merguez, mozzarella"],
            ["name" => "PIZZA MARINA", "price" => 13.00, "description" => "Coulis de tomates, saumon fumé"]
        ],
        "Pâtes" => [
            ["name" => "PASTA ALLA BOLOGNESE", "price" => 7.50, "description" => "Sauce tomate, viande hachée de bœuf, tomates, oignons"],
            ["name" => "LASAGNE BOLOGNESE", "price" => 9.00, "description" => "Pâtes, béchamel, sauce bolognaise, crème fraîche, mozzarella"],
            ["name" => "LASAGNE VEGETARIANA", "price" => 9.00, "description" => "Pâtes, légumes, tomates, mozzarella"],
            ["name" => "PASTA AL PESTO", "price" => 9.50, "description" => "Crème fraîche, basilic, pignons de pin"],
            ["name" => "PASTA AL CARBONARA", "price" => 9.50, "description" => "Crème fraîche, pancetta, œuf"],
            ["name" => "PASTA AL GORGONZOLA", "price" => 9.50, "description" => "Crème fraîche, gorgonzola"]
        ],
        "Dolce" => [
            ["name" => "PANTOFOLA CHOCOLAT", "price" => 3.00, "description" => "Chausson pâte à pizza chocolat"],
            ["name" => "PANTOFOLA CARAMEL", "price" => 3.00, "description" => "Chausson pâte à pizza caramel beurre salé"],
            ["name" => "PANNA COTTA FRUITS ROUGES", "price" => 4.00, "description" => "Crème cuite nappée de coulis de fruits rouges"],
            ["name" => "TIRAMISU", "price" => 4.00, "description" => "Biscuit, mascarpone, café"]
        ]
    ];

    foreach ($menu as $category => $items) {
        echo "<h2>$category</h2><ul>";
        foreach ($items as $item) {
            echo "<li><strong>{$item['name']}</strong> - " . number_format($item['price'], 2, ',', ' ') . " €";
            if (!empty($item['description'])) {
                echo "<br>{$item['description']}";
            }
            echo "</li>";
        }
        echo "</ul>";
    }
    ?>
</body>
</html>