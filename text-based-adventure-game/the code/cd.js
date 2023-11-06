const rl = require("readline-sync");
var loop = true
var game = false
  var defy = false
  var gen = true


  


while(loop){
      
    var T = rl.question("would you like to start the game  y/n   :" );
  if (T == 'y'){   
     console.log("and thus the story begins")
       loop = false
       game = true
        console.log("please enter your name")
     var name = rl.question(":")
     console.log(" whats your gender 1. he/him 2. she/her 3. they/them")
     var gender = rl.question(":")
     while(gen){
      console.log(" whats your gender 1. he/him 2. she/her 3. they/them")
     var gender = rl.question(":")
      if (gender == "1" || "2" || "3"){
        gen = true
      }else{
        console.log("thats not an option plese enter 1 2 or 3")
        gen = false
      }
     }
        } else {
       if (T == 'n' ){
        console.log("uh ok ig :/");
        loop = false
       }else{
        console.log("this awnser is not valid")
       
    };
      };
    }







while(game){
    
  
console.log('[unknown voice]: remember your training ' + name)
console.log(" ")
console.log("you flash back to your training with trevor, a kings guard, a warlock")
console.log("but also your mentor and father figure")
console.log(" ")
console.log("[trevor] you fight well " + name ,"but there is still alot i can teach you");
console.log(" ")
console.log("you sit down with trevor and he tells you a story")
console.log("its a story about the under realm a place of chaos and destruction")
console.log(" ")
console.log("[trevor]the under realm is a world beneath our own where magic runs uncontrolled")
console.log("[trevor]from that chaos we use chants to controll it and thus we get spells")
console.log("[trevor]show me what you have learned try the ELECTRIC FUZE spell")
console.log("[trevor]to cast the spell say with iron i fuse my electric shock")
console.log("[trevor]remember this spell fuzes your blade with electicity giving it a shocking suprize try it out")
console.log("  ")

var tl = true
while(tl){
var training = rl.question(" :")
       if (training == "with iron i fuse my electric shock"){
        console.log("your sword lights up as sparks of lighning fly off it ")
        tl = false
       }else{
        console.log("[trevor] nothing seems to have happaned try again")
        console.log("[trevor]remember the chant is: with iron i fuse my electric shock")
       if(training == "nah"){
        console.log("[storymaster]listhen here you little shit you dare defy me how fucking dare you ill punish you for this")
        defy = true
       }
          

    
    }
}

if(defy){
    ///easteregg
}else{
    console.log("[trevor] good good you are well on your way")
    console.log("  ")
    console.log("  ")
    console.log("[unkown voice]open your eyes and kneel")
    console.log("  ")
    console.log("as you open your eyes you see before you the king ")
    console.log("you kneel and he officialy knights you as one of the kings guard")
    console.log("a few days after you are kingted you are ordered to arrest a rouge wizard who defyed the king")
    console.log(" ")
    console.log(" ")
    console.log("1. go to the lab of the rouge wizard and arrest him for his deeds")
    console.log("2. go to your local pub cuz that wizard aint worth your time")

game = false

}}

