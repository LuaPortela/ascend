import { useContext } from "react"

import { QuizContext } from "../context/quiz"

import WellDone from "../img/welldone.svg"

import "../components/GameOver.css"

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div id="gameover">
      <h2>Fim de jogo!</h2>
      <p>Pontuação: {quizState.score}</p>
      <p>
        Você acertou {quizState.score} de {quizState.questions.length}{" "}
        perguntas.
      </p>
      <img src={WellDone} alt="Fim do Quiz" />
      <button className="btn" onClick={() => dispatch({ type: "NEW_GAME" })}><span>Reiniciar</span></button>
    </div>
  )
}

export default GameOver