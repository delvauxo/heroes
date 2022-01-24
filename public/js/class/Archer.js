import Personnage from "./Personnage.js";

class Archer extends Personnage {

    constructor(name) {
        super(name)
        this.hp = this.hp * 1
        this.role = 'Archer'
        this.atk = this.atk * 2
        this.armor = this.armor * 2
    }
    
}

export default Archer