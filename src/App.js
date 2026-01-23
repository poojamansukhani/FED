import './App.css';
import About from './component/About';
import Body from './component/Body';
import Login from './component/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './component/ProtectedRoute';
import { useState } from 'react';
import Accordion from './component/Accordion';

function App() {
  const [lang, setLang] = useState('en');
  
  return (
    <div className="App">
      <header className='bg-black text-white flex'>
        <h1 className='text-2xl font-bold mb-5 text-center py-3 mr-5'>Header</h1>
        <nav className='mr-5 py-3'>
          <a href='/'>Home </a>
          <a href='/about'> Aout</a>
          <a href='/accordion'> Accordion</a>
          <a href='/login'> Login</a>
        </nav>
        <select value={lang} onChange={(e)=>setLang(e.target.value)} className='text-black'>
          <option value="en">English</option>
          <option value="ru">Russia</option>
          <option value="sp">Spanish</option>
        </select>
      </header>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Body/>}/>
        <Route element={<ProtectedRoute/>}>
          {/* ALl protected route will come here  */}
          <Route path='/about' element={<About lang={lang}/>}/>
          <Route path='/accordion' element={<Accordion/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
