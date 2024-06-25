
import ReactDOM from 'react-dom';
import App from './App';
import MyContext from './MyContext';

const rootElement = document.getElementById('root');
ReactDOM.render(
    <MyContext.Provider value={{ name: 'Guest' }}>
        <App />
    </MyContext.Provider>,
    rootElement
);

