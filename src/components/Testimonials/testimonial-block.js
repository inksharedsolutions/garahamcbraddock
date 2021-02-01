 import React from 'react'
import Testimonial from '../testimonial'




 const TestimonialBlock = (props)=>{
     return(
         <>
             <section className="testimonial-block-element">

                <span className="testimonial-num">
                    {props.num}
                </span>

                <h2>{props.title}</h2>
                <span className="testimonial-author">{props.author}</span>

                <p>
                    {props.content}
                </p>
                
             </section>
         </>
     )
 }

 export default TestimonialBlock