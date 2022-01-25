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
    // this.mana = this.mana + 5

    // Log dealt damages.
    const p = document.createElement('p')
    let html = `<span class="${(target.role !== 'Monster') ? 'txt-red' : 'txt-green'}">${this.name}</span>`
        html += ` deals `
        html += `${(this.atk - target.armor)} damages to `
        html += `<span class="${(target.role !== 'Monster') ? 'txt-green' : 'txt-red'}">${target.name}</span>`
    p.innerHTML = html
    const selector = document.querySelector('#versus-gamelog')
    selector.prepend(p)

    // Update life (hp) bar status.
    let hpBar = ''
    if(target.role != 'Monster') {
      hpBar = document.querySelector('#game .hero-card-container.is-selected .card-hp')
    } else {
      hpBar = document.querySelector('#game .monster-card-container.is-selected .card-hp')
    }
    const hpStart = hpBar.dataset.hp
    const hpLeft = (target.hp * 100) / hpStart
    hpBar.style.width = hpLeft + '%'

    // Update life (hp) VS status.
    const hpVSHero = document.querySelector('#game #hero-hp-left')
    const hpVSMonster = document.querySelector('#game #monster-hp-left')
    if(target.role != 'Monster') {
      hpVSHero.textContent = target.hp
    } else {
      hpVSMonster.textContent = target.hp
    }
  }

  // Attack (spell) method.
  attackSpell(target) {

    // Attack.
    target.hp = target.hp + target.armorSpell - this.atkSpell

    // Reduce Mana.
    this.mana = this.mana - 25
    const p = document.createElement('p')
    let html = `<span class="${(target.role !== 'Monster') ? 'txt-red' : 'txt-green'}">${this.name}</span>`
        html += ` deals `
        html += `${(this.atkSpell - target.armorSpell)} damages to `
        html += `<span class="${(target.role !== 'Monster') ? 'txt-green' : 'txt-red'}">${target.name}</span>`
    p.innerHTML = html
    const selector = document.querySelector('#versus-gamelog')
    selector.prepend(p)

    // Update life (hp) bar status.
    let hpBar = ''
    if(target.role != 'Monster') {
      hpBar = document.querySelector('#game .hero-card-container.is-selected .card-hp')
    } else {
      hpBar = document.querySelector('#game .monster-card-container.is-selected .card-hp')
    }
    const hpStart = hpBar.dataset.hp
    const hpLeft = (target.hp * 100) / hpStart
    hpBar.style.width = hpLeft + '%'

    // Update mana bar status.
    let manaBar = ''
    if(this.role != 'Monster') {
      manaBar = document.querySelector('#game .hero-card-container.is-selected .card-mana')
    } else {
      manaBar = document.querySelector('#game .monster-card-container.is-selected .card-mana')
    }
    const manaStart = manaBar.dataset.mana
    const manaLeft = (this.mana * 100) / manaStart
    manaBar.style.width = manaLeft + '%'

    // Update life (hp) VS status.
    const hpVSHero = document.querySelector('#game #hero-hp-left')
    const hpVSMonster = document.querySelector('#game #monster-hp-left')
    if(target.role != 'Monster') {
      hpVSHero.textContent = target.hp
    } else {
      hpVSMonster.textContent = target.hp
    }
  }

}

export default Personnage;
