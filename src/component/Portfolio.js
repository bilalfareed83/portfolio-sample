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
                            <img className="thumnail" src="images/pink-medications-and-pills.jpg" alt="project" />
                            <div className="post-preview">
                                <h6 className="post-title">Tackling Private Corruption in Pakistan's Pharmaceutical Sector</h6>
                                <p className="post-intro">The project focuses on Pakistan's pharmaceutical sector, which is currently valued at approximately USD$3 billion and comprises more than 750 firms.</p>
                                <a href="http://researchcollective.org/project_info.php?id=C_082" target="_blank">read more</a>
                            </div>                    
                            </div>
                            
                        </div>

                        <div>
                        <div className="post">
                            <img className="thumnail" src="images/labour.jpg" alt="project" />
                            <div className="post-preview">
                                <h6 className="post-title">Updating Living Wage Benchmarks</h6>
                                <p className="post-intro">The <strong>Global Living Wage Coalition</strong> has worked with its partners to develop living wage benchmarks for 20-plus countries and there are several more studies underway.</p>
                                <a href="http://researchcollective.org/project_info.php?id=C_081">read more</a>
                            </div>                    
                           
                            
                            </div>
                        </div>
                        
                        <div>
                        <div className="post">
                            <img className="thumnail" src="images/pakistan_garment.jpg" alt="project" />
                            <div className="post-preview">
                                <h6 className="post-title">Estimating a Living Wage</h6>
                                <p className="post-intro">This study uses a new methodology, more rigorous than previous ones, to estimate a living wage for workers in Sialkot.</p>
                                <a href="http://researchcollective.org/project_info.php?id=C_069" target="_blank">read more</a>
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