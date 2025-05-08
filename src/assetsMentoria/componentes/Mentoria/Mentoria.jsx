import Styles from './Mentoria.module.css'
import React, { useRef, useEffect, useState } from 'react';
import flatpickr from 'flatpickr';
import LuanaImg  from '../../images/Luana.png'
import RafaellaImg from  '../../images/Rafaella.png'
import MidoriImg from '../../images/Midori.png'
import GustavoImg from '../../images/Gustavo.png'
import DiegoImg from '../../images/Diego.png'
import CarlosImg from '../../images/Carlos.png'
import AndreyImg from '../../images/Andrey.png'


function Mentoria() {

    const inputRef = useRef();

    const [form, setForm] = useState({
        name: '',
        email: '',
        telefone: '',
        objetivo: '',
        observacoes: '',
        date: '',
    });

    useEffect(() => {
        if (inputRef.current) {
            flatpickr(inputRef.current, {
                inline: true,
                dateFormat: 'd-m-Y',
                defaultDate: 'today',
                onChange: (selectedDates, dateStr) => {
                    setForm((prev) => ({ ...prev, date: dateStr }));
                },
            });
        }
    }, []);


    const [mentorEscolhido, setMentorEscolhido] = useState('');
    const [horaEscolhida, setHoraEscolhida] = useState('');

    const [agendamentoConfirmado, setAgendamentoConfirmado] = useState(false);

    const [mensagem, setMensagem] = useState('');

    const mentores = [
        { nome: 'Luana Portela', funcao: 'Back-end', imagem: LuanaImg},
        { nome: 'Rafaella Marques', funcao: 'Front-end', imagem: RafaellaImg},
        { nome: 'Carlos Eduardo Vitor', funcao: 'Full Stack', imagem: CarlosImg },
        { nome: 'Andrey Miranda', funcao: 'Analista de dados', imagem: AndreyImg },
        { nome: 'Diego Libone', funcao: 'Desenvolvedor mobile', imagem: DiegoImg},
        { nome: 'Gustavo Garbim', funcao: 'Cyber Segurança', imagem: GustavoImg},
        { nome: 'Giovana Midori Kayo', funcao: 'Full Stack', imagem: MidoriImg }
    ];
    const horas = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleConfirmar = (e) => {
        e.preventDefault();

        const { name, email, telefone, objetivo, observacoes, date } = form;

        if (!name || !email || !telefone || !objetivo || !observacoes || !date || !mentorEscolhido || !horaEscolhida) {
            alert('Dados inválidos!');
            return;
        }

        setMensagem(
            `A sua monitoria foi marcada para o dia ${date} às ${horaEscolhida} com o mentor ${mentorEscolhido}`
        );

        // Armazenar localmente
        localStorage.setItem('Nome:', name);
        localStorage.setItem('E-mail:', email);
        localStorage.setItem('Telefone:', telefone);
        localStorage.setItem('Objetivo:', objetivo);
        localStorage.setItem('Observações:', observacoes);

        setAgendamentoConfirmado(true);
    };



    return (
        <>

            {!agendamentoConfirmado && (

                <section className={Styles.conteudo}>
                                        
                    <div className={Styles.imgfundo}>
                        <img src="https://www.fiap.com.br/wp-content/themes/fiap2016/images/fiap/vitrines/vestibular/effects2.png" alt="" />
                        <img src="https://www.fiap.com.br/wp-content/themes/fiap2016/images/fiap/vitrines/alura/effects.png" alt="" />
                    </div>
                    <div className={Styles.textos}>
                        <h2>Agendar sessão de mentoria</h2>
                        <h3>Preencha os detalhes abaixo para agendar sua sessão</h3>
                    </div>

                    
                    <hr />
                    <div className={Styles.container}>
                        <div className={Styles.mentor}>
                            <h3>Escolha seu mentor</h3>
                            {mentores.map((mentor, index) => (
                                <button
                                    key={index} // Alternativa segura se nomes se repetirem
                                    className={Styles.mentor_container}
                                    style={{
                                        backgroundColor: mentorEscolhido === mentor.nome ? '#8000ff' : '',
                                        color: mentorEscolhido === mentor.nome ? 'white' : '',
                                        borderColor: mentorEscolhido === mentor.nome ? 'purple' : '',
                                    }}
                                    onClick={() => setMentorEscolhido(mentor.nome)}
                                >
                                    <img className={Styles.imagem_mentor} src={mentor.imagem} alt="mentor.nome" />
                                    <div className={Styles.conteudo_mentor}>
                                        <h3 className={Styles.nome}>{mentor.nome}</h3>
                                        <p className={Styles.paragrafo}>{mentor.funcao}</p>
                                    </div>
                                </button>
                            ))}
                        </div>

                        <div className={Styles.calendario}>
                            <h3>Escolha sua data e hora</h3>
                            <form action="#" method="post">
                                <input id="date" ref={inputRef} type="text" />
                                <p>Horário Disponível</p>
                            </form>
                            <div className={Styles.container_horario}>
                                {horas.map((hora) => (
                                    <button
                                        key={hora}
                                        className={Styles.horario}
                                        style={{
                                            backgroundColor: hora === horaEscolhida ? '#8000ff' : '',
                                            color: hora === horaEscolhida ? 'white' : '',
                                        }}
                                        onClick={() => setHoraEscolhida(hora)}
                                    >
                                        {hora}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <hr />
                    <h3 className={Styles.seus_dados}>Seus dados</h3>
                    <form onSubmit={handleConfirmar} action="#" method="post">
                        <div className={Styles.container_infos}>
                            <div className={Styles.primeiras_infos}>
                                <label htmlFor="#">Nome completo:</label>
                                <input
                                    type="text"
                                    value={form.name}
                                    name="name"
                                    onChange={handleInputChange}
                                    placeholder="Digite seu nome"
                                />
                                <label htmlFor="#">Telefone:</label>
                                <input
                                    value={form.telefone}
                                    onChange={handleInputChange}
                                    type="tel"
                                    name="telefone"
                                    id="phone"
                                    placeholder="Digite seu telefone"
                                />
                            </div>
                            <div className={Styles.segundas_infos}>
                                <label htmlFor="#">E-mail:</label>
                                <input
                                    value={form.email}
                                    onChange={handleInputChange}
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Digite seu email"
                                />
                                <label htmlFor="#">Objetivo da mentoria:</label>
                                <input
                                    value={form.objetivo}
                                    onChange={handleInputChange}
                                    type="text"
                                    name="objetivo"
                                    id="objetivo"
                                    placeholder="Qual seria o objetivo da mentoria?"
                                />
                            </div>
                        </div>

                        <div className={Styles.obs}>
                            <label htmlFor="#">Observações:</label> <br />
                            <textarea
                                name="observacoes"
                                value={form.observacoes}
                                onChange={handleInputChange}
                                id="observacoes"
                                placeholder="Observações"
                            ></textarea>
                        </div>
                                    
                        <div className={Styles.confirmacao}>
                        <input type="submit" name="enviar" id="enviar" value="Confirmar Agendamento" />
                    </div>

                    </form>
                </section>
                
            )}

            {agendamentoConfirmado && (

                <section className={Styles.resumofundo}>
                    <div className={Styles.resumo}
                        style={{
                            position: 'relative',
                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            width: '40%',
                            height: 'auto',
                            borderRadius: '10px',
                            padding: '40px',
                            margin: '0 auto',
                            boxShadow: '0px 0px 50px 10px rgba(0, 0, 0, 0.63)',
                            zIndex: 1,
                        }}
                    >
                        <h3>Resumo do agendamento:</h3>
                        <p><strong>Mentor:</strong> {mentorEscolhido}</p>
                        <p><strong>Data:</strong> {form.date}</p>
                        <p><strong>Horário:</strong> {horaEscolhida}</p>
                        <p><strong>Nome:</strong> {form.name}</p>
                        <p><strong>Email:</strong> {form.email}</p>
                        <p><strong>Telefone:</strong> {form.telefone}</p>
                        <p><strong>Objetivo:</strong> {form.objetivo}</p>
                        <p><strong>Observações:</strong> {form.observacoes}</p>
                        <p className={Styles.obrigada}><strong>Obrigada por marcar sua mentoria conosco!</strong></p>
                    </div>
                </section>
            )}
        </>
    )
}

export default Mentoria