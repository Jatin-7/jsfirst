import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{overflowY:'auto',border:'none', height:'500px', margin:'2em'}}>
		{props.children}
		</div>
	);
};

export default Scroll;