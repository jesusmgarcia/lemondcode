import React from 'react';
import classes from './helloWorldComponentStyles.scss';

export const HelloWorldComponent: React.FC = () => {
	return (
		<div>
			<span className={classes.resultBackground}>Hello React!</span>
		</div>
	);
};
