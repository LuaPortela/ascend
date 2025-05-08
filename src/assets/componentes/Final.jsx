import Styles from '../css/Final.module.css';
import Video from '../../assets/video3.mp4';
import { InView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

function Final() {
  return (
    <section className={Styles.final}>
      <div className={Styles.video}>
        <video autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
      </div>

      <div className={Styles.container}>
        <h2>Pronto para ascender <br /> na tecnologia?</h2>
        <h3>
          Junte-se a milhares de iniciantes que <br /> estão transformando suas
          vidas.
        </h3>
      </div>

      <Link to="/login" className={Styles.botao}>
        Cadastre-se <br /> grátis
      </Link>
      <Link to="/planos" className={Styles.botao}>
        Conheça os <br /> nossos planos
      </Link>
    </section>
  );
}

export default Final;