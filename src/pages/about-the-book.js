import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/book/book.png'
import { Helmet } from "react-helmet"

const ATB = (props)=>{


    const slug =(props.location.href);
    
	const disqusConfig = {
	  shortname: 'graham-braddock',
	  config: { identifier:  12, slug}
    }
    

	return (
		<>
		 	<Layout>
             <Helmet title="About the Book | Graham C. Braddock"/>
		 		<Nav pathExt={props.path}/>
            
		 		<Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                 
                 />

                <main className="wrapperMain">
                    <div 
                        className="container"
                        id="book-containers" >

                            <BookInfo
                                data={{
                                    title:`OPERATION GRAVELRASH`,
                                    spanTitle: '',
                                    imgSrc: Book1,
                                    id:'the_gifted_one',
                                    content:
                                    `
                                    <p> 
                                        In Queensland, two seemingly unconnected investigations are underway; a stalled search for a murderer by the state police and mysterious shipments of cement that have set bells ringing in the Australian Federal Police. As the events converge, a cattle property in the Central Queensland outback becomes the unlikely setting for a series of incidents that threaten Australia’s economy and national security.
                                    </p>
                                    <p>
                                        In the midst of Cyclone Oswald, which paralyses much of Queensland and northern New South Wales, Superintendent Lawrence Parry and his handpicked team of undercover and specialist agents must fit together the jigsaw puzzle of clues. The Bryants, a middle-aged couple who live on the remote property, struggle to remain viable in the face of a neighbouring cattle station that is the operational base for a multimillion-dollar enterprise. But these neighbours’ past and present activities could have implications that are not just local, but global. Meanwhile, Parry is caught in a moral dilemma as he relies on a bereaved family, a disgraced university professor, an investigative reporter, and a retired mining engineer to uncover the truth. </p>
                                    <p>
                                    In this crime mystery, a team of federal officers investigates events that could not only affect Australia’s international trade, but also catapult the nation into a war of words with nuclear overtones.
                                    </p>
                                    `,
                                    
                                    ebooks:{
                                        stratton : 'https://stratton-press.com/books/operation-gravelrash/',
                                        barnes: 'https://www.barnesandnoble.com/w/operation-gravelrash-graham-c-braddock/1122738056?ean=9781947355156',
                                        amazon :'https://www.amazon.com/Operation-Gravelrash-Graham-Braddock-ebook/dp/B0779JYVSQ/ref=sr_1_1?keywords=9781947355156&qid=1554241874&s=gateway&sr=8-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Operation-Gravelrash-Graham-Braddock/dp/1947355147/ref=sr_1_1?keywords=9781947355149&qid=1554241823&s=gateway&sr=8-1',
                                        barnes:'https://www.barnesandnoble.com/w/operation-gravelrash-graham-c-braddock/1122738056?ean=9781947355149',
                                        booksamillion:'https://www.booksamillion.com/p/Operation-Gravelrash/Graham-Braddock/9781947355149?id=8049069540563&_ga=2.258928589.656402611.1612168676-2145380449.1604906972',
                                    }
                                }}
                            />
                            <div className="commentSection" >
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                    </div>	
                </main>
		 	</Layout>
		</>
	)
}


export default ATB;