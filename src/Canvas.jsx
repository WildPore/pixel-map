import { useEffect } from 'react';

function Canvas({ canvasRef, draw, children, ...delegated }) {
	const { width, height } = { ...delegated };

	// get canvasRef from provider
	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');

		canvas.style.width = width + 'px';
		canvas.style.height = height + 'px';

		const scale = window.devicePixelRatio;
		canvas.width = width * scale;
		canvas.height = height * scale;

		context.scale(scale, scale);

		draw(context);
	}, [draw]);

	return (
		<canvas ref={canvasRef} {...delegated}>
			{children}
		</canvas>
	);
}

export default Canvas;
