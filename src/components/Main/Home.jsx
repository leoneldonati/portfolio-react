import React, {useState} from 'react';
import './Home.css';
import Projects from "./Projects/Projects";
import About from "./About/About";

const Home = () => {

	const [project, setProject] = useState(false);
    const [about, setAbout] = useState(false);


    const handleProject  = () => {
            setProject(!project);
            setAbout(false);
        };
    const handleAbout 	 = () => {
            setAbout(!about);
            setProject(false);
        };
    const hanldeSections = () => {
    	if (project) {return <Projects />};
    	if (about) {return <About />};
    };
    const handleHome 	 = () => {
    	if (!project && !about) {
    		return(
    			<section className="Home">
    				Home
    			</section>
    			);
    	};
    };

	return (
		<main className="Main">

		{/*	HEADER */}
		  <header className="Header">
            <nav className="Header-nav">
                <ul className="Header-ul__1">
                    <li><a href="#" className="Header-a" title="Item1">Item1</a></li>
                    <li><a href="#" className="Header-a" title="Item2">Item2</a></li>
                    <li><a href="#" className="Header-a" title="Item3">Item3</a></li>
                </ul>
                <ul className="Header-ul__2">
                    <li><button onClick={handleAbout}>About</button></li>
                    <li><button onClick={handleProject}>Projects</button></li>
                </ul>
            </nav>
       	 </header>
		

		{/* HOME */}
		
       	 {handleHome()}

		{/* SECTIONS */}

		{hanldeSections()}

		
		</main>


		);
};


export default Home;