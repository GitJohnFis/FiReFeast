//console.log("Hello World");
//console.log("Hello World");
import 'htmx.org';
   let exp = 0;
   let health = 100;
   let armor = 10;
    let gold = 50; //Update gold amount to 650 for testing buyWeapon function. then buy all weapos on preview
   let currentWeaponIndex = 0;
    //undeclared variable 
      let fighting;
      let BEaSthealth;
       let inventory = ["stick"]
    //Buttons interaction 
    const button1 = document.querySelector("#button1");
    const button2 = document.querySelector("#button2");  
    const button3 = document.querySelector("#button3");
    //Create commentary logs for any actions in game
    const text = document.querySelector("#text");
    const expText = document.querySelector("#expText");
    const healthText = document.querySelector("#healthText");
    const armorText = document.querySelector("#armorText")
    const goldText = document.querySelector("#goldText");
    const BeAstStats = document.querySelector("#BeAstStats") || document.querySelector("#monsterStats") ;
    const monsterName = document.querySelector("#monsterName");
    const monsterHealthText = document.querySelector("#monsterHealthText")
    //Create an interaction function that lets user "Go to store"
    function goTown() { 
        update(locations[0]);
        // const info = document.querySelector("#button1"); //Modify the innerText to my stats  //Change the text appearence after button clicked
        // button1.innerText = "Go to store";                                                   //Update for buttons in an instance they are clicked again
        // button1.onclick = goStore;                     //Modify the onclick to myHealth,Weapon, instead of buy                                       //lead the button click to change their previou stats
        // button2.innerText = "Go to cave";
        // button2.onclick = goCave;
        // button3.innerText = "Fight FiRedragon";
        // button3.onclick = fightDragon;
        // text.innerText = "You are in the town square, You see a sign that says \"Store\".";// Remember to us (\"text\")backslashes with double quotes inside of double quotes

    }//Drag and drop goTown function above goStore and C & P its declarations
    function goStore() {
        update(locations[1])
        // const info = document.querySelector("#button1"); //Change the text appearence after button clicked
        // button1.innerText = "Buy 10 health (10 gold)";//Update for buttons in an instance they are clicked again
        // button1.onclick = buyHealth; //lead the button click to change their previou stats
        // button2.innerText = "Buy weapon (30 gold)";
        // button2.onclick = buyWeapon;
        // button3.innerText = "Go to town square";
        // button3.onclick = goTown;
        // text.innerText = "You enter the store.";//modify my display text in the commentary log to "You enter the store."  
    }
    //Create an interaction where you go to cave/home
    function goCave() {
       update(locations[2]);//delete console.log and add a location array in goCave function
    }
    //Create an interaction to fight the BeAst dragon
    function fightDragon() {//Set `fighting` to 1 for beast and 2 for dragon.
    fighting = 2;             // console.log("Fighting FiRedragon")
    }
    //intiailiazing buttons
    button1.onclick = goStore;
    button2.onclick = goCave; //takes you to the cave button/interactive options
    button3.onclick = fightDragon; //takes you to the arena to interactive state with FiRedragon
                                    //Adding three new functions for HP, weapon, and leave
