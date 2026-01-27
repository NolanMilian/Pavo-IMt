function dnd5eCharacter1(){
    this.game = 'dnd5e';
    this.public = true;
    this.name = '';
    this.campaignName = 'Demo';
    this.health = { max: 100, total: 100, temp: 0 };
    this.race = 'High Elf';
    this.inspiration = false;

    this.classData = {

    };

    this.movementSpeed = {
        activeMovement: 'walking',
        walking: 30,
        climbing: 0,
        swimming: 0,
        flying: 0,
        burrowing: 0
    };
    
};




export {dnd5eCharacter1}