import React, {useState} from 'react'
import Hero from '../components/hero';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar'
import Footer from '../components/footer';
import Info from '../components/info';
import { aboutData } from '../components/info/data';

const Home = () => {
    const [sbOpened, setOpenSB] = useState(false);
    const toggle = () => setOpenSB(!sbOpened);

    return (
        <>
            <Sidebar isOpen={sbOpened} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Hero />
            <Info {...aboutData}/>
            <Footer />
        </>
    )
}

export default Home