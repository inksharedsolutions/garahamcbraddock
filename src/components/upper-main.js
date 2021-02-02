import React,{useEffect, useRef, useState} from 'react'
import {Link} from 'gatsby'
import AuthorImg from '../../static/author/dummy.png'

const UpperMain =()=>{


    const elemBanner = useRef(null);
    const [stateUpper, statFunc] = useState(false);
    
    useEffect(() => {
        window.addEventListener('scroll', scrollEffect);
    });

    const scrollEffect = (e)=>{
        let axisY =window.scrollY;

        if(axisY > 500 ){
            statFunc(true);
        }
    }   
    
    
    return  (
        <>
            <section className={`upper-main upper-style`}>
                <div className="container-gt">

                    <div className="grid-two-columns" >
                        <div className={`img-wrapper-form ${stateUpper && 'image-author'}`}>
                            <img src={AuthorImg} alt="author-image"/>
                        </div>

                        <div classNames="content-img-wrapper">
                            <section className="content-wrapper-body">
                                <h1>Graham C. Braddock</h1>
                                <span>Author & Writer</span>

                                <p>
                                Graham Braddock began work as a radio technician in New Zealand and continued in specialised electronics there, in Australia, and at the short-lived copper mine on Bougainville Island. He is retired in Queensland with his wife, Kaye; three cats; and a golf handicap that leaves much to be desired.
                                </p>

                                <button>
                                    <Link to="/about-the-author">
                                        Read More
                                    </Link>
                                </button>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UpperMain