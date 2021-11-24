import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import { ConfigProvider } from 'antd';
import ptBR from 'antd/lib/locale/pt_BR';
import App from './App';


ReactDOM.render(

  <React.StrictMode>
    <ConfigProvider locale={ptBR}>
    <App />
    </ConfigProvider>
  </React.StrictMode>,

  document.getElementById('root')
);

