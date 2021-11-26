import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import Cadastro from './Cadastro';
import Cards from './Cards';
import Home from './home';
import Carrinho from './Carrinho';
import Detalhes from './Detalhes';
import axios from 'axios';

const chaveAPI = {
  headers: {
    Authorization: '120a13d3-3f0f-4686-84d8-4fb62eee0636',
  },
};

class App extends React.Component {
  state = {
    telaAtual: 'Home',

    servicos: [],
    carrinho: [],
    detalhes: [],

    pesquisa: '',
    precoMax: '',
    precoMin: '',

    formNome: '',
    formDescricao: '',
    formPreco: '',
    formMetodo: [],
    formData: '',

    carrinhoTotal: '',

    titulo:"",
    preco:"",
    descricao:"",
    metodos:"",
    data:"",
  };



  componentDidMount() {
    this.getAllJobs();
  }

  onChangeBuscar = (event) => {
    this.setState({ pesquisa: event.target.value });
    // console.log(this.state.pesquisa)
  };

  onChangePrecoMax = (event) => {
    // console.log(event.target.value);
    this.setState({ precoMax: event });
  };

  onChangePrecoMin = (event) => {
    this.setState({ precoMin: event });
  };

  onClickAdicionarAoCarrinho = (id) => {
    const novoCarrinho = [...this.state.carrinho, id];
    this.setState({ carrinho: novoCarrinho });

    console.log(this.state.carrinho);
  }

  //              FORM funções || 

  onChangeFormNome = (event) => {
    this.setState({ formNome: event.target.value })
  }

  onChangeFormDescricao = (event) => {
    this.setState({ formDescricao: event.target.value })
  }

  onChangeFormPreco = (event) => {
    this.setState({ formPreco: event.target.value })
  }

  onChangeFormMetodo = (event) => {
    this.setState({ formMetodo: event.target.value })
  }

  onChangeFormData = (event) => {
    this.setState({ formData: event.target.value })
  }

  onClickDetail = (item) => {
    // this.setState({detalhes: item})
    // this.setState(
    //   {titulo: item.title},
    //   {preco: item.price},
    //   {descricao: item.description},
    //   {metodos: item.paymentMethods},
    //   {data: item.dueDate},)

      this.irParaDetalhes()

    console.log(item.description)
  };
  //              API funções || ### = nomeclatura

  getAllJobs = () => {
    const url = `https://labeninjas.herokuapp.com/jobs`;
    axios
      .get(url, chaveAPI)
      .then((resp) => {
        this.setState({ servicos: resp.data.jobs });
        // console.log(resp.data.jobs)
      })
      .catch((error) => {
        console.log(' ### ');
      });
  };

  getJobById = (id) => {
    const url = `https://labeninjas.herokuapp.com/jobs/${id}`;
    axios
      .get(url, chaveAPI)
      .then((resp) => {
        console.log(id);
      })
      .catch((error) => {
        console.log(' ### ');
      });
  };

  createJob = () => {
    const url = `https://labeninjas.herokuapp.com/jobs`;
    let body = {
      title: this.state.formNome,
      description: this.state.formDescricao,
      price: this.state.formPreco,
      paymentMethods: this.state.formMetodo, // body diferente, olhar API
      dueDate: this.state.formData, // body diferente, olhar API
              };
    axios
      .post(url, body, chaveAPI)
      .then((resp) => {
        console.log(resp);
      })
      .catch((error) => {
        console.log(' ### ');
      });
  };

  deleteJob = (id) => {
    const url = `https://labeninjas.herokuapp.com/jobs/${this.props.id}`;
    axios
      .delete(url, chaveAPI)
      .then((resp) => {
        this.getJobById(id)
        this.getAllJobs(id)
        console.log(this.deleteJob)
      })
      .catch((error) => {
        console.log(error);
        console.log(this.deleteJob)
      });
  };

  updateJob = (id) => {
    const url = `https://labeninjas.herokuapp.com/jobs/${id}`;
    let body = {
      taken: true,
    };
    axios
      .post(url, body, chaveAPI)
      .then((resp) => {
        console.log(' ### ');
      })
      .catch((error) => {
        console.log(' ### ');
      });
  };



  escolherTela = () => {
    switch (this.state.telaAtual) {
      case 'Home':
        return (
          <Home
            irParaCadastro={this.irParaCadastro}
            irParaCards={this.irParaCards}
            irParaCarrinho={this.irParaCarrinho}
            irParaDetalhes={this.irParaDetalhes}
          />
        );

      case 'Cadastro':
        return (
          <Cadastro
            irParaHome={this.irParaHome}
            irParaCards={this.irParaCards}
            irParaCarrinho={this.irParaCarrinho}
            irParaDetalhes={this.irParaDetalhes}
            createJob={this.createJob}
            onChangeFormNome={this.onChangeFormNome}
            onChangeFormDescricao={this.onChangeFormDescricao}
            onChangeFormPreco={this.onChangeFormPreco}
            onChangeFormMetodo={this.onChangeFormMetodo}
            onChangeFormData={this.onChangeFormData}
          />
        );

      case 'Carrinho':
        return (
          <Carrinho
            irParaCadastro={this.irParaCadastro}
            irParaCards={this.irParaCards}
            irParaHome={this.irParaHome}
            irParaDetalhes={this.irParaDetalhes}
            carrinho={this.state.carrinho}
            getAllJobs={this.getAllJobs}
            getJobById={this.getJobById}
            deleteJob={this.deleteJob}
          />
        );

      case 'Detalhes':
        return (
          <Detalhes
            irParaCadastro={this.irParaCadastro}
            irParaCards={this.irParaCards}
            irParaCarrinho={this.irParaCarrinho}
            irParaHome={this.irParaHome}
            titulo={this.state.titulo}
            preco={this.state.preco}
            descricao={this.state.descricao}
            metodos={this.state.metodos}
            data={this.state.data}
          />
        );

      case 'Cards':
        return (
          <Cards
            irParaCadastro={this.irParaCadastro}
            irParaHome={this.irParaHome}
            irParaCarrinho={this.irParaCarrinho}
            irParaDetalhes={this.irParaDetalhes}
            servicos={this.state.servicos}
            precoMin={this.state.precoMin}
            precoMax={this.state.precoMax}
            pesquisa={this.state.pesquisa}
            onChangeBuscar={this.onChangeBuscar}
            onChangePrecoMax={this.onChangePrecoMax}
            onChangePrecoMin={this.onChangePrecoMin}
            onClickAdicionarAoCarrinho={this.onClickAdicionarAoCarrinho}
            onClickDetail={this.onClickDetail}
          />
        );

      default:
        return <h1>Erro! :(</h1>;
    }
  };
  irParaHome = () => {
    this.setState({ telaAtual: 'Home' });
  };

  irParaCadastro = () => {
    this.setState({ telaAtual: 'Cadastro' });
  };
  irParaCards = () => {
    this.setState({ telaAtual: 'Cards' });
  };
  irParaCarrinho = () => {
    this.setState({ telaAtual: 'Carrinho' });
  };
  irParaDetalhes = () => {
    this.setState({ telaAtual: 'Detalhes' });
  };

  render() {
    return (
      <div>
        {this.escolherTela()}
        {this.getAllJobs}
      </div>
    );
  }
}

export default App;
