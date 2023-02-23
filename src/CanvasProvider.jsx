import { createContext, createRef, useContext } from 'react';

export const CanvasContext = createContext();

export default function CanvasProvider({ children }) {
	const canvasRef = createRef();
	return (
		<CanvasContext.Provider value={{ canvasRef }}>
			{children}
		</CanvasContext.Provider>
	);
}
