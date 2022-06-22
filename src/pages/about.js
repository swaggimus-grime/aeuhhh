import React, {useState} from 'react'
import Hero from '../components/hero';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar'
import Footer from '../components/footer';

const About = () => {
    const [sbOpened, setOpenSB] = useState(false);
    const toggle = () => setOpenSB(!sbOpened);

    return (
        <>
            <Sidebar isOpen={sbOpened} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            
            <Footer />
        </>
    )
}

export default About;