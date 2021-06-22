import Flexbox from '../../../Helpers/Flexbox/Flexbox';
import Logo from './Logo/Logo';
import Navbar from 'react-bootstrap/Navbar';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const Header: FunctionComponent = () => {

	return <Navbar bg="dark" expand="lg">
		<Link to="/" className="pr-3">
			<Logo />
		</Link>
		<Navbar.Toggle aria-controls="navbar" />
		<Navbar.Collapse id="navbar">
			<Flexbox alignItems="center" horizontalFill justifyContent="space-between">
				<Flexbox alignItems="center" gap="10px">
					<Link to="/games">Jeux</Link>
				</Flexbox>
			</Flexbox>
		</Navbar.Collapse>
	</Navbar>;

}

export default Header;