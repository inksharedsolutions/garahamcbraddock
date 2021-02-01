import React from 'react'
import Book from '../../static/book/two_perspective_book.png'
import { Link } from 'gatsby'

const MainBook = ()=>{

    return(
        <>
            <section className="section-main-book">
                <div className="book-grid-columns">

                    <div className="book-contents">
                        <h1> One Full American Life</h1>
                        <span>Of a First Generation Immigrant Of Mexican Descent</span>

                        <p>
                            Donald Trump’s blatant prejudice against people of color instilled in Roberto a desire to tell his family’s story. Because his parents and family spoke only Spanish at home, Roberto became an English language learner, as did his eleven siblings. 
                        </p>

                        <button className="button-wraps">
                            <Link to="/about-the-book">
                                Read More
                            </Link>
                        </button>
                    </div>

                     <div className="book-img-wrapper">
                            <img src={Book}/>
                     </div>
                </div>
            </section>
        </>
    )
}

export default MainBook