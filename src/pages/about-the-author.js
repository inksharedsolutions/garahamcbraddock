import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/dummy.png'
import { Helmet } from "react-helmet"
const ATB = (props)=>{
	
	return (
		<>
		 	<Layout>
             <Helmet title="About the Author | Graham C. Braddock"/>
		 		<Nav pathExt={props.path}/>
                 <Banner 
                 spanFirst={`About The`}
                 contextHeading={`Author`}/>


		 		<div className="container">
				    <section className="body-author-contents">

                        <div className="heading-quote">
                            <div className="author-image-container">
                                <img src={AuthorImg} />
                            </div> 

                            <div className="heading-quote">
                                <h4>
                                    
                                </h4>
                                
                                <span className="ata-span-fx">
                                    {/* author quote */}
                                </span>
                            </div>
                        </div>

                        <article 
                            className="article-section" 
                            id="author">

                            <p>
                            Graham Braddock began work as a radio technician in New Zealand, continued in specialized electronics in NZ and Australia including the short-lived copper mine on Bougainville Island. He is retired in Queensland with his wife, Kaye and three cats.
                            </p>

                            <p>
                            Operation Gravelrash fulfils his long-held intention to write a novel and second book with Superintendent Lawrence Parry, set in Queensland and Ukraine, is nearing completion with another of the ongoing series at the planning stage.
                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author |  Writer </span>
                                    Graham C. Braddock
                                </span>
                            </p>
                            
                        </article>
              

                    </section>
                </div>

		 	</Layout>
		</>
	)
}


export default ATB;