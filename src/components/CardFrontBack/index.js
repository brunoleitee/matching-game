import CardGame from '../CardGame/index';
import "./style.css";

const CardFrontBack = () => {
  return /*html*/ `
    <article class="card-front-back">
      <div class="card -front">
        ${CardGame()}
      </div>
      <div class="card -back">
        ${CardGame("logo-javascript", "Logo Javascript")}
      </div>
    </article>
  
  
  `
}

export default CardFrontBack;