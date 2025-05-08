import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './assets/componentes/Header';
import Meio from './assets/componentes/Meio';
import Cards from './assets/componentes/Cards';
import Final from './assets/componentes/Final';
import Rodape from './assets/componentes/Rodape';
import LoginPage from './pages/Login';
import MentoriaPage from './pages/Mentoria';
import Cursos from './pages/Cursos';
import QuizPage from './pages/Quiz';
import ForumPage from './pages/Forum';
import Eventos from './pages/Eventos';
import Planos from './pages/RecursosPro';

function App() {
  return (
    <BrowserRouter>
      <main className="fundo">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Meio />
                <Cards />
                <Final />

              </>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/mentoria" element={<MentoriaPage />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/forum" element={<ForumPage />} />
          <Route path="/planos" element={<Planos />} />
        </Routes>
        <Rodape />
      </main>
    </BrowserRouter>
  );
}

export default App