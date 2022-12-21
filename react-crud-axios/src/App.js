import './App.css';
import Navbar from  './Components/Navbar';
import Home from './Components/Home';
import AllUsers from './Components/AllUser';
import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser';
import NotFound from './Components/NotFound';
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/all" element={<AllUsers />} exact />
          <Route path="/add" element={<AddUser />} exact />
          <Route path="/edit/:id" element={<EditUser />} exact />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
