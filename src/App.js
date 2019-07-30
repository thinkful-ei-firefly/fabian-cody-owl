import React from 'react';
import './App.css';
import Store from "./Store"
import Participant from './Participant'
import Stage from "./Stage";

function App() {
  const participant = Store.participants.map(participant => {
    return <Participant
      key={participant.id}
      name={participant.name}
      avatar={participant.avatar}
      inSession={participant.inSession}
      onStage={participant.onStage}
    />
  });

  let onStage = Store.participants.filter(participant => participant.onStage)
  onStage = onStage.map(participant => {
    return (
      <Stage key={participant.id} name={participant.name} avatar={participant.avatar} />
    )
  })

  return (
    <div>
      <div>{participant}</div>
      <div>{onStage}</div>
    </div>
  );
}

export default App;
