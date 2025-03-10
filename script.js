//console.log("Hello World");
console.log("Hello World");
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
]   const button2 = document.querySelector("#button2");  
    const button3 = document.querySelector("#button3");
    //Create commentary logs for any actions in game
    const text = document.querySelector("#text");
    const expText = document.querySelector("#expText");
    const healthText = document.querySelector("#healthText");
    const armorText = document.querySelector("#armorText")
    const goldText = document.querySelector("#goldText");
    const BeAstStats = document.querySelector("#BeAstStats");
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
    function fightDragon() {
        console.log("Fighting FiRedragon")
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
  currentWeaponIndex ++ 1; //use the curretWeaponIndex to  use the increment operator
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
  } //recreate the text.innerText to show the new weapon and add a ""
}
//creating an empty location function to take care of goTown and goStore repetions
function update(location) {
    button1.innerText = location["button text"][0];//use arrays instead of bracket notations "Go to store"
    button2.innerText = location["button text"][1];// change all innerText values into location arrays
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0]; //Follow the same pattern with the innerText to the onclick values
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    text.innerText = location.text;//use dot notation to target location text
  }

//In any RPG you need to make data structures for the different locations e.g Cave, Store, town square
const weapons = [
    {
        name = "stick", //Create four different weapons this one called "stick"
        power = 5
    },
    {
        name = "dagger", //Create four different weapons this one called "dagger"
        power = 30
    },
    {
      name = "claw hammer", //Create four different weapons this one called "claw hammer"
        power = 50
    },
    {
        name = "sword", //Create four different weapons this one called "sword"
        power = 100
    },

] //create a new weapons array function above locations array
const locations = [
    {
name = "town square", //keep commas between an array NOT semi colons
"button text" = ["Go to store", "Go to cave", "Figh FiRedragon"], //This is a button text within an array done correctly
"button functions" = [goStore, goCave, fightDragon], // use onclick arrays that will achieve the buttons functions
text: "You are in the town square. You see a sign that says \"Store\"." // add text properties from the innertext values
    },
        {
        name: "store",
        "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],//include the second obk=ject to my locations array
        "button functions": [buyHealth, buyWeapon, goTown],
        text: "You enter the store."
        },
        {
        name: "cave",
"button text": ["Fight slime", "Fight fanged beast", "Go to town square"],//Add a third function into the location object
"button functions": [fightSlime, fightBeast, goTown],
text: "You enter the cave. You see some monsters."
        }
];
 //use string in the key of an object if multiple text need to be shown

    // console.log["Number of legs"] or 
    // console.log(cat.name) //*Whiskers
  // use objects to build my locations array or options
console.log(cat)
//create a new fightSlime and fightBeast functions
function fightSlime() {

}
function fightBeast() {

}