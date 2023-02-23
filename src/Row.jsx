import styled from 'styled-components';

const StyledRow = styled.div`
	width: 100%;
	display: flex;
	margin-bottom: 0.5rem;

	label {
		align-self: flex-start;
		flex-basis: 0;
		flex-grow: 1;
	}

	& > :last-child {
		flex-basis: 0;
		flex-grow: 4;
	}
`;

export default function Row({ children }) {
	return <StyledRow>{children}</StyledRow>;
}
