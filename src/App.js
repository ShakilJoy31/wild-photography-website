import { Route, Routes } from 'react-router-dom';
import About from './About/About';
import './App.css';
import Blog from './Blog/Blog';
import CheckOut from './CheckOut/CheckOut';
import Home from './Home/Home';
import Login from './LogIn/Login';
import Footer from './SheredComponents/Footer';
import Header from './SheredComponents/Header';
import NotFound from './SheredComponents/NotFound';
import RequireAuth from './SheredComponents/RequireAuth';
import SignUp from './SignUp/SignUp';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>

        <Route path='/blog' element={<Blog></Blog>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
