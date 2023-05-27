import { useState } from 'react';
import Layout from '../components/layout/Layout.jsx';

const Contactus = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<Layout title="Contact-Us" keywords="Education, Foreign-Universities, tutorial" description="2nd Page for this test site." favicon_link="https://icons8.com/icon/gjDcfKntnhWl/parking-and-2nd-floor">
			<h2>Contact Us page</h2>
			<form>
				<label htmlFor="name">Name: </label>
				<input type="text" onChange={(e) => setName(e.target.value)} value={name} id="name" />
				<br />
				<label htmlFor="email">Email</label>
				<input type="email" onChange={(e) => setEmail(e.target.value)} value={email} id="email" />
				<br />
				<label htmlFor="phone">Phone: </label>
				<input type="tel" onChange={(e) => setPhone(e.target.value)} value={phone} id="phone" />
				<br />
				<button type="submit" onClick={(e) => handleSubmit(e)}>
					Submit
				</button>
			</form>
		</Layout>
	);
};
export default Contactus;
