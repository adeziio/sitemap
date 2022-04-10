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
            page: "Gallery"
        }
    }

    setPage = (page) => {
        this.setState({
            page: page
        })
    }

    render() {
        const { page } = this.state;

        return (
            <div >
                <div className="header-container">
                    <Header setPage={this.setPage} />
                </div>

                <div className="content-container">
                    {page === "Upload" ? <Upload /> : page === "About" ? <About /> : page === "Contact" ? <Contact /> : null}
                </div>

                <div className="gallery-container">
                    {page === "Gallery" ? <Gallery /> : null}
                </div>

                <div className="footer-container">
                    <Footer />
                </div>
            </div>
        )
    }
}