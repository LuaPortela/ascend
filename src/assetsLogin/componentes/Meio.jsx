import React, { useState } from 'react';
import Styles from '../css/Meio.module.css';
import Bolinhas from '../Imagens/bolinhas.png';
import Contorno from '../Imagens/contorno_branco.png';
import Espiral from '../Imagens/espiral2.png';
import Estrelas from '../Imagens/estrelas.png';
import Foguete from '../Imagens/foguete2.png';
import Moeda from '../Imagens/moeda2.png';
import Nuvem from '../Imagens/nuvem.png';
import Video from '../../assets/Final.mp4'

function Meio2() {
    const [isLoginActive, setIsLoginActive] = useState(true);
    const [loginUser, setLoginUser] = useState('');
    const [loginPass, setLoginPass] = useState('');
    const [cadastroEmail, setCadastroEmail] = useState('');
    const [cadastroPass, setCadastroPass] = useState('');

    const handleCadastro = () => {
        const userData = {
            email: cadastroEmail,
            password: cadastroPass
        };
        localStorage.setItem('user', JSON.stringify(userData));
        console.log('Usuário cadastrado!');
        setIsLoginActive(true);
    };

    const handleLogin = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.email === loginUser && user.password === loginPass) {
            console.log('Login bem-sucedido!');
        } else {
            console.log('Usuário ou senha incorretos.');
        }
    };

    return (
        <section className={Styles.atras}>
             <div className={Styles.video} > <video autoPlay loop muted><source src={Video} type='video/mp4' /> </video></div>
            <div className={Styles.container}>
                <div
                    className={Styles.coluna1}
                    style={{
                        borderRadius: isLoginActive ? '0 30% 20% 0' : ''
                    }}
                >
                    <div className={Styles.imagens}>
                        <div className={Styles.contorno}><img src={Contorno} alt="" /></div>
                        <div className={Styles.bolinhas}><img src={Bolinhas} alt="" /></div>
                        <div className={Styles.moeda}><img src={Moeda} alt="" /></div>
                        <div className={Styles.espiral}><img src={Espiral} alt="" /></div>
                        <div className={Styles.foguete}><img src={Foguete}></img></div>
                        <div className={Styles.nuvem}><img src={Nuvem} alt="" /></div>
                        <div className={Styles.estrelas}><img src={Estrelas} alt="" /></div>
                    </div>
                    <p className={Styles.palavrasDestaque}>
                        Você está a poucos minutos de distância <br />
                        de aprimorar suas habilidades com <span> ASCEND </span>
                    </p>
                </div>

                <div
                    className={Styles.coluna2}
                    style={{
                        borderRadius: !isLoginActive ? '0 20% 30% 0' : ''
                    }}
                >
                    <div className={Styles.btnBox}>
                        <button
                            className={Styles.btn1}
                            style={{
                                backgroundColor: isLoginActive ? '#00e1ff9c' : 'rgba(148, 251, 255, 0.2)'
                            }}
                            onClick={() => setIsLoginActive(true)}
                        >
                            Entrar
                        </button>
                        <button
                            className={Styles.btn2}
                            style={{
                                backgroundColor: !isLoginActive ? '#00e1ff9c' : 'rgba(0, 217, 255, 0.2)'
                            }}
                            onClick={() => setIsLoginActive(false)}
                        >
                            Cadastre-se
                        </button>
                    </div>

                    <div
                        className={Styles.login_form}
                        style={{
                            left: isLoginActive ? '50%' : '150%',
                            opacity: isLoginActive ? 1 : 0,
                            transition: 'all 0.5s ease'
                        }}
                    >
                        <div className={Styles.form_titulo}>
                            <span>Entre com sua conta</span>
                        </div>
                        <div className={Styles.form_inputs}>
                            <div className={Styles.input_box}>
                                <input
                                    type="text"
                                    className={Styles.input_field}
                                    placeholder="Usuário"
                                    value={loginUser}
                                    onChange={(e) => setLoginUser(e.target.value)}
                                    required
                                />
                                <i className="bx bx-user icon"></i>
                            </div>
                            <div className={Styles.input_box}>
                                <input
                                    type="password"
                                    className={Styles.input_field}
                                    placeholder="Senha"
                                    value={loginPass}
                                    onChange={(e) => setLoginPass(e.target.value)}
                                    required
                                />
                                <i className="bx bx-lock-alt icon"></i>
                            </div>
                            <div className={Styles.forgot_pass}>
                                <a href="#">Esqueceu a senha?</a>
                            </div>
                            <div className={Styles.input_box}>
                                <button className={Styles.input_submit} onClick={handleLogin}>
                                    <span>Entrar ➞</span>
                                    <i className="bx bx-right-arrow-alt"></i>
                                </button>
                            </div>
                        </div>
                        <div className={Styles.social_login}>
                            <i className="bx bxl-google"></i>
                            <i className="bx bxl-facebook"></i>
                            <i className="bx bxl-twitter"></i>
                            <i className="bx bxl-github"></i>
                        </div>
                    </div>

                    <div
                        className={Styles.cadastro_form}
                        style={{
                            left: !isLoginActive ? '50%' : '-50%',
                            opacity: !isLoginActive ? 1 : 0,
                            transition: 'all 0.5s ease'
                        }}
                    >
                        <div className={Styles.form_titulo}>
                            <span>Cadastre-se</span>
                        </div>
                        <div className={Styles.form_inputs}>
                            <div className={Styles.input_box}>
                                <input
                                    type="email"
                                    className={Styles.input_field}
                                    placeholder="Email"
                                    value={cadastroEmail}
                                    onChange={(e) => setCadastroEmail(e.target.value)}
                                    required
                                />
                                <i className="bx bx-envelope icon"></i>
                            </div>
                            <div className={Styles.input_box}>
                                <input
                                    type="password"
                                    className={Styles.input_field}
                                    placeholder="Senha"
                                    value={cadastroPass}
                                    onChange={(e) => setCadastroPass(e.target.value)}
                                    required
                                />
                                <i className="bx bx-lock-alt icon"></i>
                            </div>
                            <div className={Styles.forgot_pass}>
                                <a href="#">Esqueceu a senha?</a>
                            </div>
                            <div className={Styles.input_box}>
                                <button className={Styles.input_submit} onClick={handleCadastro}>
                                    <span>Cadastre-se ➞</span>
                                    <i className="bx bx-right-arrow-alt"></i>
                                </button>
                            </div>
                        </div>
                        <div className={Styles.social_login}>
                            <i className="bx bxl-google"></i>
                            <i className="bx bxl-facebook"></i>
                            <i className="bx bxl-twitter"></i>
                            <i className="bx bxl-github"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Meio2;
