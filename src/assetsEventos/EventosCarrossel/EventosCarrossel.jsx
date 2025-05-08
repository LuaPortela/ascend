import 'swiper/css';
import 'swiper/css/navigation';
import Styles from '../EventosCarrossel/EventosCarrossel.module.css';
import evento1 from '../images/evento1.jpg'
import evento2 from '../images/evento5.jpg'
import evento3 from '../images/evento2.png'
import evento4 from '../images/evento3.png'
import evento5 from '../images/evento2.jpg'

function EventosCarrossel() {
    
    return (
        <div className={Styles.container} id="eventos-section">
            <h2 className={Styles.titulo}>Próximos Eventos</h2>
            <hr />
            <button>Passe o mouse nas imagens</button>
            <div className={Styles.curso2}>
                <p>
                O Hackaton Woman in Tech é mais do que uma competição: é um movimento que valoriza e incentiva a presença feminina na tecnologia. Mulheres de diferentes áreas se reúnem para criar soluções com impacto real, ao mesmo tempo em que compartilham experiências, aprendem com mentoras incríveis e se fortalecem mutuamente. É um espaço seguro, inspirador e cheio de energia para quem quer transformar o mundo com tecnologia e dar visibilidade ao talento feminino no setor.
                </p>
                <img src={evento2} alt="" />
            </div>
            <div className={Styles.curso3}>
            <img src={evento5} alt="" />
                <p>
                O Codecon Summit é um evento feito para quem ama tecnologia e desenvolvimento de software. Reúne pessoas de todo o Brasil para falar sobre programação, inovação e as tendências que estão moldando o futuro da área. É um espaço onde iniciantes e experientes se encontram para trocar ideias, aprender juntos e mergulhar em trilhas cheias de conteúdo prático e inspirador. Tudo isso com uma vibe acolhedora e focada em comunidade.
                </p>
            </div>
            <div className={Styles.curso4}>
                <p>
                Caxias 2025 Pessoas Tecnologia é um encontro que coloca as pessoas no centro da transformação digital da região da Serra Gaúcha. O evento reúne profissionais de TI, líderes comunitários, empresas e estudantes em torno de temas como inovação cidadã, tecnologia com impacto social e formação de talentos locais. Com um olhar voltado para o futuro, o evento propõe uma Caxias mais conectada, inclusiva e preparada para os desafios da nova economia digital.
                </p>
                <img src={evento4} alt="" />
            </div>
            <div className={Styles.curso5}>
                
            <img src={evento3} alt="" />    
                <p>
                O Porteira 443 é um evento único que une tecnologia e o cotidiano do interior do Brasil. Voltado para profissionais de TI, agricultores conectados e empreendedores rurais, ele traz à tona debates sobre conectividade, segurança digital e inovação no campo. Com palestras práticas, demonstrações de soluções em IoT agrícola e discussões sobre inclusão tecnológica nas zonas rurais, o evento mostra que tecnologia não tem fronteiras e que o campo também é digital.
                </p> 
            </div>
            <div>
                <img className={Styles.effect2} src="https://www.fiap.com.br/imgs/mba/home/header/effects.webp" alt="" />
            </div>
        </div>
    );
}

export default EventosCarrossel
