import React, { Component } from 'react';
import './../css/style.css';
import Header from "./Header";
import Upload from "./Upload";
import Gallery from "./Gallery";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: "Gallery",
            currentFilter: "All"
        }
    }

    setCurrentPage = (page) => {
        this.setState({
            currentPage: page
        })
    }

    setCurrentFilter = (filter) => {
        this.setState({
            currentFilter: filter
        })
    }

    render() {
        const { currentPage, currentFilter } = this.state;

        return (
            <div >
                <div className="header-container">
                    <Header setCurrentPage={this.setCurrentPage} setCurrentFilter={this.setCurrentFilter} />
                </div>

                <div className="content-container">
                    {currentPage === "About" ? <About /> : currentPage === "Contact" ? <Contact /> : currentFilter === "Upload" ? <Upload /> : null}
                </div>

                <div className="gallery-container">
                    {currentPage === "Gallery" ? <Gallery currentFilter={currentFilter} /> : null}
                </div>

                <div className="footer-container">
                    <Footer />
                </div>
            </div>
        )
    }
}