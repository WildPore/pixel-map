import { useRef, useEffect } from 'react';

function useCanvas(draw, width, height) {
	const canvasRef = useRef(null);

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

	return canvasRef;
}

export default useCanvas;
