import React, {useState} from 'react'
import Hero from '../components/hero';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar'
import Footer from '../components/footer';
import Info from '../components/info';
import { aeuhhhData1, aeuhhhData2, aeuhhhData3 } from '../components/info/data';
import Staff from '../components/staff';

const HomePage = () => {
    const [sbOpened, setOpenSB] = useState(false);
    const toggle = () => setOpenSB(!sbOpened);

    return (
        <>
            <Sidebar isOpen={sbOpened} toggle={toggle}/>
            <Navbar  toggle={toggle}/>
            <Hero />
            <Info {...aeuhhhData1}/>
            <Info {...aeuhhhData2}/>
            <Info {...aeuhhhData3}/>
            <Staff />
            <Footer />
        </>
    )
}

export default HomePage