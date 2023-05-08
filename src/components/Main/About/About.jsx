import React, { useContext, useState, useEffect } from 'react';
import './About.css';
import { GlobalContext } from '../../provider/Provider';

const About = () => {

	const { about } = useContext(GlobalContext);
	const { links } = about;


	const [state, setState] = useState(' About__off')

	useEffect(() => {
		setState('');
	},[])

	
	return(
		<section className={"About" + state}>

			<h2 className="About-h2">{about.title}</h2>

			<div className="About-container">

				<div className="About-img">
					<img src={about.pic} alt="Leonel-foto" loading="lazy" />	
				</div>

				<div className="About-description">

					<p className="About-p">
					Quién soy ?..<br/> 
					Mi nombre es Leonel, Frontend Dev.<br/>
					Me autodescribo como una {about.description} <br/>
					Puedes encontrarme en:
					</p>

					<ul className="About-ul">
						{links.map(({ id, href, title, svg }) =>
							<li key={id}>
								<a className="About-a" href={href} title={title} rel="noreferrer noopener" target="_blank">{svg}</a>
							</li>
							)}
					</ul>

				</div>

			</div>
				
		</section>
		);
}

export default About;