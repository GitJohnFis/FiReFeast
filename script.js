//console.log("Hello World");
console.log("Hello World");
   let exp = 0;
   let health = 100;
   let armor = 10;
    let gold = 50;
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
        console.log("Going to cave.");
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

}
function myWeapon() {

}
//creating an empty location function to take care of goTown and goStore repetions
function update(location) {
    button1.innerText = "Go to store";
    button2.innerText = "Go to cave";
    button3.innerText = "Fight dragon";
    button1.onclick = goStore;
    button2.onclick = goCave;
    button3.onclick = fightDragon;
    text.innerText = "You are in the town square. You see a sign that says \"Store\".";
  }

//In any RPG you need to make data structures for the different locations e.g Cave, Store, town square
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
        }
];
 //use string in the key of an object if multiple text need to be shown

    // console.log["Number of legs"] or 
    // console.log(cat.name) //*Whiskers
  // use objects to build my locations array or options
console.log(cat)