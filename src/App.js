import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './component/Navbar';
import AddStudent from './component/AddStudent';
import StudentList from './component/StudentList';
import Table from './component/Table';
import UpdateForm from './component/UpdateForm';


function App() {
  return (
    <div className="App">
      <h1>Student List</h1>

      <Router>
        <Switch>
          <Route exact path="/" component={Navbar} />
          <Route path="/add-student" component={AddStudent} />
          <Route path="/student-list" component={StudentList} />
          <Route path="/table" component={Table} />
          <Route path="/update-form" component={UpdateForm} />
        </Switch>
      </Router>



    </div>
  );
}

export default App;
