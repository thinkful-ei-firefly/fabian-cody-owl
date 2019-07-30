import React from 'react';
import './App.css';
import Store from "./Store"
import Participant from './Participant'
import Stage from "./Stage";
import Chat from "./Chat"


function App() {
  const participants = Store.participants.filter(participant => participant.inSession).map(participant => {
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

  const chat = Store.chatEvents.map(chatEvent => {
    return <Chat
      participant={Store.participants.find(participant => participant.id===chatEvent.participantId)}
      message={chatEvent.message}
      type={chatEvent.type}
      time={chatEvent.time}
      timestamp={chatEvent.timestamp}
    />
  });

  return (
    <div className='container'>
      <div className='participant-list'>{participants}</div>
      <div className='chat'>{chat}</div>
      <div className='stage'>{onStage}</div>
    </div>
  );
}

export default App;
