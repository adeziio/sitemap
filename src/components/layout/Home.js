import React, { Component } from 'react';
import './../css/style.css';
import Header from "./Header";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showProjects: true,
            showAbout: false,
            showContact: false
        }
    }

    setShowProjects = (status) => {
        if (status) {
            this.setState({
                showProjects: status,
                showAbout: false,
                showContact: false
            })
        }
    }

    setShowAbout = (status) => {
        if (status) {
            this.setState({
                showProjects: false,
                showAbout: status,
                showContact: false
            })
        }
    }

    setShowContact = (status) => {
        if (status) {
            this.setState({
                showProjects: false,
                showAbout: false,
                showContact: status
            })
        }
    }

    render() {
        const { showProjects, showAbout, showContact } = this.state;

        return (
            <div >
                <div className="header-container">
                    <Header setShowProjects={this.setShowProjects} setShowAbout={this.setShowAbout} setShowContact={this.setShowContact} />
                </div>
                <div className="content-container">
                    {showAbout ? <About /> : null}
                    {showProjects ? <Projects showProjects={showProjects} /> : null}
                    {showContact ? <Contact /> : null}
                </div>
                <div className="footer-container">
                    <Footer />
                </div>
            </div>
        )
    }
}