import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Stage from './Stage';

describe('<Stage /> ', () =>{
  it('Renders without Crashing', ()=> {
    const div = document.createElement('div');
    ReactDOM.render(<Stage name="Hohn Smith" avatar="www.avatar.com"/>, div)
    ReactDOM.unmountComponentAtNode(div);
  })

  it('Renders <Stage /> as expected', ()=> {
    const tree = renderer.create(<Stage name="Hohn Smith" avatar="www.avatar.com"/>).toJSON();
    expect(tree).toMatchSnapshot();
  })
})