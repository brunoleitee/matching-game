import CardGame from "../../components/CardGame";
import "./style.css";

const BoardGame = (amountCards) => {
  const $htmlCardGame = CardGame();
  const $htmlContent =          
  $htmlCardGame.repeat(amountCards)

  return /*html*/`
    <section class="board-game">
      ${$htmlContent}
    </section>
  
  `

}

export default BoardGame;