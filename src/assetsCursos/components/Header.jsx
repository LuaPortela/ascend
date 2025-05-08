import styles from './Header.module.css';
import html from '../img/html.svg'
import css from '../img/css.svg'
import js from '../img/js.svg'
import react from '../img/react.svg'
import csharp from '../img/c.svg'
import java from '../img/java.svg'
import python from '../img/python.svg'
import sql from '../img/sql.svg'

const Cursos = () => {

  return(
    <main className={styles.main}>
      <img className={styles.imgfundo} src="https://www.fiap.com.br/shift/imgs/home/jornadas-imersivas/background.png" alt="" />

      <section className={styles.txtinicio}>
        <h1>
          <span>Descubra imersões e cursos</span> de curta duração desenvolvidos para criar o amanhã com conhecimento, inovação e tecnologia.
        </h1>
      </section>

      <section className={styles.cursos}>
        <div className={styles.front}>
          <div className={styles.fronttxt}>
            <h1>O QUE É FRONT-END</h1>
            <p>
              Front-end é a parte visual e interativa de um site ou aplicativo, ou seja, tudo que o usuário vê e com o que interage diretamente. Quando você entra em um site, clica em botões, vê imagens, preenche formulários ou navega por páginas — tudo isso foi criado pelo desenvolvedor front-end.
            </p>
            <div className={styles.imgs}>
              <img src={html} alt="HTML" />
              <img src={css} alt="CSS" />
              <img src={react} alt="JavaScript" />
              <img src={js} alt="React" />
            </div>
          </div>
        </div>

        <div className={styles.back}>
          <div className={styles.fronttxt}>
            <h1>O QUE É BACK-END</h1>
            <p>
              Back-end é a parte invisível de um site ou aplicativo, ou seja, tudo que acontece por trás das câmeras para que as coisas funcionem de verdade. Enquanto o front-end cuida da aparência e da interação, o back-end cuida da lógica, dos dados e da comunicação com o servidor.
            </p>
            <div className={styles.imgs}>
              <img src={csharp} alt="Python" />
              <img src={python} alt="C++" />
              <img src={java} alt="Java" />
              <img src={sql} alt="MySQL" />
            </div>
          </div>
        </div>

        <div className={styles.outros}>
          <div className={styles.fronttxt}>
            <h1>O QUE É FULL-STACK</h1>
            <p>
              É o profissional que trabalha tanto com front-end quanto com back-end. Ele entende a estrutura visual, a lógica por trás e sabe como tudo se conecta. É muito valorizado, porque consegue desenvolver projetos completos do zero, sozinho ou em equipe.
            </p>
            <div className={styles.imgs}>
            <img src={html} alt="HTML" />
              <img src={css} alt="CSS" />
              <img src={react} alt="JavaScript" />
              <img src={js} alt="React" />
              <img src={csharp} alt="Python" />
              <img src={python} alt="C++" />
              <img src={java} alt="Java" />
              <img src={sql} alt="MySQL" />
            </div>
          </div>
        </div>

        <div className={styles.motivacional}>
          <h1>
            - Ouvir o chamado da tecnologia e da inovação é ir em direção à criatividade, à transformação, à aceleração das coisas boas. É avançar com a mente e o coração para criar nada menos do que um grande amanhã.
          </h1>
          <button>Scroll <br /> down</button>
        </div>

        <div className={styles.frontend}>
          <h1>Front-end</h1>
          <div className={styles.cursosfront}>
            <div>
              <h2>HTML e CSS</h2>
              <a href="https://www.cursoemvideo.com/curso/html5-css3-modulo1/" target="_blank" rel="noopener noreferrer">
                Ver curso
              </a>
            </div>
            <div>
              <h2>HTML, CSS, JS, React e TypeScript</h2>
              <a href="https://www.alura.com.br/curso-online-react-typescript" target="_blank" rel="noopener noreferrer">
                Ver curso
              </a>
            </div>
            <div>
              <h2>JavaScript e ProcessingJS</h2>
              <a href="https://www.khanacademy.org/computing/computer-programming" target="_blank" rel="noopener noreferrer">
                Ver curso
              </a>
            </div>
            <div>
              <h2>React</h2>
              <a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/" target="_blank" rel="noopener noreferrer">
                Ver curso
              </a>
            </div>
          </div>
          <h1>Back-end</h1>
          <div className={styles.cursosback}>
            <div>
              <h2>Java</h2>
              <a href="https://www.alura.com.br/curso-online-java-iniciantes" target="_blank" rel="noopener noreferrer">
                Ver curso
              </a>
            </div>
            <div>
              <h2>Python</h2>
              <a href="https://www.codecademy.com/learn/learn-python-3" target="_blank" rel="noopener noreferrer">
                Ver curso
              </a>
            </div>
            <div>
              <h2>MySQL</h2>
              <a href="https://www.w3schools.com/sql/" target="_blank" rel="noopener noreferrer">
                Ver curso
              </a>
            </div>
          </div>
          <h1>Outros</h1>
          <div className={styles.outros2}>
            <div>
              <h2>PROAPROFISSÃO</h2>
              <a href="https://www.proa.org.br/proprofissao/" target="_blank" rel="noopener noreferrer">
                Ver curso
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cursos;
