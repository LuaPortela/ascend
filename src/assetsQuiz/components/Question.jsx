import { useContext, useState } from "react"
import { QuizContext } from "../context/quiz"
import Option from "./Option"
import "../components/Question.css"

const Question = () => { // Componente para exibir a pergunta e as opções de resposta
  const [quizState, dispatch] = useContext(QuizContext)
  const currentQuestion = quizState.questions[quizState.currentQuestion]

  const onSelectOption = (option) => {// Função para lidar com a seleção de uma opção
    dispatch({// Atualiza o estado do quiz com a opção selecionada
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option },
    })
  }

  console.log(quizState.optionToHide)

  return ( 
    <div id="question">
      <p>
        Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length} 
      </p>
      <h2>{currentQuestion.question}</h2>
      <div id="options-container">
        {currentQuestion.options.map((option) => (
          <Option
            option={option}
            key={option}
            answer={currentQuestion.answer}
            selectOption={() => onSelectOption(option)}
            hide={quizState.optionToHide === option ? "hide" : null} 
          />
        ))}
      </div>
      {!quizState.answerSelected && !quizState.help && ( // Se não houver resposta selecionada e nenhuma ajuda
        <>
          {currentQuestion.tip && (
            <button className="btn" onClick={() => dispatch({ type: "SHOW_TIP" })}><span>Dica</span></button>
          )}
          <button className="btn" onClick={() => dispatch({ type: "REMOVE_OPTION" })}>
            <span>Excluir uma</span>
          </button>
        </>
      )}
      {!quizState.answerSelected && quizState.help === "tip" && (
        <p>{currentQuestion.tip}</p>
      )}
      {quizState.answerSelected && (
        <button className="btn" onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
          <span>Continuar</span>
        </button>
      )}
    </div>
  )
}

export default Question
