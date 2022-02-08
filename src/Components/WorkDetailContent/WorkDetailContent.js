import React from 'react';
import SidebarDetailWork from '../SidebarDetailWork/SidebarDetailWork';
import './WorkDetailContent.css';
import LogoEj from '../../Images/imglogoej.jpg'
function WorkDetailContent() {
  return (
        <section className="workDetailContainer">
                <div className='infoHeader'>
                    <h1>Front-End Software Engineer</h1>
                    <button>Full time</button>
                    <span>5 days ago</span>
                </div>
                <div>
                    <img src={LogoEj} alt="" />
                    <p>Kasisto</p>
                    <span>New York</span>
                </div>
                <section className='textContainerWorkDetail'>
                    <div className='infoDigitalExperiences'>
                        <p>Humanizing Digital Experiences®</p>
                        <p>Kasisto’s Digital Experience Platform, KAI, is designed for financial institutions to deliver the industry’s most amazing Conversational AI powered intelligent virtual assistants to their customers. KAI is open and extensible, and also fluent in the language of banking and finance. From simple retail transactions to the complex demands of corporate banks and wealth management, financial institutions can deliver meaningful digital interactions with KAI that help build their digital brand.</p>
                        <p>Financial institutions around the world use KAI, including DBS Bank, J.P. Morgan, Mastercard, Standard Chartered, TD Bank, and Manulife Bank among others. They chose KAI for its proven track record to drive business results while improving customer experiences. The platform is used by millions of consumers around the world, all the time, across multiple channels, in different languages, and is optimized for performance, scalability, security, and compliance.</p>
                    </div>
                    <div className='infoPosition'>
                        <p>This position</p>
                        <p>We are looking for a Full-Stack, client side software engineer to help build and integrate responsive chat interfaces, analytics dashboards and reporting tools.</p>
                    </div>
                    <div className='infoWhatWillBeDoing'>
                        <p>What you'll be doing</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, reprehenderit?</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, reprehenderit?</p>
                    </div>
                    <div className='infoWhatWeOffer'>
                        <p>What we offer:</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, reprehenderit?</p>
                    </div>
                    <div className='infoLocation'>
                        <p>Location - NYC, Flatiron District</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, reprehenderit?</p>
                    </div>
                </section>
        {/* 
        
        Humanizing Digital Experiences®

        Kasisto’s Digital Experience Platform, KAI, is designed for financial institutions to deliver the industry’s most amazing Conversational AI powered intelligent virtual assistants to their customers. KAI is open and extensible, and also fluent in the language of banking and finance. From simple retail transactions to the complex demands of corporate banks and wealth management, financial institutions can deliver meaningful digital interactions with KAI that help build their digital brand.
        
        Financial institutions around the world use KAI, including DBS Bank, J.P. Morgan, Mastercard, Standard Chartered, TD Bank, and Manulife Bank among others. They chose KAI for its proven track record to drive business results while improving customer experiences. The platform is used by millions of consumers around the world, all the time, across multiple channels, in different languages, and is optimized for performance, scalability, security, and compliance.
        
        This position
        
        We are looking for a Full-Stack, client side software engineer to help build and integrate responsive chat interfaces, analytics dashboards and reporting tools.
        
        What you’ll be doing
        
        Working closely with clients and internal engineering, product and design teams to gather requirements Building and integrating front-end applications with CSS, HTML, Javascript, jQuery, Vue.js, Webpack, Handlebars.js, LESS, Backbone, Python, Django and Java Working to improve user experience and functionality for tools Writing testable code utilizing common front-end unit and BDD testing frameworks What you need for this position
        
        3+ years in client-side web development with CSS, HTML, Javascript and jQuery Proven, full-stack front-end experience using Python and Django Other Modern Web Framework(s) experience is a plus (React, Vue, Angular, Ember) Experience working collaboratively to build scalable, modular, production software in an Agile environment Experience using RESTful json services Node.js and API development familiarity is plus D3.js is a plus
        
        What we offer:
        
        Competitive compensation package Ground floor opportunity within rapidly growing tech startup Great collaborative team environment Full Benefits Fun perks
        
        Location - NYC, Flatiron District
        
        We welcome your cover letter with a description of your previous complete experience and your resume. Applicants must be authorized to work in the US as we are unable to sponsor. Kasisto is an equal opportunity employer.
 */}
        </section>
);
}

export default WorkDetailContent;