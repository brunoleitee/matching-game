import './style.css'

const CardGame = (icon = 'alura-pixel',alt = 'Logo da Alura' ) => {
  return /*html*/`
  <div class="card-container">
    <article class='card-game'>
      <img src="images/${icon}.png" alt="${alt}">
    </article>
  </div>
  `
}

export default CardGame;