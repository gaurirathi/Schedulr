import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import AllTask from './components/AllTask';
import AddTask from './components/AddTask';
import EditTask from './components/EditTask';
import {BrowserRouter, Routes ,Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/all' element={<AllTask />} />
        <Route path='/add' element={<AddTask />} />
        <Route path='/edit/:id' element={<EditTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
