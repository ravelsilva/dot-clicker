import { useState } from 'react';
import './App.css';

function App() {
	const [circles, setCircles] = useState([]);

	const handleClick = (e) => {
		const { clientX, clientY } = e;
		setCircles([...circles, { x: clientX, y: clientY }]);
		console.log(circles);
	};

	const undo = () => {
		const clickedCircles = [...circles];
		clickedCircles.pop();
		setCircles(clickedCircles);
	};
	return (
		<>
			{' '}
			<button onClick={undo} style={{ zIndex: '1' }}>
				remove
			</button>
			<div
				onClick={handleClick}
				className="App"
				style={{ position: 'relative' }}
			>
				{circles.map((circles, i) => (
					<span
						key={i}
						style={{
							width: '20px',
							height: '20px',
							backgroundColor: 'transparent',
							border: '1px solid red',
							borderRadius: '100%',
							left: circles.x - 8,
							top: circles.y - 10,
							position: 'absolute',
						}}
					></span>
				))}
			</div>
		</>
	);
}
export default App;
