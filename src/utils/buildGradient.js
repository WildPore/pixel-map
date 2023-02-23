// Object factory for canvas gradients.
// Is just linear gradients, lol.

// pass the style obj,

function buildGradient(context, { x0, y0, x1, y1 }, colorStops) {
	const gradient = context.createLinearGradient(x0, y0, x1, y1);

	for (const { offset, color } of colorStops) {
		gradient.addColorStop(offset, color);
	}

	return gradient;
}

export default buildGradient;
