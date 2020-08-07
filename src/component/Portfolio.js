import React from 'react'


const Portfolio = () => {
    return (
        <>
            
            

            <section className="s1">
                <div className="main-container">
                    <h3 style={{ textAlign: "center" }}>Some of my past project</h3>
                    <div className="post-wrapper">
                        <div>
                        <div className="post">
                            <img className="thumnail" src="images/kabeer.jpg" alt="project" />
                            <div className="post-preview">
                                <h6 className="post-title">Post title</h6>
                                <p className="post-intro">This is project intro</p>
                                <a href="#">read more</a>
                            </div>                    
                            </div>
                            
                        </div>

                        <div>
                        <div className="post">
                            <img className="thumnail" src="images/kabeer.jpg" alt="project" />
                            <div className="post-preview">
                                <h6 className="post-title">Post title</h6>
                                <p className="post-intro">This is project intro</p>
                                <a href="#">read more</a>
                            </div>                    
                           
                            
                            </div>
                        </div>
                        
                        <div>
                        <div className="post">
                            <img className="thumnail" src="images/kabeer.jpg" alt="project" />
                            <div className="post-preview">
                                <h6 className="post-title">Post title</h6>
                                <p className="post-intro">This is project intro</p>
                                <a href="#">read more</a>
                            </div>                    
                           
                            
                            </div>
                            </div>
                    </div>
                </div>
            </section>

            {/* <section className="s2">
                <div className="main-container">
                    Contact
                </div>
            </section> */}
            </>
    )
}

export default Portfolio