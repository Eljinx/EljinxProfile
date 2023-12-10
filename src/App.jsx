import React, { useEffect, useState } from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import { BsEyeSlashFill } from 'react-icons/bs'
import { AiFillEye } from 'react-icons/ai'

function App() {
    // 1. Create a state variable to track the selected theme
    const [theme, setTheme] = useState('default');

    // 2. Create a state variable to track whether the theme selector is visible or hidden
    const [themeSelectorVisible, setThemeSelectorVisible] = useState(true);

    // 3. Apply the selected theme as a class on the root element
    useEffect(() => {
        document.documentElement.className = `theme-${theme}`;
    }, [theme]);

    // 4. Function to change the theme
    const changeTheme = (newTheme) => {
        setTheme(newTheme);

        // Save the selected theme in local storage
        localStorage.setItem('selectedTheme', newTheme);
        // console.log(newTheme)
    };

    // 5. Function to toggle the theme selector visibility
    const toggleThemeSelector = () => {
        setThemeSelectorVisible(!themeSelectorVisible);
    };
    // console.log(themeSelectorVisible)

    return (
        <>
            {/* Theme-switching buttons (conditionally rendered based on visibility state) */}
            {themeSelectorVisible && (
                <div className="theme-switcher">
                    <button onClick={() => changeTheme('default')} className={theme === 'default' ? 'active' : ''}>Default</button>
                    <button onClick={() => changeTheme('green')} className={theme === 'green' ? 'active' : ''}>Green</button>
                    <button onClick={() => changeTheme('rock')} className={theme === 'rock' ? 'active' : ''}>Rock</button>
                    <button onClick={() => changeTheme('jazz')} className={theme === 'jazz' ? 'active' : ''}>Jazz</button>
                    <button onClick={() => changeTheme('gojo')} className={theme === 'gojo' ? 'active' : ''}>Gojo</button>
                    <button onClick={() => changeTheme('shanks')} className={theme === 'shanks' ? 'active' : ''}>Shanks</button>
                    <button onClick={() => changeTheme('kaido')} className={theme === 'kaido' ? 'active' : ''}>Kaido</button>
                    <button onClick={() => changeTheme('bigmom')} className={theme === 'bigmom' ? 'active' : ''}>Big Mom</button>
                    {/* Add more buttons for other themes as needed */}
                </div>
            )}
            <h5 className="theme-label">
                {/* Button to hide/show the theme selector */}
                <button onClick={toggleThemeSelector} className="btn-show">
                    {themeSelectorVisible ? <BsEyeSlashFill /> : <AiFillEye />}
                </button>
            </h5>

            <Header />
            <Nav />
            <About />
            <Experience special1="Frontend Development" special2="Backend Development" />
            <Services />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