function myHealth() { 
    if (gold >= 10) {  //take the actions that happern in "store" and "cave"
gold -= 10; goldText.innerText = gold;//Make gold and health stats change when buying from store
health += 10; healthText.innerText = health;// make an if statement ot buy health with gold
    } else {                  //create an else function to action a statementif you don't have enough gold
text.innerText = "You do not have enough gold to buy health.";//create a message if you do not have gold to buy health
    }
}
function myWeapon() {   // create function to take the actions that happen in "store"
          if(currentWeaponIndex < weapons.length - 1)    //Fix array indexing error in buyWeapon function.                           //- Modified the `if` condition in the `buyWeapon` function to check if `currentWeaponIndex` is less than the length of the `weapons` array.
                                                    //  - Ensured future compatibility for adding new values to the `weapons` array.                              //- Implemented a check to ensure players cannot purchase more weapons after acquiring the best weapon.
      {                                            // - Updated the `buyWeapon` function to include this validation.
    if (gold >= 30){
  gold -= 30; 
  currentWeaponIndex ++; //use the curretWeaponIndex to  use the increment operator
  goldText.innerText = gold;
  let newWeapon = weapons[currentWeaponIndex].name;//use the dot notation for new weapon
  text.innerText = "You now have a " + newWeapon + "."  //create the commentary log when you purchase a new weapon from store
  inventory.push(myWeapon); //show the log commentary of the new equipped weapon
  text.innerText += " In your inventory you have: " + inventory//after the updated innerText for the new weapon log commentary include the inventory text using a second innerText with +=
                                                                //add the inventory operation by concatinating
    }                                                              // add an else statement if the gold you have is insufficient 
    else {
text.innerText = "You do not have enough gold to buy a weapon.";
    }
  } else {
    text.innerText = "You already have the most powerful weapon!";//Create else statement to show commmentary log when you have the "most" powerful weapon
     button2.innerText = "Sell weapon for 15 gold";//Allow players to sell old weapons after acquiring the most powerful one.
button2.onclick = sellWeapon;
    } //recreate the text.innerText to show the new weapon and add a ""
}
//creating an empty location function to take care of goTown and goStore repetions
function update(location) {
    BeAstStats.style.display = "none";//The monsters stats should no be displayed after defeated using style and display
    button1.innerText = location["button text"][0];//use arrays instead of bracket notations "Go to store"
    button2.innerText = location["button text"][1];// change all innerText values into location arrays
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0]; //Follow the same pattern with the innerText to the onclick values
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    text.innerHTML = location.text;//use dot notation to target location text
  }// update the text.innerText = text.innerHTML to show the emoticons for the death screen log

//In any RPG you need to make data structures for the different locations e.g Cave, Store, town square
const weapons = [
    {
        name: "stick", //Create four different weapons this one called "stick"
        power: 5
    },
    {
        name: "dagger", //Create four different weapons this one called "dagger"
        power: 30
    },
    {
      name: "claw hammer", //Create four different weapons this one called "claw hammer"
        power: 50
    },
    {
        name: "sword", //Create four different weapons this one called "sword"
        power: 100
    },

] //create a new weapons array function above locations array
//create new monsters or BeAsts below weapons arrar & Defined a `monsters` variable below the `weapons` array.
const monsters = [
{
name: "slime",
level: 2,
health: 15,
},
{
 name: "fanged beast",
 level: 8,
 health: 60,
},
{
name: "FiRedragon",
level: 20,
health: 300,
 }
//add more monster here including FiRebeast, FiRecabra, WaTeR witch (BONUS)

]
const locations = [
    {
name: "town square", //keep commas between an array NOT semi colons
"button text": ["Go to store", "Go to cave", "Figh FiRedragon"], //This is a button text within an array done correctly
"button functions": [goStore, goCave, fightDragon], // use onclick arrays that will achieve the buttons functions
text: "You are in the town square. You see a sign that says \"Store\"." // add text properties from the innertext values
    },
        {
        name: "store",
        "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],//include the second obk=ject to my locations array
        "button functions": [myHealth, myWeapon, goTown],
        text: "You enter the store."
        },
        {
        name: "cave",
"button text": ["Fight slime", "Fight fanged beast", "Go to town square"],//Add a third function into the location object
"button functions": [fightSlime, fightBeast, goTown],
text: "You enter the cave. You see some monsters."
        }, //Create a new object for battle interaction with monster in the location array 
        {
        name: "fight",
"button text": ["Attack", "Dodge", "Run"],
"button functions": [attack, dodge, goTown],
text: "You are fighting a monster."
        },
        {
 name: "kill monster",
   "button text": ["Go to town square", "Go to town square", "Go to town square"],
   "button functions": [goTown, goTown, easterEgg],
  text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.' //The word "Arg!" should have quotes around it. Besides escaping quotes, there is another way you can include quotation marks inside a string.
    }, //Create a fifth object in locations array to address what happen when a use kills a beast
//Add "lose" location to locations array.
{
    name: "lose",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "You die. &#x2620;" //SKull emoji will be shown using this error code
    }, //Add another object in locarions array for a winning user below the death 
    {
       name: "win",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "You defeat the FiRedragon! YOU WIN THE GAME! &#x1F389;"
      },// Add the easter egg in the location array Remember this is confidential
      {
        name: "easter egg",
        "button text": ["2", "8", "Got to town square?"],
        "button functions": [pickTwo, pickEight, goTown],
        text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!"
      }
];
 //use string in the key of an object if multiple text need to be shown

    // console.log["Number of legs"] or 
    // console.log(cat.name) //*Whiskers
  // use objects to build my locations array or options
