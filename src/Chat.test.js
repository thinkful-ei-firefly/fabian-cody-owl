import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Chat from './Chat';

describe('<Chat.js />', () => {
  it('<Chat.js /> renders properly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Chat
      message="hello msg"
      participant={{
        id: 3,
        name: 'Axe Kubicka',
        avatar: 'https://robohash.org/utlaborumfugit.jpg?size=200x200&set=set1',
        inSession: false,
        onStage: false
      }}
      type='thumbs-up'
      time={new Date(1548852484247).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })}
      timestamp={1548852484247}
    />, div)
  })

  it('Renders <Chat.js /> as expected', () => {
    const tree = renderer.create(<Chat 
      message="hello msg"
      participant={{
        id: 3,
        name: 'Axe Kubicka',
        avatar: 'https://robohash.org/utlaborumfugit.jpg?size=200x200&set=set1',
        inSession: false,
        onStage: false
      }}
      type='thumbs-up'
      time={new Date(1548852484247).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })}
      timestamp={1548852484247}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  })
})