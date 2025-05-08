import styles from '../css/Feedback.module.css'

function Feedback(){
    return(
        <section className={styles.container} id='planos'>
            <div className={styles.planos}>
                <h1>Plano</h1>
                <p>
                O Plano Ascend foi criado para quem quer transformar seu futuro com estratégia, apoio e oportunidades reais. Com foco no seu crescimento pessoal e profissional, você terá acesso direto a recursos exclusivos, orientações de especialistas e uma jornada planejada para o sucesso. É mais do que uma assinatura — é uma parceria com seu futuro. Ao entrar para o Ascend, você garante um espaço onde será ouvido, guiado e impulsionado na direção certa. Aqui, acreditamos que qualquer pessoa pode alcançar grandes resultados com o plano certo. Nosso compromisso é te entregar clareza, direção e evolução constante. Chegou a hora de sair da estagnação e assumir o controle da sua trajetória. Escolha o Ascend. Caminhe com quem te prepara para vencer.
                </p>
            </div>
            <div className={styles.beneficio}>
                <h1>Beneficios</h1>
                <p>
                Ao se tornar assinante do Ascend, você desbloqueia um universo de vantagens que aceleram sua jornada. Tenha acesso a mentorias individuais, onde especialistas vão te orientar pessoalmente, apontando seus pontos fortes e ajudando a superar desafios reais. Participe de eventos exclusivos com convidados que já chegaram onde você quer estar — e absorva o que há de mais atual no mercado. Além disso, desenvolva-se com um plano de carreira estruturado, pensado para te posicionar com clareza e foco no mercado profissional. Aqui, você não anda sozinho. Você caminha com suporte, conhecimento e networking de alto nível. Todos os benefícios foram pensados para entregar transformação real e resultados visíveis.
                </p>
            </div>
            <div className={styles.preco}>
                <h1>Preços</h1>
                <p>
                Por apenas R$ 49,90 por mês, você tem acesso a tudo que o Ascend oferece: mentorias, eventos, plano de carreira e muito mais. Esse valor é menor que uma pizza por mês — mas com um impacto que pode mudar sua vida inteira. Acreditamos que crescimento pessoal e profissional deve ser acessível, e por isso oferecemos um plano completo por um preço justo. Sem letras miúdas, sem taxas escondidas. Aqui, você sabe exatamente o que está pagando — e o retorno que está recebendo. Invista em você com o Ascend: um custo baixo, um valor imenso. Seu futuro começa com essa decisão simples. E ele custa só 49,90.
                </p>
                <button className={styles.btnadq}>ADQUIRIR</button>
            </div>

        </section>
    )
}

export default Feedback;