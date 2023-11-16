import './App.css';
import Hola from './components/Hola';

function App() {
  return (
    <div className= "container">
      <div className="hello_wolrd">
        <h1> 
          Hello World! 
          <Hola/>
        </h1>
      </div>
    </div> 
  );
}


export default App;
