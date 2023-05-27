/* eslint-disable react/prop-types */
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { Helmet } from 'react-helmet';
import '../../Styles.css';

const Layout = ({ children, title, description, keywords, favicon_link }) => {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
				<meta name="author" content="buggedup-codes" />
				<link rel="icon" type="image/png" href={favicon_link} sizes="96x96" />
			</Helmet>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
};

Layout.defaultProps = {
	title: 'Test-Site',
	keywords: 'Education, Foreign-Universities, tutorial',
	description: 'This is a test site.',
	favicon_link: 'https://img.icons8.com/sf-black/64/home.png',
};

export default Layout;
