import './App.css';
import { useState } from 'react';
import SocialLinks from './components/links';


function App() {
    const [links] = useState([
        {
            name: "GitHub",
            link: 'https://github.com/Mercury002'
        },
        {
            name: 'Linkedin',
            link: 'https://www.linkedin.com/in/sohib-abduganiyev-b77017227/'
        },
        {
            name: 'Instagram',
            link: 'https://www.instagram.com/burkhonovich_/'
        },
        {
            name: 'Telegram',
            link: 'https://t.me/Pro100_Sohib'
        },
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/id/942201131/'
        }
    ])

    return (
        <div className="App">
            <div className="container">
                <h1>Sokhibjon Abduganiyev</h1>

                <p>I am a software developer, currently working at <a target='_blank' rel="noreferrer" href="https://bulavka.uz/">Bulavka.uz</a></p>
                <p>
                    Experienced front-end developer with over a year and a half of experience in creating web applications and websites.
                    I specialize in the development of user interfaces using modern technologies and frameworks. <br />
                    Familiar with <span className='skills'>HTML/PUG</span>, <span>CSS/SASS/LESS</span>,  <span> JavaScript/jQuery</span>, <span>Vue.js/React</span>  and other tools for creating interactive user interfaces. <br />
                    I am looking for an opportunity to grow and develop in a company that values technological progress and innovation. <br />
                </p>

                <p>Outside of programming I'm trying to learn something new, in programming and everything else, I enjoy doing photography, watching anime and doramas, playing Dota 2 and CSGO, love manty and all fruits.</p>

                <h3>Find me on</h3>

                <div className='links'>
                    {links.map((el, index) => {
                        return <SocialLinks linkObj={el} key={index} />
                    })}
                </div>

                <div className='mail'>Mail me at <a href="mailto:abuganiyevsoxib002@gmail.com">abuganiyevsoxib002@gmail.com</a></div>

                <footer>
                    <div className='footer-container'>
                        <span>Sokhibjon Abduganiyev,</span>
                        <span>2022 - present</span>
                    </div>

                </footer>
            </div>
        </div>
    );
}


export default App;
