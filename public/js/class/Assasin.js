import Personnage from "./Personnage.js"

class Assasin extends Personnage {

    constructor(name) {
        super(name)
        this.hp = this.hp * 1.25
        this.role = 'Assasin'
        this.atk = this.atk * 1.6
        this.atkSpell = this.atkSpell * 1
        this.armor = this.armor * 3
    }

}

export default Assasin