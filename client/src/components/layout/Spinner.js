import React, { Fragment } from 'react';
import spinner from './spinner.gif';

export default () => (
	<Fragment>
		<img
			src={spinner}
			style={{ width: '200px', margin:'auto', dipaly: 'block'}}
			alt="Loading....							"
		/>
	</Fragment>
);	