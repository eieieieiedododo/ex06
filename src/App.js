import './App.css';
import RouterPage from './components/RouterPage';
import home from './imgs/any.jpg'

function App() {
    return (
        <div className="App">
            <img src={home} width="100%"/>
            <RouterPage/>
        </div>
    );
}

export default App;