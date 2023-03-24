import CardGame from "./src/components/CardGame"
import "./src/styles/settings/colors.css"
import "./src/styles/elements/base.css"
import "./src/styles/generic/reset.css"

const $root = document.querySelector('#root')
const $htmlCardGame = CardGame()

console.log($htmlCardGame)
$root.insertAdjacentHTML('beforebegin',$htmlCardGame)