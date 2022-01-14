import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Dashboard } from './components/Dashboard';
import { Homepage } from './components/Homepage';
import { Login } from './components/Login';
import { Navbar } from './components/Navbar';
import { Registration } from './components/Registration';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/login" element={ <Login></Login>}></Route>
        <Route path="/register" element={ <Registration></Registration>}></Route>
      </Routes>
    </div>
  );
}

export default App;
