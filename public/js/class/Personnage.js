function gameLog(html) {
  selector = document.querySelector('#versus-gamelog')
  selector.appendChild(html)
}

class Personnage {
  
  // Constructor.
  constructor(name) {
    this.name = name;
    this.hp = 100;
    this.mana = 100;
    this.armor = 1;
    this.armorSpell = 10;
    this.atk = 5;
    this.atkSpell = 15;
    this.lvl = 1;
  }


  // Attack (basic) method.
  attack(target) {
    // Attack.
    target.hp = target.hp + target.armor - this.atk
    // Gain mana.
    this.mana = this.mana + 5
    const p = document.createElement('p')
    let html = `<span class="${(target.role !== 'Monster') ? 'txt-red' : 'txt-green'}">${this.name}</span>`
        html += ` attacks `
        html += `<span class="${(target.role !== 'Monster') ? 'txt-green' : 'txt-red'}">${target.name}</span>`
        html += ` with ${(this.atk - target.armor)} damages.`
    p.innerHTML = html
    const selector = document.querySelector('#versus-gamelog')
    selector.prepend(p)
  }

  // Attack (spell) method.
  attackSpell(target) {
    // Attack.
    target.hp = target.hp + target.armorSpell - this.atkSpell
    // Reduce Mana.
    this.mana = this.mana - 25
    const p = document.createElement('p')
    console.log(target.role)
    let html = `<span class="${(target.role !== 'Monster') ? 'txt-red' : 'txt-green'}">${this.name}</span>`
        html += ` attacks `
        html += `<span class="${(target.role !== 'Monster') ? 'txt-green' : 'txt-red'}">${target.name}</span>`
        html += ` with ${(this.atkSpell - target.armorSpell)} damages.`
    p.innerHTML = html
    const selector = document.querySelector('#versus-gamelog')
    selector.prepend(p)

  }

}

export default Personnage;
