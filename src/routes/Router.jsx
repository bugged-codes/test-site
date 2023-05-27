import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Aboutus from '../pages/Aboutus';
import Contactus from '../pages/Contactus';
import Page2 from '../pages/Page2';

const Router = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about-us" element={<Aboutus />} />
				<Route path="/contact-us" element={<Contactus />} />
				<Route path="/page-2" element={<Page2 />} />
			</Routes>
		</>
	);
};
export default Router;
