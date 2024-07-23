import './App.css';
import {cercaProfilo } from './data/fetch';

function App() {

  return (
    <>
    <h1>Sono la Home</h1>
    <button onClick={() => cercaProfilo()} className='btn btn-primary'>Testa la fetch</button>
    </>

  );
}

export default App;
