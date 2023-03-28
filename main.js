import "./src/styles/settings/colors.css"
import "./src/styles/elements/base.css"
import "./src/styles/generic/reset.css"
import ScoreBoard from "./src/objects/ScoreBoard"
import BoardGame from './src/objects/BoardGame/index';

const $root = document.querySelector('#root')

$root.insertAdjacentHTML(
  'beforebegin',
  `
  ${ScoreBoard()}
  ${BoardGame(2)}
  `
)