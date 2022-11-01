
//import './App.css';
import logoo from "./RadicallX-Black-Logo 1.png"

function App() {
  return (
    <div className="App">
      <div className='max'></div>
      <img className="logo" src={logoo} alt="RadicalX logo"/>
      <form className="log">
        <p className="logi">Login</p>
        <input type="email" className="email" name="email" placeholder="email"/>
        <input type="password" className="pwd" name="pwd" placeholder="password"></input>
        <label className="labe">
        <input type="checkbox" />Remember me
      </label>
     
     
        <button className="btn"><a className="design">Login</a></button>
      </form>

    </div>
  );
}

export default App;
