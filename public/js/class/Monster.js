import Personnage from "./Personnage.js"

class Monstre extends Personnage {
  constructor(name){
    super(name)
    this.hp = this.hp * 1
    this.role = 'Monster'
  }

}

export default Monstre