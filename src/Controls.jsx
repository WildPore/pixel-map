import { useState, useId } from 'react';
import React from 'react';
import styled from 'styled-components';

import Slider from './Slider';
import Row from './Row';

const StyledControls = styled.form``;
export default function Controls({ children }) {
	const [widthInPanels, setWidthInPanels] = useState(10);
	const [heightInPanels, setHeightInPanels] = useState(3);

	return (
		<StyledControls>
			<Section level={2} heading='Wall Details'>
				<Section level={3} heading='Wall dimensions by panel'>
					<Row>
						<Slider
							label={'Width'}
							value={widthInPanels}
							setValue={setWidthInPanels}
							min={1}
							max={20}
						/>
					</Row>
					<Row>
						<Slider
							label={'Height'}
							value={heightInPanels}
							setValue={setHeightInPanels}
							min={1}
							max={7}
						/>
					</Row>
				</Section>
			</Section>
			<Section heading='Event details'>
				<Row>
					<Text label={'Event name'} />
				</Row>
				<Row>
					<Text label={'Date(s)'} />
				</Row>
				<Row>
					<Text label={'Wall name'} optional />
				</Row>
			</Section>
		</StyledControls>
	);
}

const StyledSection = styled.section`
	--indent-level: ${(props) => props.indent || '0rem'};
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-size: 1.25rem;
	}
	margin-left: var(--indent-level, 0rem);
`;

const StyledChildren = styled.div`
	background-color: papayawhip;
	margin-left: var(calc(--indent-level + 0.25rem));
`;

function Section({ level = 2, heading, children }) {
	if (level <= 1 || level > 6) {
		console.warn(
			`Invalid level for section. Level ${level} is not 2, 3, 4, 5, or 6.`
		);
		level = 2;
	}

	const HeaderTag = `h${level}`;
	const indentLevel = `${level - 2}rem`;

	return (
		<StyledSection indent={indentLevel}>
			<HeaderTag>{heading}</HeaderTag>
			<StyledChildren>{children}</StyledChildren>
		</StyledSection>
	);
}

const makeElementName = (label, type) => `${label.toLowerCase()}-${type}`;

const StyledText = styled.input``;

function Text({ label, value, setValue, ...delegated }) {
	const id = useId();

	const textName = makeElementName(label, 'text');

	return (
		<>
			<label htmlFor={id}>{label}</label>
			<StyledText id={id} name={textName} type='text' />
		</>
	);
}
