import { useId } from 'react';
import styled from 'styled-components';

import Row from '../Layout/Row';

import makeElementName from '../utils/makeElementName';

const StyledText = styled.div``;

export default function Text({ label, value, setValue, ...delegated }) {
	const id = useId();

	const textName = makeElementName(label, 'text');

	return (
		<Row>
			<label htmlFor={id}>{label}</label>
			<input
				id={id}
				name={textName}
				type='text'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			/>
		</Row>
	);
}
