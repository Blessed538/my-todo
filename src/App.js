import React, {Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/Layout/Header';
import { AddTodo } from './components/AddTodo';
import './App.css';
import About from './components/Pages/About';
import axios from 'axios';
import Contact from './components/Layout/Contact';

class App extends Component {
   state = {
    todos: []
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res => this.setState({todos:res.data}))
  }

  // Toggle Complete
  markComplete = (id) => {
this.setState({ todos: this.state.todos.map(todo => {
  if(todo.id === id) {
    todo.completed = !todo.completed
  }
  return todo;
})})
  }

  // Delete Todo
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]}))
  }

  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed:false
    })
    .then(res => this.setState({todos:[...this.state.todos, res.data] }))
  }

  render() {
  return (
    <Router>
    <div>
      <div className="container">
      <Header />
      <Route exact path="/" render={props => (
<React.Fragment>
   <AddTodo addTodo={this.addTodo}/>
      <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
</React.Fragment>
      )} />
      
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      </div>
    </div>
    </Router>
  );
}
}

export default App;
