import './Forum.css'

import Conexao from '../assetsForum/pagesForum/Conexao/Conexao'
import Formulario from '../assetsForum/pagesForum/Formulario/Formulario'


function ForumPage() {

  return (
    <>
      <main className={'fundoForum'}>

        <Conexao />
        <Formulario />
      </main>
    </>
  )
}

export default ForumPage
