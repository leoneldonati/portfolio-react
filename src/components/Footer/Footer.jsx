import React, {useContext} from 'react';
import './Footer.css';
import { GlobalContext } from '../provider/Provider';

const Footer = () => {

	const {footer} = useContext(GlobalContext)


	return (
		<footer className="Footer">
			<p className="Footer-p">
				{footer.title} -
			</p>
		</footer>
		);
};

export default Footer;