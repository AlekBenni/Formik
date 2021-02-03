import React from 'react';
import YoutubeForm from './components/YoutubeForm';
import './App.css'

function App() {
  const latest = 11 01
  return (
    <>
      <div className="App">

        <YoutubeForm />

      </div>
      <div className="alert alert-info mt-5" role="alert">
        Ты на {latest} урок
    </div>
    </>
  )
}

export default App;
