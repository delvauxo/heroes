import Personnage from "./Personnage.js"

class Magician extends Personnage {

    constructor(name) {
        super(name)
        this.hp = this.hp * 0.75
        this.role = 'Magician'
        this.atk = this.atk * 1.4
        this.armor = this.armor * 1
    }

}

export default Magician