console.log(cat)
//create a new fightSlime and fightBeast functions
function fightSlime() {//Set fighting to slime index and call goFight in fightSlime function.
fighting = 0;
// goFight();
}
function fightBeast() {
fighting = 1;
}
//create a sellWeapon function for all weapons after getting the most OP weapon
function sellWeapon() { //Inside the `if` statement, set `gold` to 15 more than its current value.//- Updated `goldText.innerText` to reflect the new gold amount.
if(inventory.length > 1){
gold += 15
goldText.innerText = gold;
let currentWeapon = inventory.shift();//create current weapon variable with let
text.innerText = "You sold a " + currentWeapon + "."; //Make sure that commentary log changes to notify the use you sold a weapon
   text.innerText += " In your inventory you have: " + inventory; //Use shift() to assign the first element of inventory to currentWeapon.
} else {//Now use the += operator to add the string " In your inventory you have: " and the contents of inventory to the text.innerText. Make sure to include the space at the beginning and end of the " In your inventory you have: " string.
text.innerText = "Don't sell your only weapon!"
}
}
//Create goFight function to manage monster fight logic.
function goFight() {
  update(locations[3])           // In the `goFight` function, called the `update` function with the fourth object in the `locations` array as an argument.
  BEaSthealth = monsters[fighting].health;                       //Set the monster health bars to their beast
     BeAstStats.style.display = "block";                                          //Display monster stats when Fight dragon button is clicked.
      monsterName.innerText =  monsters[fighting].name;                                     //Update the text alongside the new button and style display
    monsterHealthText.innerText = monsterHealth;
    }
//Create two combat interactive options atk and dodg
function attack() { //Build attack function to update text message with monster name using the concatenation operator.
text.innerText = "The " + monsters[fighting].name + "attacks. ";
   text.innerText += " You attack it with your "  + weapon[currentWeaponIndex].name + ".";// On a new line in the `attack` function, used the addition assignment operator (+=) to add the string " You attack it with your <weapon>." to the text value.                                                      //Add a new text message for the weapon you are battling with ie atk 
    health -= getMonsterAttackValue(monsters[fighting].level); //Update health to subtract monster's level. //Your health decreases by the monster's attack value, which is calculated using the monster's level.
    if(isMonsterHit()) {
      BEaSthealth -= weapons[currentWeaponIndex].power + Math.floor(Math.random() * exp) + 1; //Introduce Math object and use random number generation in attack logic.
    } else {
        text.innerText += " You miss.";//create an if else statement for any misses you have in a  battle
      }                         //ensures that the monster's health only decreases if the isMonsterHit function returns true.
    healthText.innerText = health;           
  monsterHealthText.innerText = monsterHealth;                 //Update the innerText of user(s) health and monsters health bar
  if(health <= 0){
lose()
  }   else if (BEaSthealth <= 0 ){
defeatMonster();
if (fighting === 2) {                             //Make my game complex beyond it's feature-completed amd maek stages fun and engaging give monsters a dynamic attack value.
winGame();
} else{
defeatMonster();
}
// Inside the `else if` block of the `attack` function, created an `if` and `else` statement.
// - Checked if `fighting` is equal to 2 (FiRedragon) using the strict equality (===) operator.
// - Called the `winGame` function if the player is fighting FiRedragon.
// - Moved the `defeatMonster()` call to the `else` block.
  }             //To give the weapons durabilty use an if statement to let the weapon break via chance
  if(Math.random() <= .1 && inventory.length !== 1) { //Create the text that shows up when your weapon breaks by chance below //Add a second condition taht precent your only weapon from breaking
text.innerText += " Your " + inventory.pop() + " breaks."//use the decrement opewrator to show you have one less weapon now
currentWeaponIndex--;
  }                                    //Create the lose in a battle function with zero or less health in an if/else statement
}  //Add else if statement to check monsterHealth and call defeatMonster.
       //Create a new getMonsterAttackValue with parameter to level from monsters
       function getMonsterAttackValue(level){// create a "hit variable" - This will set the monster's attack to five times their level minus a random number between 0 and the player's xp.
const hit = (level * 5) - (Math.floor(Math.random() * exp));
console.log(hit);
return hit > 0 ? hit : 0;
       }
