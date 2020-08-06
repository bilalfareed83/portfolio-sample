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
                            <img id="profile-pic" src="images/kabeer.jpg" alt="kabeer" />
                            <h5 style={{ textAlign: "center", lineHeight: 0 }}>Personalizse Theme</h5>
                            
                            <div id="theme-opt-wrapper">
                                <div id="light-mode" className="theme-dot"></div>
                                <div id="blue-mode" className="theme-dot"></div>
                                <div id="green-mode" className="theme-dot"></div>
                                <div id="purple-mode" className="theme-dot"></div>
                            </div>

                            <p id="setting-note">Theme setting will be saved for <br/> your next visit</p>

                        </div>
                        <div className="right-column">
                            <div id="preview-shadow">
                            <div id="preview">
                                <div id="tl" className="corner"></div>
                                <div id="tr" className="corner"></div>
                                
                                <h1>What i do.</h1>
                                <p>Political economy of development, governance and service delivery, industrial policy and structural transformation, electoral politics, state effectiveness.</p>
                                <div id="bl" className="corner"></div>
                                <div id="br" className="corner"></div>
                            </div>
                            </div>
                            </div>
                    </div>
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