import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TodoWithData from './TodoWithData';
import AdaptiveCardExample from './AdaptiveCardExample';

const todoExample: Todo[] = [
  { id: 1, text: 'Do laundry', done: false, place: 'home' as const },
  { id: 2, text: 'Email boss', done: false, place: 'work' as const },
  {
    id: 3,
    text: 'Go to gym',
    done: false,
    place: { custom: 'Gym' }
  },
  {
    id: 4,
    text: 'Buy milk',
    done: true,
    place: { custom: 'Supermarket' }
  },
  {
    id: 5,
    text: 'Read a book',
    done: false
  }
]

ReactDOM.render(
  <React.StrictMode>
    <>
      <TodoWithData
        todos={todoExample}
        showMarkAllAsCompleted={true}
      />
      <AdaptiveCardExample />
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

