import CardGame from '../CardGame/index';
import "./style.css";

const CardFrontBack = () =>{
  return /*html*/ `
    <article class="card-front-back">
      ${CardGame()}
      ${CardGame("logo-javascript", "Logo Javascript")}
    </article>
  
  
  `
}

export default CardFrontBack;