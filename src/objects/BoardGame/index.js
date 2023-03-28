import CardFrontBack from "../../components/CardFrontBack";
import "./style.css";

const BoardGame = (amountCards) => {
  const $htmlCardFrontBack = CardFrontBack(6);
  const $htmlContent =          
  $htmlCardFrontBack.repeat(amountCards)

  return /*html*/`
    <section class="board-game">
      ${$htmlContent}
    </section>
  
  `

}

export default BoardGame;