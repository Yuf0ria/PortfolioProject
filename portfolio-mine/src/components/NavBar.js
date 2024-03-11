import {useState, useEffect} from "react";
import { NavBar, Container} from "react-bootstrap";
import logo from '../assets/img/';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home'); 
    const [scrolled, seeScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () =>{
            if(window.scrollY >50){
                seeScrolled(true);
            } else {
                seeScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll)

    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
          <Container>
            <Navbar.Brand href="#home">
                <img src= {''} alt ="logo"/>
                Logo Here
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon">
                    
                </span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navabar-link' : 'navbar-link'} onClick={ () => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#resume" className={activeLink === 'resume' ? 'active navabar-link' : 'navbar-link'} onClick={ () => onUpdateActiveLink('resume')}>Resume</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navabar-link' : 'navbar-link'} onClick={ () => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                    <a href="#"><img src={''} alt=""/></a>
                    <a href="#"><img src={''} alt=""/></a>
                    <a href="#"><img src={''} alt=""/></a>
                </div>
                <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}