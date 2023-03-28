import PlayerName from '../../components/PayerName/index';
import "./style.css"

const ScoreBoard = () => {
  return /*html*/`
    <header class="score-board">
      ${PlayerName("Player 1")}
      ${PlayerName("Player 2")}
    </header>
  `
}

export default ScoreBoard;