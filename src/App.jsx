import { useState, useRef } from 'react';
import styled from 'styled-components';

import { useLocalStorage } from './useLocalStorage';

import './App.css';

import Controls from './Controls';
import Wall from './Wall';

const StyledContainer = styled.div`
	margin: 0 3rem;
	margin-top: 3rem;
`;

const StyledPageTitle = styled.h1``;

function App() {
	const [widthInPanels, setWidthInPanels] = useLocalStorage(
		'width-in-panels',
		10
	);
	const [heightInPanels, setHeightInPanels] = useLocalStorage(
		'height-in-panels',
		3
	);

	const [eventName, setEventName] = useLocalStorage('event-name', '');
	const [venueName, setVenueName] = useLocalStorage('venue-name', '');

	const canvasRef = useRef(0);

	return (
		<StyledContainer className='App'>
			<StyledPageTitle>Pixel Map Tool</StyledPageTitle>
			<Controls
				widthState={[widthInPanels, setWidthInPanels]}
				heightState={[heightInPanels, setHeightInPanels]}
				eventNameState={[eventName, setEventName]}
				venueNameState={[venueName, setVenueName]}
			/>
			<Wall
				canvasRef={canvasRef}
				wallDimensions={{ width: widthInPanels, height: heightInPanels }}
				eventName={eventName}
				venueName={venueName}
			/>
		</StyledContainer>
	);
}

export default App;
