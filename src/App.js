import React from 'react'
import { Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import styled, {createGlobalStyle} from "styled-components";

import Home from './components/Home/Home'
import Category from './components/Category/Category'
import Card from './components/Card/Card'
import News from './components/News/News'
import About from './components/About/About'
import Contacts from './components/Contacts/Contacts'
import Payment from './components/Payment/Payment'

const Div = styled.div`
`
const Main = styled.main`
  @media(max-width: 991px){
    padding-top: 150px;
  }
  @media(max-width: 525px){
    padding-top: 120px;
  }
`
const Global = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;

    font-family: 'Roboto';

    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
  }
  a{
    text-decoration: none;
  }
  button{
    cursor: pointer;
  }
`


function App() {

  return (
    <Div>
      <Global/>
          <Header/>

          <Main className="main">
              <Route exact path="/" render={()=> <Home/>} />
              <Route path="/category" render={()=> <Category/>} />
              <Route path="/card" render={()=> <Card/>} />
              <Route path="/news" render={()=> <News/>} />
              <Route path="/about" render={()=> <About/>} />
              <Route path="/contacts" render={()=> <Contacts/>} />
              <Route path="/payment" render={()=> <Payment/>} />
          </Main>
          <Footer/>
    </Div>
  );
}

export default App;
