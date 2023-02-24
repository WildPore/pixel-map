import { useState } from 'react';
import styled from 'styled-components';

import Slider from './Controls/Slider';
import Text from './Controls/Text';

import Section from './Layout/Section';

const StyledControls = styled.div``;

export default function Controls({
	widthState: [widthInPanels, setWidthInPanels],
	heightState: [heightInPanels, setHeightInPanels],
	eventNameState: [eventName, setEventName],
	venueNameState: [venueName, setVenueName],
}) {
	return (
		<StyledControls>
			<Section level={2} heading='Wall Details'>
				<Section level={3} heading='Wall dimensions by panel'>
					<Slider
						label={'Width'}
						value={widthInPanels}
						setValue={setWidthInPanels}
						min={1}
						max={20}
					/>
					<Slider
						label={'Height'}
						value={heightInPanels}
						setValue={setHeightInPanels}
						min={1}
						max={7}
					/>
				</Section>
				<Section level={3} heading='Panels'>
					<Text label='Panel name' />
					<Slider label='Pixel width' min={1} max={512} />
					<Slider label='Pixel height' min={1} max={512} />
				</Section>
			</Section>
			<Section level={2} heading='Event details'>
				<Text label={'Event name'} value={eventName} setValue={setEventName} />
				<Text label={'Venue'} value={venueName} setValue={setVenueName} />
			</Section>
		</StyledControls>
	);
}
