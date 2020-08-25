import React from 'react';
import coverImage from '../../assets/cover/ocean.jpg';
import portrait from '../../assets/cover/michael.png';

function About ()  {
    return (
        <div>
            <section class="hero">
                <h3>Full Stack Developer</h3>
            </section>
            <section class="content">
                <article id="about" class="about-me">
                    <a class="portrait"><img src={portrait} className='my-2' style={{ width: "40%" }} alt="A picture of me."/></a>
                    <h2>About Me</h2>
                    <p>
                        My name is Michael Silva. In December of 2017 I graduated from Texas A&M University with a B.S. in Economics, and had a brief foray into the world of education. I spent time at Stephen F. Austin Middle School, and more recently two years at Wellborn Middle School in College Station as a Seventh Grade Math Teacher, but now I am setting my sights on the world of full-stack web development. 
                    </p>
                </article>
            </section>
        </div>
    )
}

export default About;