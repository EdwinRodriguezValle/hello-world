import './App.css';
import Hola from './components/Hola';
import Footer from './components/footer/footer';


function App() {
  return (
    <div className= "container">
      <div className="hello_wolrd_Edwin">
        <h1> 
          Hello World 
          <Hola/>
          <Footer/>
        </h1>
      </div>
    </div> 
  );
}


export default App;
