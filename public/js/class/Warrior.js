import Personnage from "./Personnage.js"

class Warrior extends Personnage {

    constructor(name) {
        super(name)
        this.hp = this.hp * 1.5
        this.role = 'Warrior'
        this.atk = this.atk * 1
        this.armor = this.armor * 4
    }

}

export default Warrior