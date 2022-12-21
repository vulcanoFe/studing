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
          <Route path="/" component={<Home />} exact />
          <Route path="/all" component={AllUsers} exact />
          <Route path="/add" component={AddUser} exact />
          <Route path="/edit/:id" component={EditUser} exact />
          <Route component={NotFound} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
