import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import './App.css';
import Login from './components/login';
import Menu from './components/menu';
import QuestionTopic from './components/questionTopic';
import Dashboard from './components/dashboard';
import QuestionComplexity from './components/questionComplexity';
import QuestionType from './components/questionType';
import Questions from './components/questions';
import Answers from './components/answers';
import Results from './components/results';
import QuestionsPage from './components/questionsPage';
import QuestionChoice from './components/questionChoice/questionChoice';



class App extends Component {
  render() {
    return (
     
 
   
   
    <BrowserRouter>
    <div>
   <Menu />
     <Switch>
       <Route path='/login' component={Login} />
       <Route path='/menu' component={Menu} />
       <Route path='/dashboard' component={Dashboard} />
       <Route path='/' component={Dashboard} exact />
       <Route path='/questionComplexity' component={QuestionComplexity} />
       <Route path='/questionTopic' component={QuestionTopic} />
       <Route path='/questionType' component={QuestionType} />
      <Route path='/questionChoice' component={QuestionChoice}/>       
       <Route path='/questions' component={Questions} />
       <Route path='/answers' component={Answers} />
       <Route path='/results' component={Results} />
       <Route path='/questionsPage' component={QuestionsPage} />
       </Switch>
       </div>
     </BrowserRouter>
   
      
    );
  }
}

export default App;
