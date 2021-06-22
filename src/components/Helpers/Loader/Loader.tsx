import Flexbox from '../Flexbox/Flexbox';
import React, { FunctionComponent } from 'react';
import { Spinner } from 'react-bootstrap';

const Loader: FunctionComponent = () => {

	return <Flexbox>
		<Spinner animation="border" role="status">
			<span className="sr-only">Chargement...</span>
		</Spinner>
	</Flexbox>;

}

export default Loader;