import '../sass/styles/NotFound.scss'
import notfound from '../assets/404.jpg'
export const NotFound = () => 
    <div className='Nf'>
    <p className='Nf-p'>Oops... this page is not found!<br />
    Go to <strong>Home</strong> to continue navigation</p>

    <img src={notfound} alt="404" loading='lazy' />
    </div>