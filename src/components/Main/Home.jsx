import React, {useState, useContext, useEffect} from 'react';
import './Home.css';
import Projects from "./Projects/Projects";
import About from "./About/About";
import Footer from "../Footer/Footer";
import { GlobalContext } from "../provider/Provider";

const Home = () => {


    // 		DATOS DEL PROVIDER
    const {header, main} = useContext(GlobalContext);
    const {ul1} = header;


    // 		MANEJO DE INTERFACES Y ESTADOS
	const [project, setProject] = useState(false);
    const [about, setAbout] 	= useState(false);


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

    //      HOME

    const [home, setHome] = useState(' Home__off')

    useEffect(() => {
        setHome('');
    },[]);


    const handleHome 	 = () => {
    	if (!project && !about) {
    		return(
    			<section className={"Home" + home}>
    				<h1 className="Home-h1">{main.title}</h1>
    				<h2 className="Home-h2">{main.subtitle}</h2>

                    <Footer />
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
                    {
                    	ul1.map( ({ id, href, title, svg }) => 
                    		<li key={id}>
                    			<a className="Header-a" href={href} title={title} rel="noreferrer noopener" target="_blank">
                    				{svg}
                    			</a>
                    		</li>
                    	)
                    }
                    </ul>
                    <ul className="Header-ul__2">
                        <li><button className="Header-btn" onClick={handleAbout}>About</button></li>
                        <li><button className="Header-btn" onClick={handleProject}>Projects</button></li>
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