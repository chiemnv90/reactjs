import logo from './logo.svg';
import './App.scss';
import Myconponent from './Example/Myconponent';
import Home from './Example/Home';
import ListTodo from './Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ListUsers from './User/ListUsers';
import DetailUser from './User/DetailUser';



function App() {
  // const App = () => {  // arrow function.
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          {<Nav />}
          <img src={logo} className="App-logo" alt="logo" />

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/about">
              <Myconponent />
            </Route>
            <Route path="/user" exact>
              <ListUsers />
            </Route>
            <Route path="/user/:id">
              <DetailUser />
            </Route>
          </Switch>

        </header>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

      </div>
    </BrowserRouter>
  );
}

export default App;
