<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" >
    <link rel="stylesheet" src="styles.css">
    <title>RPG - FiReFeast Game</title>
</head>
<body>
    <div id="game">
        <!-- Interface for the BeAst interactions -->
      <div id="stats"> <span class="stat">EXP: <strong><span id="expText">0</span></strong></span> 
        <span class="stat">Health: <strong><span id="healthText">100</span></strong></span> 
        <span class="stat">Armor: <strong><span id="armorText">10</span></strong></span>
        <span class="stat">Gold: <strong><span id="goldText">50</span></strong></span></span>
    </div>
      <div id="controls">
        <button id="button1">Go to store</button>
        <button id="button2">Go to cave</button>
        <button id="button3">Fight FiRedragon</button>
    </div>
      <div id="BeAstStats"> 
        <span class="stat">BeAst Name: <strong><span id="monsterName"></span></strong></span>
        <span class="stat">Health: <strong><span id="monsterHealth"></span></strong></span>
    </div>
      <div id="text">
        Welcome to FiReFeast Repeller. You must defeat the FiRedragon that is preventing people from leaving the town. You are in the town square. Where do you want to go? Use the buttons above.
      </div>
    </div>
    <script src="script.js"></script>
</body>
</html>