//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

function MakeCharacter(characterName, characterAttack, characterDefense, characterSpecial){
  this.name = characterName
  this.attack = characterAttack
  this.defense = characterDefense
  this.special = characterSpecial

  this.response = function(){
    console.log('You fool!')
  } 
  this.iWon = function(){
    console.log(`I won! ${this.special}`)
  }
}