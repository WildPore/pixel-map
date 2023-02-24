import styled from 'styled-components';

const StyledSection = styled.section`
	--indent-level: ${(props) => props.indent || '0rem'};
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-size: 1.25rem;
		margin-bottom: 0.85rem;
		border-bottom: 1px solid #333;
	}

	h2 {
		margin-top: 2.5rem;
	}

	margin-left: var(--indent-level, 0rem);
`;

const StyledChildren = styled.div``;

export default function Section({ level = 2, heading, children }) {
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