function dodge() {//Create the dodge text to change when interacting with a monster in battle
text.innerText = "You dodge the attack from the " + monsters[fighting].name + "."; //"You dodge the attack from the " + monsters[fighting].name + "."
}
//Create defeatMonster and lose function
function defeatMonster() { //Update gold calculation in defeatMonster function to be 6.7 times the monsters lvl
gold += Math.floor(monsters[fighting].level * 6.7) + 1;
    exp += monsters[fighting].name;                                                  //Show th exp gained in exp = exp + monsters lvl user fought
   goldText.innerText = gold;
   expText.innerText = exp;                                       //Update the values to be displayed now on screen using innerText
   update(locations[4]);                        //Complete defeatMonster function by calling update with locations[4].<--This does notexist, yet
}
function lose() {//Working on th lsoe function make the In the lose function, call the update function and pass in the non existent sixth object of locations array.
update(locations[5]);
}
//Below the lose function create the winGame functiuon
function winGame() {
    update(location[6]);
  }
//Create a restart function for when you get revived to life LEL
function restart() {
    exp = 0;
    health = 100;
    gold = 50;
    armor = 10;
    currentWeaponIndex = 0;
    inventory = ["stick"];
    goldText.innerText = gold;
    healthText.innerText = health;
    armorText.innerText = armor;
    expText.innerText = exp;
    goTown()
}
//Create a isMonsterHit function to determine if the monster is hit. complex detail: Math.random() generates a random number between 0 and 1.
// If this number is greater than 0.2, the function returns true (indicating a hit).
// Otherwise, it returns false (indicating a miss).
function isMonsterHit() {
    return Math.random() > .2 || health < 20; //function isMonsterHit() { return Math.random() > 0.2 || health < 20;}
    
}
function easterEgg() {
    update(locations[7]) //Create a hidden feature or easter egg to my FiReFeast game with easterEgg function
} 
// Create a pick function with a guess parameter
function pick(guess) {
 const numbers = []; 
 while(numbers.length < 10) {   //fix while loop
    numbers.push(Math.floor(Math.random() * 11)) //below the while loop place the text to change in the commentary log
 } 
 text.innerText = "You picked " + guess + ". Here are the random numbers:\n";  //insert a new line character escape character befor the last ""                          //Inside the pick function, a constant variable named numbers is initialized and set to an empty array.
}                                //push a random number in between 0 - 10 for my while loop using push metho0
  for(let i = 0; i < 1; i++)  {
    text.innerText += numbers[i] + "\n"; //Write the logic to run in the for loop
  }   
  if(numbers.includes(guess)) {
    text.innerText += "Right! You win 20 gold!";//Add the interactive change to to getting a set of numbers correct
    gold += 20;
    goldText.innerText = gold;
  } else {
    text.innerText += "Wrong! You lose 10 health!";
    health -= 10;
    healthText.innerText = health;
    if(health <= 0){
        lose()
    } // add if statement that makes user lose if health is equal to or less than 0
  }                   //Punish player for getting wrong set of numbers by lowering their health      //below for loop use the includes method. It checks if an array contains a specific element and returns true or false.       //Create a while loop
