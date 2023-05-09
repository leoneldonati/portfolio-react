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

    

    //      BTN MOVILE

    const [toggle, setToggle] = useState(false);
    const [tglClass, setTglClass] = useState(' Header-container__off');
    const [btnRotate, setBtnRotate] = useState(' Header-btn__off')

    const handleToggle = () => {
        setToggle(!toggle);
        if (toggle) {
            setTglClass('')
            setBtnRotate('')
        }
        if (!toggle) {
         setTglClass(' Header-container__off')
         setBtnRotate(' Header-btn__off')

        }
    }   



	return (
		<main className="Main">

		{/*	HEADER */}
		
			<header className="Header">
                <nav className="Header-nav">

                {/* LINKS MOVILE */}
                <div className={"Header-container__movile" + tglClass}>

                    <ul className="Header-ul__movile">
                        {
                           ul1.map( ({ id, href, title, svg }) => 
                            <li key={id}>
                                <a className="Header-a__movile" href={href} title={title} rel="noreferrer noopener" target="_blank">
                                    {svg}
                                </a>
                            </li>
                        )
                        }
                    </ul>

                   <button onClick={handleToggle} className={"Header-btn__movile" + btnRotate}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="Header-svg__movile" viewBox="0 0 16 16">
                            <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                        </svg>              
                    </button>
                </div>

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