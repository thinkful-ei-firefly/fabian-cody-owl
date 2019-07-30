import React from 'react';
import logo from './logo.svg';
import './App.css';
import Participant from './Participant'
import Store from "./Store"

function App() {
  console.log(Store.participants);
  const participant = Store.participants.map(participant => {
    console.log(participant);
    return <Participant 
      key={participant.id} 
      name={participant.name}
      avatar={participant.avatar}
      inSession={participant.inSession}
      onStage={participant.onStage}
    />
  });

  return (
    <div>{participant}</div>
  );
}

export default App;
