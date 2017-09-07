import React, {Component} from 'react';
import $ from 'jquery';
import loops from './../../images/loops1.svg';
import dLCert from './../../files/deep-learning-certificate.pdf';
import fendNano from './../../files/frontend-nanodegree.pdf';

class EduExperience extends Component {

    render() {
        return(
            <main id="EduExperience">
                <header onClick={() => $('#EduExperience section').toggle(400)}>
                    <img src={loops}/>
                    <h1>My Education & Experience</h1>
                </header>
                <section>
                     <img src={loops}/> 
                    <div className="flexContainer">
                        <div className="eduEx" id="provo">
                            <div className="headers">
                                <h2>DevMountain</h2>
                                <h2>Provo, UT</h2>
                                <h3>Student Developer</h3>
                                <h3>CURRENT</h3>                                
                            </div>
                            <ul>
                                <li>Emphasis on Full-Stack Development with React, Sass, Node, Express, Massive, SQL.</li>
                                <li>Developed web apps regularly, while improving skills with in-class demos and projects.</li>                                                              
                            </ul>
                        </div>
                        <div className="eduEx" id="online">
                            <div className="headers">
                                <h2>Udacity</h2>
                                <h2>Online</h2>
                                <h3>Student Developer/Programmer</h3>
                                <h3>Nov 2016 - July 2017</h3>                                
                            </div>
                            <ul>
                                <li>Enrolled in <a href="" target="_blank">Front-End Web Developer Nanodegree</a> & <a href="" target="_blank">Deep Learning Foundation Nanodegree</a>.</li>                                
                                <li>Earned nanodegree in Front-End Web Dev & certificate in Deep Learning Foundations through online coursework with regular projects.</li>                                                             
                            </ul>
                        </div>
                        
                    </div>
                </section>
            </main>
        );
    }
}

export default EduExperience;