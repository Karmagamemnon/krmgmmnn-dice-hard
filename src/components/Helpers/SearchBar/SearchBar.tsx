import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
	input: {
		flexGrow: 1,
		marginRight: "5px"
	},
	wrapper: { flexWrap: "nowrap" }
});

const SearchBar: FunctionComponent = () => {

	return <Form inline className={css(styles.wrapper)}>
		<FormControl type="text" placeholder="Rechercher" className={css(styles.input)} />
		<Button variant="outline-success"><FontAwesomeIcon icon="search" /></Button>
	</Form>;

}

export default SearchBar;