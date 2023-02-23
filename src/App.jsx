import { useState, useRef } from 'react';
import styled from 'styled-components';

import './App.css';

import Controls from './Controls';

import Slider from './Slider';
import Wall from './Wall';

const StyledContainer = styled.div`
	margin: 0 3rem;
	margin-top: 3rem;

	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
`;

const StyledPageTitle = styled.h1`
	display: flex;
	justify-content: center;

	margin-bottom: 3rem;
`;

function App() {
	const [width, setWidth] = useState(10);
	const [height, setHeight] = useState(3);

	const [showName, setShowName] = useState('');

	const canvasRef = useRef();

	return (
		<StyledContainer className='App'>
			<StyledPageTitle>Pixel Map Tool</StyledPageTitle>
			<Controls />
		</StyledContainer>
	);
}

export default App;
