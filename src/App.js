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

    pesquisa: '',
    precoMax: '',
    precoMin: '',

    formNome: '',
    formDescricao: '',
    formPreco: '',
    formMetodo: [],
    formData: '',

    carrinhoTotal: '',
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
        console.log(' ### ');
      })
      .catch((error) => {
        console.log(' ### ');
      });
  };

  createJob = () => {
    const url = `https://labeninjas.herokuapp.com/jobs`;
    let body = {
      title: ' ## this.state.formNome ## ',
      description: ' ## this.state.formDescricao ## ',
      price: '## this.state.formPreco ##',
      paymentMethods: '## this.state.formMetodo ##', // body diferente, olhar API
      dueDate: '## this.state.formData ## ', // body diferente, olhar API
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

  deleteJob = (id) => {
    const url = `https://labeninjas.herokuapp.com/jobs/${id}`;
    axios
      .delete(url, chaveAPI)
      .then((resp) => {
        console.log(' ### ');
      })
      .catch((error) => {
        console.log(' ### ');
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

  // getAllJobs = () => {
  //   const url = 'https://labeninjas.herokuapp.com/jobs';
  //   axios
  //     .get({
  //       url,
  //       chaveAPI,
  //     })
  //     .then((res) => {
  //       console.log('funcionando');
  //     })
  //     .catch((err) => {
  //       console.log(err.response.data);
  //     });
  // };

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
          />
        );

      case 'Carrinho':
        return (
          <Carrinho
            irParaCadastro={this.irParaCadastro}
            irParaCards={this.irParaCards}
            irParaHome={this.irParaHome}
            irParaDetalhes={this.irParaDetalhes}
          />
        );

      case 'Detalhes':
        return (
          <Detalhes
            irParaCadastro={this.irParaCadastro}
            irParaCards={this.irParaCards}
            irParaCarrinho={this.irParaCarrinho}
            irParaHome={this.irParaHome}
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
