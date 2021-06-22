import Navbar from 'react-bootstrap/Navbar';
import { FunctionComponent } from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
	wrapper: { justifyContent: "space-around" }
});

const Footer: FunctionComponent = () => {

	return <Navbar bg="light" expand="lg" className={css(styles.wrapper)}>
		© Kévin Peeters et Grégory Mou Kui 2021
	</Navbar>;

}

export default Footer;