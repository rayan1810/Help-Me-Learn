import logo from "./logo.svg";
import "./App.css";
import Input from "./components/input";
import NavBar from "./components/navbar";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LoginPage, SignupPage, HomePage } from "./pages";
function App() {
  return (
    <div className="App">
      {/* <Input
        layoutProps="mt-4"
        rightIcon={<i className="fas fa-user"></i>}
        leftIcon={<i className="fas fa-user"></i>}
      /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/signup">
              <SignupPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
