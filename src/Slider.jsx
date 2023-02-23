import { useId } from 'react';
import styled from 'styled-components';

import makeElementName from './utils/makeElementName';

const StyledSlider = styled.div`
	display: grid;
	grid-template-columns: 1fr max(4%, 1.65rem);
	gap: 0.35rem;

	input[type='range'] {
	}

	input[type='number'] {
		text-align: right;
		background-color: inherit;
		border: none;
		-webkit-appearance: none;
		-moz-appearance: textfield;

		&::-webkit-outer-spin-button,
		&::-webkit-inner-spin-button {
			-webkit-appearance: none;
		}

		:focus {
			background-color: #fff;
		}
	}
`;

export default function Slider({ label, value, setValue, ...delegated }) {
	const id = useId();

	const rangeName = makeElementName(label, 'range');
	const numberName = makeElementName(label, 'number');

	const state = {
		value: value,
		onChange: (event) => setValue(event.target.value),
	};

	return (
		<>
			<label htmlFor={id}>{label}</label>
			<StyledSlider>
				<input name={rangeName} type='range' {...state} {...delegated} />
				<input
					id={id}
					name={numberName}
					type='number'
					{...state}
					{...delegated}
				/>
			</StyledSlider>
		</>
	);
}
