import { useContext, useEffect } from "react"
import { QuizContext } from "../assetsQuiz/context/quiz"

import Welcome from "../assetsQuiz/components/Welcome"
import Question from "../assetsQuiz/components/Question"
import GameOver from "../assetsQuiz/components/GameOver"
import PickCategory from "../assetsQuiz/components/PickCategory"
import Conexao_Quiz from "../assetsQuiz/components/Conexao"


import "./Quiz.css"
function QuizPage() {
  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div className="App">
    <Conexao_Quiz/>
    <div className='imgfundo'><img className="img" src="https://www.fiap.com.br/wp-content/themes/fiap2016/images/fiap/vitrines/alura/effects.png" alt="" /></div>
      <div className="fundo">
       
                    
        
        {quizState.gameStage === "Start" && <Welcome />}
        {quizState.gameStage === "Category" && <PickCategory />}
        {quizState.gameStage === "Playing" && <Question />}
        {quizState.gameStage === "End" && <GameOver />}
      </div>
    </div>
  )
}

export default QuizPage
