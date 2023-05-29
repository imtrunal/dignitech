import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import View from './pages/View'
import Edit from './pages/Edit';

function App() {
    return (
        <>
            <Routes>
                <Route path='/dashboard' element={<Home />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/user/:id' element={<View />} />
                <Route path='/user/:id/edit' element={<Edit />} />
            </Routes>
        </>
    )
}

export default App;
