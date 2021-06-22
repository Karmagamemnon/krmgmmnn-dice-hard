import { FunctionComponent } from 'react';
import { StyleSheet, css } from "aphrodite";
import Flexbox from '../../../../Helpers/Flexbox/Flexbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = StyleSheet.create({
	logo: {
		color: "white",
		fontFamily: "'Monoton', sans-serif",
		fontSize: "2.5rem",
		textShadow: "green 0 0 15px;",

	},
	symbol: {
		color: "green",
		fontSize: "5rem",
		lineHeight: "0",
	}
});

const Logo: FunctionComponent = () => {

	return <Flexbox alignItems="center" gap="5px" className={css(styles.logo)}>
		<span>DICE</span>
		<FontAwesomeIcon icon="dice-d20" size="2x" />
		<span>HARD</span>
	</Flexbox>;

}

export default Logo;