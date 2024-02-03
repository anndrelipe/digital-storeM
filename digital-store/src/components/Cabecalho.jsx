import React from 'react'
import Logo from './Logo.jsx';
import CaixaPesquisa from './CaixaPesquisa.jsx';
import Cadastro from './Cadastro.jsx';
import BotaoRegistro from './BotaoRegistro.jsx';
import CarrinhoCompras from './CarrinhoCompras.jsx';
import MenuNavegacao from './MenuNavegacao.jsx';
import BuyCar from './BuyCar.jsx';

const Cabecalho = () => {
  return (
    <>
    <div className='container-cabecalho'>
        <Logo />
        <CaixaPesquisa />
        <Cadastro />
        <BotaoRegistro />
        <BuyCar />
    </div>
    <div>
    <div>
        <MenuNavegacao />
    </div>
    </div>
    </>
  )
}

export default Cabecalho