import { useState, useEffect } from 'react';
import axios from 'axios';
import Styles from '../Formulario/Formulario.module.css';
import Recentes from '../Recentes/Recentes';
import Luana from './Luana.jpg';

function Formulario() {
    const [posts, setPosts] = useState([]);
    const [postsFiltrados, setPostsFiltrados] = useState([]);
    const [tipo, setTipo] = useState('');
    const [area, setArea] = useState('');
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [erro, setErro] = useState('');

    // Buscar posts do servidor
    const fetchPosts = async () => {
        try {
            const response = await axios.get('https://testepython-production.up.railway.app/posts');
            setPosts(response.data);
            setPostsFiltrados(response.data); // Inicialmente mostra todos
        } catch (error) {
            console.error('Erro ao buscar os posts:', error);
            setErro('Erro ao carregar os posts.');
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    // Função para enviar novo post
    const EnviarPost = async (e) => {
        e.preventDefault();

        const novoPost = {
            tipo: tipo,
            area: area,
            titulo: titulo,
            descricao: descricao,
            nome: "Novo Usuário",
            data_publicacao: new Date().toISOString().slice(0, 10)
        };

        try {
            await axios.post('https://testepython-production.up.railway.app/posts', novoPost);
            alert('Post criado com sucesso!');
            setTipo('');
            setArea('');
            setTitulo('');
            setDescricao('');
            fetchPosts(); // Recarrega posts
            setErro('');
        } catch (error) {
            console.error('Erro ao enviar post:', error);
            setErro('Erro ao enviar post.');
        }
    };

    // Função para filtrar os posts pela área
    const filtrarPorArea = (areaSelecionada) => {
        if (areaSelecionada === 'Todos') {
            setPostsFiltrados(posts);
        } else {
            const filtrados = posts.filter(
                post => post.area.toLowerCase() === areaSelecionada.toLowerCase()
            );
            setPostsFiltrados(filtrados);
        }
    };

    return (
        <section className={Styles.section}>
            <div className={Styles.container_formulario}>
                <h2>Preencha o formulário</h2>
                <form onSubmit={EnviarPost}>
                    <label htmlFor="tipo">Tipo</label>
                    <select id="tipo" value={tipo} onChange={(e) => setTipo(e.target.value)}>
                        <option value="">Selecione</option>
                        <option value="Ajuda">Pedido de ajuda</option>
                        <option value="Oferta">Oferta de ajuda</option>
                    </select>

                    <label htmlFor="area">Área</label>
                    <select id="area" value={area} onChange={(e) => setArea(e.target.value)}>
                        <option value="">Selecione</option>
                        <option value="Front-end">Front-end</option>
                        <option value="Back-end">Back-end</option>
                        <option value="Outros">Outros</option>
                    </select>

                    <label htmlFor="titulo">Título</label>
                    <textarea
                        id="titulo"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        placeholder="Ex: Como centralizar uma div?"
                    />

                    <label htmlFor="descricao">Descrição</label>
                    <textarea
                        className={Styles.descricao}
                        id="descricao"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        placeholder="Descreva sua dúvida ou oferta de ajuda"
                    />

                    <input type="submit" value="Publicar" />
                    <p className={Styles.form_login}>Faça <a href="#">LOGIN</a> para publicar</p>
                </form>
                {erro && <p className={Styles.erro}>{erro}</p>}
            </div>

            <div className={Styles.posts}>
                <h2 className={Styles.titulo_posts}>Posts recentes</h2>
                <div className={Styles.posts_props}>
                    <Recentes texto_tech={'Todos'} onFiltrar={filtrarPorArea} />
                    <Recentes texto_tech={'Front-end'} onFiltrar={filtrarPorArea} />
                    <Recentes texto_tech={'Back-end'} onFiltrar={filtrarPorArea} />
                    <Recentes texto_tech={'Outros'} onFiltrar={filtrarPorArea} />
                </div>

                {postsFiltrados.length > 0 ? (
                    postsFiltrados.map((post, index) => (
                        <div key={post._id || index} className={Styles.comentarios}>
                            <div className={Styles.container_com}>
                                <div className={post.tipo === 'Ajuda' ? Styles.ajuda : Styles.oferta}>
                                    {post.tipo}
                                </div>
                                <div className={Styles.dev}>{post.area}</div>
                                <p>{post.data_publicacao}</p>
                            </div>
                            <h2 className={Styles.texto_comentarios}>{post.titulo}</h2>
                            <p className={Styles.paragrafo_comentarios}>{post.descricao}</p>
                            <div className={Styles.users}>
                                <img src={Luana} alt="Usuário" />
                                <p>{post.nome}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Não há posts para mostrar.</p>
                )}
            </div>
            <div className={Styles.imgfundo}>
                <img src="https://www.fiap.com.br/wp-content/themes/fiap2016/images/fiap/vitrines/vestibular/effects2.png" alt="" />
                <img src="https://www.fiap.com.br/wp-content/themes/fiap2016/images/fiap/vitrines/alura/effects.png" alt="" />
            </div>
        </section>
    );
}

export default Formulario;
