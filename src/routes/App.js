import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';
import Circulos from '../containers/Circulos';
import Escalas from '../containers/Escalas';
import OneSignal from 'react-onesignal';
import '../assets/styles/App.css';

const App = () => {
  React.useEffect(() => {
    OneSignal.init({
      appId: "3feaffeb-6d82-497b-90ea-3767f61d0fbf",
    });
  }, []);

  return (
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
  )
};

export default App;
