import React from 'react';
import YoutubeForm from './components/YoutubeForm';
import './App.css'

function App() {
  const latest = 9
  return (
    <>
    <div className="App">

    <YoutubeForm />

    </div>
    <div className="alert alert-info mt-5" role="alert">
      Ты на {latest} уроке
    </div>    
    </>
  )
}

export default App;