//Another two pick functions called pickTwo and pickEight
function pickTwo() {
pick(2)
}
function pickEight() {
pick(8)
}
//New revive function for when you lose with vengeance and 150 gold
/*{
    name: "lose",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?", "revive"],
    "button functions": [restart, restart, restart, revive],
    text: "You die. &#x2620;"
  },
  { 
    name: "win", 
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"], 
    "button functions": [restart, restart, restart], 
    text: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;" 
  },
  {
    name: "easter egg",
    "button text": ["2", "8", "Go to town square?"],
    "button functions": [pickTwo, pickEight, goTown],
    text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!"
  }
];

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;
button4.onclick = goArmory;

function update(location) {
  monsterStats.style.display = "none";
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button4.innerText = location["button text"][3];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  button4.onclick = location["button functions"][3];
  text.innerHTML = location.text;
}

function goTown() {
  update(locations[0]);
}

function goStore() {
  update(locations[1]);
}

function goCave() {
  update(locations[2]);
}
function goArmory() {
  buyArmor();
}
function buyHealth() {
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  } else {
    text.innerText = "You do not have enough gold to buy health.";
  }
}
function buyArmor() {
  if (health < 100) {
    text.innerText = "You need to have 100 health before buying armor.";
    } else if (gold >= 15) {
    gold -= 15;
    armor += 5;
    goldText.innerText = gold;
    armorText.innerText = armor;
  } else {
    text.innerText = "You do not have enough gold to buy armor.";
  }
}

function buyWeapon() {
  if (currentWeapon < weapons.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentWeapon++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeapon].name;
      text.innerText = "You now have a " + newWeapon + ".";
      inventory.push(newWeapon);
      text.innerText += " In your inventory you have: " + inventory;
    } else {
      text.innerText = "You do not have enough gold to buy a weapon.";
    }
  } else {
    text.innerText = "You already have the most powerful weapon!";
    button2.innerText = "Sell weapon for 15 gold";
    button2.onclick = sellWeapon;
  }
}

function sellWeapon() {
  if (inventory.length > 1) {
    gold += 15;
    goldText.innerText = gold;
    let currentWeapon = inventory.shift();
    text.innerText = "You sold a " + currentWeapon + ".";
    text.innerText += " In your inventory you have: " + inventory;
  } else {
    text.innerText = "Don't sell your only weapon!";
  }
}

function fightSlime() {
  fighting = 0;
  goFight();
}

function fightBeast() {
  fighting = 1;
  goFight();
}

function fightDragon() {
  fighting = 2;
  goFight();
}

function goFight() {
  update(locations[3]);
  monsterHealth = monsters[fighting].health;
  monsterStats.style.display = "block";
  monsterName.innerText = monsters[fighting].name;
  monsterHealthText.innerText = monsterHealth;
}

function attack() {
  text.innerText = "The " + monsters[fighting].name + " attacks.";
  text.innerText += " You attack it with your " + weapons[currentWeapon].name + ".";
  
  let damage = getMonsterAttackValue(monsters[fighting].level);
  if (armor > 0) {
    armor -= damage;
    if (armor < 0) {
      health += armor; // Subtract the remaining damage from health
      armor = 0;
    }
  } else {
    health -= damage;
  }

  if (isMonsterHit()) {
    monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;    
  } else {
    text.innerText += " You miss.";
  }

  armorText.innerText = armor;
  healthText.innerText = health;
  monsterHealthText.innerText = monsterHealth;

  if (health <= 0) {
    lose();
  } else if (monsterHealth <= 0) {
    if (fighting === 2) {
      winGame();
    } else {
      defeatMonster();
    }
  }

  if (Math.random() <= .1 && inventory.length !== 1) {
    text.innerText += " Your " + inventory.pop() + " breaks.";
    currentWeapon--;
  }
}

function getMonsterAttackValue(level) {
  const hit = (level * 5) - (Math.floor(Math.random() * xp));
  console.log(hit);
  return hit > 0 ? hit : 0;
}

function isMonsterHit() {
  return Math.random() > .2 || health < 20;
}

function dodge() {
  text.innerText = "You dodge the attack from the " + monsters[fighting].name;
}

function defeatMonster() {
  gold += Math.floor(monsters[fighting].level * 6.7);
  armor += monsters[fighting].level;
  xp += monsters[fighting].level;
  goldText.innerText = gold;
  armorText.innerText = armor;
  xpText.innerText = xp;
  update(locations[4]);
}

function lose() {
  update(locations[5]);
}

function winGame() {
  update(locations[6]);
}
function revive() {
  if(gold >= 150) {
  xp = 1000;
  health = 100;
  armor = 100;
  gold = 0;
  currentWeapon = 0;
  inventory = ["sword"];
  goldText.innerText = gold;
  healthText.innerText = health;
  armorText.innerText = armor;
  xpText.innerText = xp;
  fightDragon();
  }
}
function restart() {
  xp = 0;
  health = 100;
  armor = 5;
  gold = 50;
  currentWeapon = 0;
  inventory = ["stick"];
  goldText.innerText = gold;
  healthText.innerText = health;
  armorText.innerText = armor;
  xpText.innerText = xp;
  goTown();
}

function easterEgg() {
  update(locations[7]);
}

function pickTwo() {
  pick(2);
}

function pickEight() {
  pick(8);
}

function pick(guess) {
  const numbers = [];
  while (numbers.length < 10) {
    numbers.push(Math.floor(Math.random() * 11));
  }
  text.innerText = "You picked " + guess + ". Here are the random numbers:\n";
  for (let i = 0; i < 10; i++) {
    text.innerText += numbers[i] + "\n";
  }
  if (numbers.includes(guess)) {
    text.innerText += "Right! You win 20 gold!";
    gold += 20;
    goldText.innerText = gold;
  } else {
    text.innerText += "Wrong! You lose 10 health!";
    health -= 10;
    healthText.innerText = health;
    if (health <= 0) {
      lose();
    }
  }
}*/
