class Game {

  constructor() {

  }

  // Random monster selection method.
  monsterSelection() {
    const monsters = document.querySelectorAll('#monsters .monster-card-container')
    const monsterRandom = Math.floor( Math.random() * monsters.length )
    monsters[monsterRandom].classList.add('is-selected')
  }

  // Initiate game method.
  gameInitiate(player1, player2) {

    // Remove Heroes selection screen.
    const selectionScreen = document.querySelector('#heroes-selection')
    selectionScreen.style.display = 'none'

    // Players cards container selectors.
    const player1Card = document.querySelector('#heroes-selection .hero-card-container.is-selected')
    const player2Card = document.querySelector('#heroes-selection .monster-card-container.is-selected')

    // Insert players cards into HTML.
    const versusElem = document.querySelector('#versus-container')
    versusElem.appendChild(player1Card)
    versusElem.appendChild(player2Card)

    // Attack buttons container selector.
    const atkHeroContainer = document.querySelector('#game .hero-card-container .btns-container')
    const atkMonsterContainer = document.querySelector('#game .monster-card-container .btns-container')
    // Create Attack buttons.
    const atkBtn = document.createElement("button")
    const atkSpellBtn = document.createElement("button")
    atkBtn.innerText = 'Attack'
    atkSpellBtn.innerText = 'Spell'
    // Hero.
    atkHeroContainer.appendChild(atkBtn)
    atkHeroContainer.appendChild(atkSpellBtn)
    // Monster.
    const atkBtn2 = atkBtn.cloneNode(true)
    const atkSpellBtn2 = atkSpellBtn.cloneNode(true)
    atkMonsterContainer.appendChild(atkBtn2)
    atkMonsterContainer.appendChild(atkSpellBtn2)

    // Player 1 - Basic attack.
    atkBtn.addEventListener('click', function(e) {
      player1.attack(player2)
      console.log(player2.hp)
    })
    
    // Player 1 - Spell attack.
    atkSpellBtn.addEventListener('click', function() {
      player1.attackSpell(player2)
      console.log(player2.hp)
    })
    
    // Player 2 - Basic attack.
    atkBtn2.addEventListener('click', function() {
      player2.attack(player1)
      console.log(player1.hp)
    })

    // Player 2 - Spell attack.
    atkSpellBtn2.addEventListener('click', function() {
      player2.attackSpell(player1)
      console.log(player1.hp)
    })

    console.log(player1)
    console.log(player2)
    
  }

}

export default Game