import React,{useEffect, useRef} from 'react'
import {Link} from 'gatsby'
import  ImgBanner from '../../static/book/book.png'

const Banner = ()=>{

    const elemBanner = useRef(null);

    useEffect(() => {

    });
 

    return (
        <>
            <section className="banner-section">

                    <div className="grid-two-layout-col">
                        <div className="wrapper-bg-left">
                            <div className="left-col">
                                <div className="banner-content-wrapper">
                                    <h1>
                                        <span className="first-block">
                                            <span>
                                            Things aren't always as they seem.
                                            </span>
                                        </span>

                                        <span className="second-block">
                                            <span id="color-o">

                                            </span>
                                        </span>
                                    </h1>
                                    <p>
                                    Keep your eyes open, learn to trust your instincts, and be vigilant. Prepare to let your better judgment outweigh your emotions
                                    </p>

                                    <button>
                                        <Link to="/about-the-book">
                                            Read More
                                        </Link>
                                    </button>
                               
                                </div>
                            </div>
                        </div>

                        <div className="wrapper-bg-right">
                            <div className="right-col banner-img-col">

                                <div className="img-banner-wrapper" ref={elemBanner}>
                                    <img src={ImgBanner}/>
                                </div>

                            </div>
                        </div>
                    </div>

            </section>
        </>
    )
}

export default Banner;