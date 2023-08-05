
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Read from './components/Read';
import Create from './components/Create';
import Update from './components/Update';

function App() {
  return(
    <main>
      <h1>CURD OPERATION</h1>
      <BrowserRouter>
       <Routes>
        <Route path='/read' element={ <Read/>}/>
        <Route path='/' element={ <Create/>}/>
        <Route path='/update' element={ <Update/>}/>
       </Routes>
      </BrowserRouter>
     
   
    </main>

  )
}

export default App;
