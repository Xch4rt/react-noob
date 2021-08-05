//import logo from './logo.svg';
//import './App.css';
import {useState} from 'react'; // useState para trabajar con variables y crear funciones
import Perfil from './componentes/Perfil';
function App() {
  const [nombre, cambiarNombre] = useState('No tiene nombre');

  function eventoCajaTexto(e)
  {
    cambiarNombre(e.target.value);
  }
  return (
    <div>
      <h1>Hola esto empezando a aprender React hooks {nombre}</h1>
      
      <input name="nombre" type="text" value={nombre} onChange={eventoCajaTexto}></input>

      <Perfil />
        
    </div>
  );
}

export default App;
