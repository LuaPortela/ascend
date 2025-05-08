import Styles from '../css/Cards.module.css';
import chapeu from '../Gifs_UC3/chapeu.gif';
import maos from '../Gifs_UC3/aperto_de_mao.gif';
import calendario from '../Gifs_UC3/calendario.gif';
import lampada from '../Gifs_UC3/lampada.gif';
import moeda from '../Gifs_UC3/bolsa_de_dinheiro.gif';
import { InView } from 'react-intersection-observer';
import { Link } from 'react-router-dom'; // Importe o Link

function Cards() {
  return (
    <>
      <div className={Styles.ajuda} id="cards-section">
        <p>Como Ascend te ajuda?</p>
      </div>
      <section className={Styles.fundo}>
        <InView threshold={0.1}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`${Styles.rosa} ${inView ? Styles.visible : ''}`}
            >
              <div className={Styles.caixa1}>
                <img className={Styles.chapeu} src={chapeu} alt="" />
                <h1>Cursos Acessíveis</h1>
                <p className={Styles.paragrafo}>
                  Lista completa de cursos gratuitos e acessíveis para iniciantes
                  em tecnologia.
                </p>
                <Link to="/cursos">
                  <h3 className={Styles.setaRosa}>Ver cursos ➞ </h3>
                </Link>
              </div>
            </div>
          )}
        </InView>

        <InView threshold={0.1}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`${Styles.laranja} ${inView ? Styles.visible : ''}`}
            >
              <div className={Styles.caixa1}>
                <img className={Styles.maos} src={maos} alt="" />
                <h1>Conexão de Ajuda</h1>
                <p className={Styles.paragrafo}>
                  Peça ou ofereça ajuda em nossa comunidade de aprendizado
                  (necessário login)
                </p>
                <Link to="/forum">
                  <h3 className={Styles.setaLaranja}>Conectar ➞ </h3>
                </Link>
              </div>
            </div>
          )}
        </InView>

        <InView threshold={0.1}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`${Styles.roxo} ${inView ? Styles.visible : ''}`}
            >
              <div className={Styles.caixa1}>
                <img className={Styles.calendario} src={calendario} alt="" />
                <h1 className={Styles.eventos}>
                  Eventos <br /> Tech
                </h1>
                <p className={Styles.paragrafo}>
                  Conheça eventos gratuitos ou pagos de tech e tenha a
                  oportunidade de participar.
                </p>
                <Link to="/eventos">
                  <h3 className={Styles.setaRoxa}>Ver agenda ➞ </h3>
                </Link>
              </div>
            </div>
          )}
        </InView>

        <InView threshold={0.1}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`${Styles.limao} ${inView ? Styles.visible : ''}`}
            >
              <div className={Styles.caixa1}>
                <img className={Styles.lampada} src={lampada} alt="" />
                <h1 className={Styles.quiz}>
                  Quiz de <br /> Conhecimento
                </h1>
                <p className={Styles.paragrafo}>
                  Teste o seu conhecimento clicando no botão abaixo.
                </p>
                <Link to="/quiz">
                  <h3 className={Styles.setaLimao}>Fazer quiz ➞ </h3>
                </Link>
              </div>
            </div>
          )}
        </InView>

        <InView threshold={0.1}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`${Styles.vermelho} ${inView ? Styles.visible : ''}`}
            >
              <div className={Styles.caixa1}>
                <img className={Styles.moeda} src={moeda} alt="" />
                <h1 className={Styles.mentoria}>Mentoria/ Recurso Pro</h1>
                <p className={Styles.paragrafo}>
                  Mentoria personalizada com profissionais tech para assinantes.
                </p>
                <Link to="/mentoria">
                  <h3 className={Styles.setaVermelha}>Saber mais ➞ </h3>
                </Link>
              </div>
            </div>
          )}
        </InView>
      </section>
    </>
  );
}

export default Cards;