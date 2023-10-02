import Loguin from './Loguin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Formulario from './Formulario';
import Edit from './Edit';
import GeneraLegajo from './generaLegajo';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Loguin ></Loguin>}/>
          <Route path='/usuarioLogueado' element={<Edit />}/>
          <Route path='/imprime' element={<GeneraLegajo />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
