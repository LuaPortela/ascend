import './Eventos.css'  
import EventosCarrossel from '../assetsEventos/EventoDestaques/EventoDestaque'
import EventoDestaque from '../assetsEventos/EventosCarrossel/EventosCarrossel'
import Rodape from '../assets/componentes/Rodape'


function Eventos() {

  return (
    <>
      <main className={'fundoEventos'}>
          <EventosCarrossel />
          <EventoDestaque />
      </main>
    </>
  )
}

export default Eventos
