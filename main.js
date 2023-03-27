import "./src/styles/settings/colors.css"
import "./src/styles/elements/base.css"
import "./src/styles/generic/reset.css"
import BoardGame from "./src/objects/BoardGame"
import PlayerName from "./src/components/PayerName"

const $root = document.querySelector('#root')

$root.insertAdjacentHTML(
  'beforebegin',
  `
  ${PlayerName("Player 1")}
  ${PlayerName("Player 2")}
  ${BoardGame(6)}
  `
)