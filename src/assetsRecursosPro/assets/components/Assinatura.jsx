import styles from '../css/Assinatura.module.css'

function Assinatura(){
    return(
        <section className={styles.container}>
            <div className={styles.title}>
                <h1>RECURSOS PRO</h1>
            </div>
            <hr />
            <div className={styles.boxs}>
                <div className={styles.box1}>
                    <h1>PLANO</h1>
                    <div className={styles.boxhouver1}>
                        <button>SAIBA MAIS</button>
                    </div>
                </div>
                <div className={styles.box2}>
                    <h1>BENEFICIOS</h1>
                    <div className={styles.boxhouver2}>
                        <button>SAIBA MAIS</button>
                    </div>
                </div>
                <div className={styles.box3}>
                    <h1>PREÇO</h1>
                    <div className={styles.boxhouver3}>
                        <button>SAIBA MAIS</button>
                    </div>
                </div>
            </div>
            <div>
                <img className={styles.effect1} src="https://www.fiap.com.br/wp-content/themes/fiap2016/images/graduacao/financiamentos-e-bolsas/prouni/header/effects.png" alt="" />
                <img className={styles.effect2} src="https://www.fiap.com.br/wp-content/themes/fiap2016/images/graduacao/financiamentos-e-bolsas/fies/mais-informacoes/effects.png" alt="" />
                <img className={styles.effect3} src="https://www.fiap.com.br/wp-content/themes/fiap2016/images/graduacao/financiamentos-e-bolsas/plano-estendido/cursos/effects.png" alt="" />
                <img className={styles.effect4} src="https://www.fiap.com.br/wp-content/themes/fiap2016/images/graduacao/financiamentos-e-bolsas/effects.png" alt="" />
                <img className={styles.effect5} src="https://www.fiap.com.br/wp-content/themes/fiap2016/images/graduacao/financiamentos-e-bolsas/effects.png" alt="" />
            </div>
        </section>
    )
}

export default Assinatura;