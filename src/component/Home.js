import React from 'react'


const Home = () => {
    return (
        <>
            <section className="s1">
                <div className="main-container">
                    <div className="greeting-wrapper">
                    <h1>Hi, I'm Kabeer Dawani</h1>
                        {/* <p>I am researcher</p> */}
                    </div>
                    <div className="intro-wrapper">
                        <div className="nav-wrapper">
                            <div className="dots-wrapper">
                                <div id="dot1" className="browser-dot"></div>
                                <div id="dot2" className="browser-dot"></div>
                                <div id="dot3" className="browser-dot"></div>
                            </div>
                            <ul id="navigation">
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div className="left-column">
                            Left Column
                        </div>
                        <div className="right-column">
                            Right Column
                        </div>
                    </div>
                    {/* <a href="#"> Link</a> */}
                </div>
            </section>

            <section className="s2">
                <div className="main-container">
                    About
                </div>
            </section>

            <section className="s1">
                <div className="main-container">
                    Portfolio
                </div>
            </section>

            <section className="s2">
                <div className="main-container">
                    Contact
                </div>
            </section>
            </>
    )
}

export default Home