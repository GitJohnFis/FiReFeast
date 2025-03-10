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
    function goStore() {
        console.log("Going to store.");
    }
    //Create an interaction where you go to cave/home
    function goCave() {
        console.log("Going to cave.");
    }