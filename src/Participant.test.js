import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Participant from './Participant';

describe('<Participant />', () => {
	test('Renders a Participant', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Participant key="1" avatar="path" name="Mark" onStage={true}/>, div);
		ReactDOM.unmountComponentAtNode(div);
	})

	test('Render Participant Snap', () => {
		const tree = renderer.create(<Participant key="1" avatar="path" name="Mark" onStage={true}/>).toJSON();
		expect(tree).toMatchSnapshot();
	})
})
