import React, {Component} from 'react';
import $ from 'jquery';
import loops from './../../images/loops3.svg';

class About extends Component {

    render() {
        return(
            <main id="About">
                <header onClick={() => $('#About section').toggle(400)}>
                    <img src={loops}/>
                    <h1>About Me</h1>
                </header>
                <section>
                    <div className="flexContainer">
                        <div className="project">
                            <h2>Skills</h2>
                            <div>
                                <a href="#">
                                    <img src="http://via.placeholder.com/250x167" alt="emily keator project"/>
                                </a>
                                <p>Description of project here: Valar Morghulis</p>
                            </div>
                        </div>
                        <div className="project">
                            <h2>Interests</h2>
                            <div>
                                <a href="#">
                                    <img src="http://via.placeholder.com/250x167" alt="emily keator project"/>
                                </a>
                                <p>Description of project here: Valar Morghulis</p>
                            </div>
                        </div>
                        <div className="project">
                            <h2>Me</h2>
                            <div>
                                <a href="#">
                                    <img src="http://via.placeholder.com/250x167" alt="emily keator project"/>
                                </a>
                                <p>Description of project here: Valar Morghulis</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default About;