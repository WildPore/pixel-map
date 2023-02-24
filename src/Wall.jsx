import { useState, useEffect } from 'react';
import styled from 'styled-components';

import Canvas from './Canvas';

import buildGradient from './utils/buildGradient';

const StyledNotice = styled.p`
	text-align: right;
	font-size: 0.7rem;
`;

const demoObj = {
	dimensions: {
		width: 10,
		height: 3,
	},
	metadata: {
		displayName: 'Wonderwall',
		panel: 'Absen PL 3.9',
	},
	flows: [
		{
			type: 'data',
			displayName: 'data',
			style: {
				lineWidth: 5,
			},
			selection: [
				[
					{ x: 0, y: 0 },
					{ x: 9, y: 0 },
				],
				[
					{ x: 0, y: 1 },
					{ x: 9, y: 1 },
				],
				[
					{ x: 0, y: 2 },
					{ x: 9, y: 2 },
				],
			],
		},
		{
			type: 'power',
			displayName: 'Power',
			selection: [
				[
					{ x: 0, y: 0 },
					{ x: 9, y: 0 },
				],
				[
					{ x: 0, y: 1 },
					{ x: 9, y: 1 },
				],
				[
					{ x: 0, y: 2 },
					{ x: 9, y: 2 },
				],
			],
		},
	],
};

const demoStyle = {
	lineWidth: 1,

	panel: {
		width: 50,
		height: 100,
	},

	gradient: [
		{ offset: 0, color: '#00ff1a' },
		{ offset: 1, color: '#00bb8f' },
	],
};

function drawInfoText(context, content) {
	context.font = '16px sans-serif';
	context.fillStyle = 'black';
	context.fillText(`Event: ${content.eventName}`, 8, 20);
	context.fillText(`Venue: ${content.venueName}`, 8, 50);
}

function Wall({
	canvasRef,
	wallDimensions,
	eventName = 'N/A',
	venueName = 'N/A',
}) {
	const [canvasDimensions, setCanvasDimensions] = useState({
		width: 800,
		height: 600,
	});

	useEffect(() => {
		setCanvasDimensions({
			width: demoStyle.panel.width * wallDimensions.width + 4,
			height: demoStyle.panel.height * wallDimensions.height + 5,
		});
	}, [wallDimensions]);

	function draw(context) {
		context.clearRect(0, 0, context.canvas.width, context.canvas.height);

		const { width, height } = wallDimensions;
		const panelW = demoStyle.panel.width;
		const panelH = demoStyle.panel.height;
		const lineWidth = demoStyle.lineWidth;
		context.lineWidth = lineWidth;
		context.translate(0, lineWidth / 2);
		const offset = 2; // Math.ceil(lineWidth / 2);

		const dimensions = {
			x0: 0,
			y0: 0,
			x1: demoStyle.panel.width * width + offset,
			y1: demoStyle.panel.height * height + offset,
		};

		// Oh bother!
		// setCanvasDimensions({
		// 	width: dimensions.x1 + 2,
		// 	height: dimensions.y1 + 2,
		// });

		context.fillStyle = buildGradient(context, dimensions, demoStyle.gradient);
		context.fillRect(offset, offset, width * panelW, height * panelH);

		// TODO Refactor getLinePath to use a standardized dimensions object.
		const firstVerticalLine = getLinePath(
			{
				x: offset + lineWidth / 2,
				y: offset,
			},
			{
				x: offset + lineWidth / 2,
				y: height * panelH + offset,
			}
		);

		context.stroke(firstVerticalLine);

		const lastVerticalLine = getLinePath(
			{
				x: width * panelW + offset - lineWidth / 2,
				y: offset,
			},
			{
				x: width * panelW + offset - lineWidth / 2,
				y: height * panelH + offset,
			}
		);

		context.stroke(lastVerticalLine);

		// Drawing horizontal lines
		for (let y = 0; y <= height; y++) {
			const line = getLinePath(
				{
					x: offset,
					y: y * panelH + offset,
				},
				{
					x: width * panelW + offset,
					y: y * panelH + offset,
				}
			);
			context.stroke(line);
		}

		// Drawing vertical lines
		for (let x = 1; x < width; x++) {
			const line = getLinePath(
				{
					x: x * panelW + offset,
					y: 0 + offset,
				},
				{
					x: x * panelW + offset,
					y: height * panelH + offset,
				}
			);
			context.stroke(line);
		}

		drawInfoText(context, { eventName, venueName });

		// for (const flow of demoObj.flows) {
		// 	for (const [startPanel, endPanel] of flow.selection) {
		// 		drawFlow(context, startPanel, endPanel);
		// 	}
		// }

		// Placebo, I think
		context.imageSmoothingEnabled = true;
		context.imageSmoothingQuality = 'high';
	}

	return (
		<>
			<StyledNotice>Right-click image to save.</StyledNotice>
			<Canvas
				canvasRef={canvasRef}
				draw={draw}
				width={canvasDimensions.width}
				height={canvasDimensions.height}
			>
				Pixel map did not render correctly.
			</Canvas>
		</>
	);
}

export default Wall;

// Library functions that maybe should get moved
// to a utils folder.

// Traces line
function getLinePath(startCoord, endCoord) {
	const line = new Path2D();
	line.moveTo(startCoord.x, startCoord.y);
	line.lineTo(endCoord.x, endCoord.y);

	return line;
}

function getPanelCenter({ x, y }) {
	// gets the center of the panel
	// the panel dimensions are known globally

	if (x >= demoObj.dimensions.width || y >= demoObj.dimensions.height) {
		return;
	}

	return {
		x: (x + 1) * demoStyle.panel.width - demoStyle.panel.width / 2,
		y: (y + 1) * demoStyle.panel.height - demoStyle.panel.height / 2,
	};
}

function drawFlow(context, startPanel, endPanel) {
	const startCoord = getPanelCenter(startPanel);
	const endCoord = getPanelCenter(endPanel);

	const startMarker = new Path2D();
	startMarker.arc(startCoord.x, startCoord.y, 5, 0, Math.PI * 2);

	const endMarker = new Path2D();
	endMarker.arc(endCoord.x, endCoord.y, 5, 0, Math.PI * 2);

	const flowLine = getLinePath(startCoord, endCoord);

	context.stroke(startMarker);
	context.stroke(endMarker);
	context.stroke(flowLine);
}
