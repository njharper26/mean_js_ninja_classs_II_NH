function Ninja(name){
    var speed = 3;
    var strength = 3;
    this.name = name;
    this.health = 100;
    this.punch_taken = 5;
    this.kick_given = 15;
    this.sayName = function(){
        console.log("My name is " + this.name + "! I am a savage Ninja...");
    }
    this.showStats = function(){
        console.log("Ninja: " + this.name + ", Strength: " + strength + ", Speed: " + speed);
    }
    this.drinkSake = function(num){
        this.health += num;
        console.log("Drank sake!!! " + num + " pt. Health boost. Health: " + this.health);
    }
    this.battlePunchTaken = function(ninja){
        if (ninja instanceof Ninja){
            ninja.health -= this.punch_taken;
            console.log("Ninja battle!!! " + this.name + " punched " + ninja.name + ". " + ninja.name + " losses " + this.punch_taken + " health.");
        }
        else {
            console.log(ninja + " is not a valid Ninja. Create " + ninja + " using the 'Ninja' constructor");            
        }
    }
    this.battleKickGiven = function(ninja){
        if (ninja instanceof Ninja){
            this.health -= this.kick_given;
            console.log("Ninja battle!!! " + this.name + " kicked " + ninja.name + ". " + this.name + " losses " + this.kick_given + " strength.");
        }
        else {
            console.log(ninja + " is not a valid Ninja. Create " + ninja + " using the 'Ninja' constructor");            
        }
    }    
}

let ninja1 = new Ninja("Joe");
let ninja2 = new Ninja("Bob");
let ninja3 = "Gary";
ninja2.battleKickGiven(ninja3);
ninja2.battlePunchTaken(ninja3);
ninja2.battleKickGiven(ninja1);
ninja2.battlePunchTaken(ninja1);
