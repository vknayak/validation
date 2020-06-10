import React from 'react';
import './App.css';
import { Route,  Switch} from 'react-router-dom'
import Main from "./component/Main"
import ReactHookWithJoi from "./component/ReactHookWithJoi"
import ReactFormik from "./component/formik";
// import ReactFinalForm from "./component/ReactFinalForm";
import ReactHookWithYup from "./component/RectHookWithYup"
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/ReactHookWithJoi" component={ReactHookWithJoi} />
      <Route exact path="/ReactHookWithYup" component={ReactHookWithYup} />
      <Route exact path="/ReactFormik" component={ReactFormik} />
      </Switch>

      </header>
    </div>
  );
}

export default App;
