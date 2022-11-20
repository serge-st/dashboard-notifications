import './App.css';
import { FC } from "react";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './components/AppRouter';

const App: FC = () => {
    return (
        <div className='App'>
            <Router>
                <Header />
                <AppRouter />
                <Footer />
            </Router>
        </div>
    );
}
export default App;