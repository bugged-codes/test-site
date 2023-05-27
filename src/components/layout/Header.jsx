import '../../Styles.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<>
			<header>
				<nav>
					<NavLink to={'/'}>Home</NavLink>
					<NavLink to={'/about-us'}>About Us</NavLink>
					<NavLink to={'/contact-us'}>Contact Us</NavLink>
					<NavLink to={'/page-2'}>Page-2</NavLink>
				</nav>
				<p>This is header.</p>
				<h2>This is also header.</h2>
			</header>
			<hr />
		</>
	);
};
export default Header;
