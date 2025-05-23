import { useContext } from "react"

import { QuizContext } from "../context/quiz"

import Category from "../img/category.svg"

import "../components/PickCategory.css"

const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext)

  function chooseCategoryAndReorderQuestions(category) {
    dispatch({ type: "START_GAME", payload: category })

    dispatch({ type: "REORDER_QUESTIONS" })
  }

  return (
    <div id="category">
      <h2>Escolha uma categoria</h2>
      <p>As perguntas serão referentes a uma das linguagens abaixo:</p>
      {quizState.questions.map((question) => (
        <button className="btn"
          onClick={() => chooseCategoryAndReorderQuestions(question.category)}
          key={question.category}
        >
          <span>{question.category}</span>
        </button>
      ))}

      <img src={Category} alt="Categoria do Quiz" />
    </div>
  );
};

export default PickCategory;
