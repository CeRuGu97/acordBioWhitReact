import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';
import Circulos from '../containers/Circulos';
import Escalas from '../containers/Escalas';
import '../assets/styles/App.css';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/circulos' element={<Circulos />} />
        <Route path='/escalas' element={<Escalas />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
