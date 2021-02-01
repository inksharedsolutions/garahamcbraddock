import React from 'react'
import Block from  './Testimonials/testimonial-block'


const Testimonial = ()=>{
    return(
        <>
            <section className="testimonial-section">
                <h1>
                    <span>
                        Testimonials
                    </span>
                </h1>
            </section>

            <section className="testimonial-blocks">
                <div className="grid-block-wrapper">
                    <Block
                        num={`01`}
                        title={`Entertaining way to learn lessons for life`}
                        author={`German Velez`}
                        content={
                            `
                            What an insightful and entertaining story! I 
                            identified myself with many parts of the book,
                            like the way my parents educated me, doubts about religion, etc.
                            I liked the way that the book reflects about these and many other 
                            issues; it doesn't say what is good or bad, but it teaches us to 
                            accept reality in a positive way, being tolerant, accepting imperfections 
                            and understanding other points of view.
                            `
                        }
                    />

                    <Block
                        num={`02`}
                        title={` I Loved this Book!`}
                        author={`DFT`}
                        content={
                            `
                            I enjoyed this book more than many others by more renowned writers.
                            I was not disappointed in the end, I was very satisfied; yet I didn't
                            want it to end. One is not left hanging, but it was like eating
                            a perfectly cooked steak. Every bite is savored and when it is all gone,
                            although satisfied, just one more bite would be great.
                            `
                        }
                    />


                    <Block
                        num={`03`}
                        title={`It's worth reading!`}
                        author={`Paul Pressi`}
                        content={
                            `
                            This was a very good book to read. Even though is fictional,
                            the author had a lot of historical information about WWII
                            that takes the reader back to that time. And as Frank, 
                            the main character, goes thru his troubles the reader can
                            benefit from the advice and teachings of his mentor and apply
                            that to their own lives.
                            `
                        }
                    />

                </div>
            </section> 
        </>
    )
}


export default Testimonial


