import { useState, useEffect } from 'react';
import Styles from '../EventoDestaques/EventoDestaque.module.css';
import codecon from '../images/codecon.png';

function EventoDestaque() {
    const targetDate = new Date('2025-07-18T09:30:00');

    const [timeLeft, setTimeLeft] = useState(getTimeLeft());

    function getTimeLeft() {
        const now = new Date();
        const difference = targetDate - now;

        let time = {};

        if (difference > 0) {
            time = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            time = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return time;
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className={Styles.container}>
            <div className={Styles.overlay}><img src={codecon} className={Styles.imagem} alt="" /> <button>SAIBA MAIS</button></div>
            <div>
                <h1>Evento de Tecnologia</h1>
                <p>Eventos e networking</p>
            </div>
            <div>
                <img className={Styles.effect1} src="https://www.fiap.com.br/imgs/mba/home/courses/graphics.webp" alt="" />
            </div>
        </section>
    );
}

export default EventoDestaque
