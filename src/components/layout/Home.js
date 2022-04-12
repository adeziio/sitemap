import React, { Component } from 'react';
import './../css/style.css';
import Header from "./Header";
import Upload from "./Upload";
import Gallery from "./Gallery";
import User from "./User";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "Gallery",
            isAdmin: false
        }
    }

    setPage = (page) => {
        this.setState({
            page: page
        })
    }

    setisAdmin = (isAuth) => {
        this.setState({
            isAdmin: isAuth
        })
    }

    render() {
        const { page, isAdmin } = this.state;

        return (
            <div >
                <div className="header-container">
                    <Header setPage={this.setPage} />
                </div>

                <div className="content-container">
                    {page === "Upload" ? <Upload />
                        : page === "About" ? <About />
                            : page === "Contact" ? <Contact />
                                : page === "User" ? <User isAdmin={isAdmin} setisAdmin={this.setisAdmin} />
                                    : null
                    }
                </div>

                <div className="gallery-container">
                    {page === "Gallery" ? <Gallery isAdmin={isAdmin} /> : null}
                </div>

                <div className="footer-container">
                    <Footer />
                </div>
            </div>
        )
    }
}