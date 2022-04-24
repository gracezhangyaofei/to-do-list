import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TodoWithData from './TodoWithData'
import reportWebVitals from './reportWebVitals';


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

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <React.StrictMode>
    <TodoWithData
    	todos={todoExample}
    	showMarkAllAsCompleted={true}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
