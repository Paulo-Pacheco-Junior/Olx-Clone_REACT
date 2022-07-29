import RoutesApp from './RoutesApp';
import { BrowserRouter } from 'react-router-dom';
import { Template } from './components/MainComponents';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import './App.css';

const App = () => {

  return (
    <BrowserRouter>
      <Template>
        <Header />

        <RoutesApp/>

        <Footer />
      </Template>
    </BrowserRouter>
  );
}

export default App;
