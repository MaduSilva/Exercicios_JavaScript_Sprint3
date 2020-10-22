import React, { Component } from 'react';
import Menu from '../../components/menu';
import Jumbotron from '../../components/jumbotron';

class Filmes extends Component {

    constructor() {
        super();

        this.state = {
            url: 'https://5f90969de0559c0016ad6b27.mockapi.io/filmes',
            filmes: []
        }
    }

    componentDidMount() {
        this.listar();
    }

    //lista os filmes 
    listar() {
        fetch(this.state.url, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(dados => {
                this.setState({ filmes: dados });
                console.log('filmes state: ' + this.state.filmes)
            })
            .catch(err => console.error(err));
    }

    //remove um filme
    remover(event){
        event.preventDefault();

        console.log(event.target.value); 

        fetch(this.state.url + '/' + event.target.value, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(dados => {
                alert('Filme removido');
                this.listar();
            })
            .catch(err => console.error(err));
    }

    editar(event){
        event.preventDefault();

        console.log(event.target.value);
    }



    render() {
        return (
            <div>
                <Menu />
                <Jumbotron titulo="Filmes" descricao="Gerencie seus filmes" />
                <div className="container">
                    <div className="bd-example" >
                        <form id="formFilme">
                            <input type="hidden" id="filmeId" />
                            <div className="form-group">
                                <label htmlFor="nome">Nome</label>
                                <input type="text" className="form-control" id="nome" aria-describedby="nome" placeholder="Informe o Nome" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="categoria">Categoria</label>
                                <input type="text" className="form-control" id="categoria" placeholder="Informe a Categoria" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="ano">Ano de Lançamento</label>
                                <input type="text" className="form-control small" id="anoLancamento" placeholder="Informe o Ano de Lançamento" />
                            </div>
                            <button type="reset" className="btn btn-secondary">Cancelar</button>
                            <button type="button" className="btn btn-success">Cadastrar</button>
                        </form>

                        <table className="table" style={{ marginTop: '40px' }}>
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Categoria</th>
                                    <th scope="col">Ano Lançamento</th>
                                    <th scope="col">Ações</th>
                                    <th scope="col"><button type="reset" className="btn btn-primary" >Novo Filme</button></th>
                                </tr>
                            </thead>
                            <tbody id="tabela-lista-corpo">
                                {
                                    this.state.filmes.map(item => {
                                        return (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.nome}</td>
                                                <td>{item.categoria}</td>
                                                <td>{item.anoLancamento}</td>
                                                <td>
                                                    <button type="button" className="btn btn-danger" value={item.id} onClick={this.remover.bind(this)}>Remover</button>
                                                    <button type="button" className="btn btn-warning" value={item.id}>Editar</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Filmes;