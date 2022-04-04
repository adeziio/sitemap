import React, { Component } from 'react';
import './../css/style.css';
import Header from "./Header";
import Projects from "./Projects";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showProjects: false,
            showAbout: false,
            showContact: false
        }
    }

    componentDidMount = () => {
        this.setShowProjects(true);
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
        const { showProjects } = this.state;

        return (
            <>
                <Header setShowProjects={this.setShowProjects} setShowAbout={this.setShowAbout} setShowContact={this.setShowContact} />
                <Projects showProjects={showProjects} />
            </>
        )
    }
}