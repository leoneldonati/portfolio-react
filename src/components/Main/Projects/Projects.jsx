import React, { useContext, useState, useEffect } from 'react';
import './Projects.css';
import { GlobalContext } from '../../provider/Provider';


const Projects = () => {

	const { projects } = useContext(GlobalContext);
	const { cards } = projects;

	const [load, setLoad] = useState(false);
	const [clas, setClas] = useState(' Projects__off');
	useEffect(() => {
		setLoad(true);
		setClas('');
	},[])

	return(
		<section className={"Projects" + clas} >
			<h1 className="Projects-h1">{projects.title}</h1>

			<div className="Projects-container">
					{	
						cards.map(({ id, name, img, link1, link2 }) => 
							
							<div key={id} className="Projects-card">
								<div className="Projects-card-img">
									<img src={img} alt={name} loading="lazy" />
								</div>

								<div className="Projects-card-description">
									<h3 className="Projects-card-h3">{name}</h3>
									<ul className="Projects-card-ul">
										<li><a className="Projects-card-a" href={link1.href} title={name} rel="noreferrer noopener" target="_blank">{link1.svg}</a></li>
										<li><a className={link2.private ? 'Projects-card-a Projects-card-a__off' : 'Projects-card-a'} href={link2.href} title={name} rel="noreferrer noopener" target="_blank">{link2.svg}</a></li>
									</ul>
								</div>
							</div>

						)
				}
			</div>
		</section>
		);
};

export default Projects;