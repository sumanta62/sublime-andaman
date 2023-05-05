import navbarImage from  '../../../assets/Images/150.jpg'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='NavbarSection'>
            <div>
                <h5>Sublime Andaman</h5>
            </div>
            <ul>
                <li><a className="active" href="#home">Explore</a></li>
                <li><a href="#news">Stay</a></li>
                <li><a href="#contact">Fun</a></li>
            </ul>
            <div className='navbarLogo'>
                <img src={navbarImage} alt="" />
            </div>
        </div>
    );
};

export default Navbar;