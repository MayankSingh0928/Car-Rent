import './App.css';
import{Routes, Route , BrowserRouter} from 'react-router-dom';
import { Navigate, Outlet } from "react-router-dom";
import Home from './pages/Home';
import Home2 from './pages/Home2';
import Contact from './pages/Contact'
import Login from './pages/Login';
import Register from './pages/Register';
import BookingCar from './pages/BookingCar';
import UserBookings from './pages/UserBooking';
import AddCar from './pages/AddCar';
import AdminHome from './pages/AdminHome';
import EditCar from './pages/EditCar';
import About from './pages/About';
import LoginAdmin from './pages/LoginAdmin';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/Login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>

          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/home2" element={<Home2 />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/booking/:carid" element={<BookingCar />} />
            <Route path="/userbookings" element={<UserBookings />} />
            <Route path="/addcar" element={<AddCar />} />
            <Route path="/editcar/:carid" element={<EditCar />} />
            <Route path="/admin" element={<AdminHome />} />
            <Route path='/loginadmin' element={<LoginAdmin />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

export function ProtectedRoute() {
  if (localStorage.getItem("user")) {
    return <Outlet />; // Render nested protected routes
  } else {
    return <Navigate to="/login" replace />;
  }
}
