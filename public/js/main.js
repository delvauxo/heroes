// Imports.
import Archer from "./class/Archer.js"
import Assasin from "./class/Assasin.js"
import Magician from "./class/Magician.js"
import Warrior from "./class/Warrior.js"
import Monstre from "./class/Monster.js"
import Game from "./class/Game.js"

// Create heroes.
const hanzo = new Archer("Hanzo")
const muradin = new Warrior("Muradin")
const orphea = new Magician("Orphea")
const qhira = new Assasin("Qhira")

// Create monsters.
const garrosh = new Monstre('Garrosh')
const guldan = new Monstre('Guldan')
const butcher = new Monstre('Butcher')
const deathwing = new Monstre('Deathwing')

// Add heroes and monsters to array.
const heroes = [hanzo, muradin, orphea, qhira]
const monsters = [garrosh, guldan, butcher, deathwing]
console.log(heroes, monsters)

/**
 * Function - Create HTML cards.
 * @param {Array} heroesObjArray - Array of Objects.
 * @param {String} type
 * @returns 
 */
function cardHtml(heroesObjArray, type) {
  let html = ''
  for (const hero of heroesObjArray) {
    html += `<div class="${type}-card-container" data-player="${hero.name}">`
    html += `<div class="${type}-card">`
    html += `<img src="./public/img/${hero.name.toLowerCase()}.jpg" alt="${hero.name} portrait">`
    html += `<div class="${type}-name">${hero.name}</div>`
    html += `<div class="${type}-role">${hero.role}</div>`
    html += `<div class="${type}-hp">hp : ${hero.hp}</div>`
    html += `<div class="${type}-mana">mana : ${hero.mana}</div>`
    html += `<div class="${type}-atk">attack : ${hero.atk}</div>`
    html += `<div class="${type}-atk">attack spell : ${hero.atkSpell}</div>`
    html += `<div class="${type}-armor">armor : ${hero.armor}</div>`
    html += `<div class="${type}-armor">armor Spell : ${hero.armorSpell}</div>`
    html += `<div class="${type}-armor">level : ${hero.lvl}</div>`
    html += `</div>`
    html += `<div class="btns-container"></div>`
    html += `</div>`
  }
  return html
}

// Create HTML Cards.
const heroesCards = cardHtml(heroes, 'hero')
const monstersCards = cardHtml(monsters, 'monster')

// Selectors.
const heroesElem = document.querySelector('#heroes')
const monstersElem = document.querySelector('#monsters')

// Insert heroes cards into HTML element.
heroesElem.innerHTML = heroesCards
monstersElem.innerHTML = monstersCards

// Selectors.
const heroesCardsElem = document.querySelectorAll('#heroes .hero-card-container')
const selectElem = document.querySelector('#buttonChoice')

// For all Heroes Cards.
for (const heroCard of heroesCardsElem) {
  // On Hero Card click.
  heroCard.addEventListener('click', function() {
    for (const item of heroesCardsElem) {
      // Remove all 'is-selected' classes.
      item.classList.remove('is-selected')
    }
    // Add 'is-selected' class.
    this.classList.toggle('is-selected')
    // Enable select button.
    selectElem.removeAttribute('disabled')
  })
}

// On select click button.
selectElem.addEventListener('click', function(e) {

  // Disable Select button once game is started.
  this.setAttribute('disabled', '')

  // Start GAME.
  const game = new Game()
  // Select random monster.
  game.monsterSelection()
  // Get selected players.
  const playersSelected = document.querySelectorAll('.is-selected')
  // Set players.
  const player1 = heroes.find(hero => hero.name === playersSelected[0].dataset.player)
  const player2 = monsters.find(monster => monster.name === playersSelected[1].dataset.player)
  // Initiate GAME with players.
  game.gameInitiate(player1, player2)

})