import React, { Component } from 'react';
import './../css/style.css';
import Header from "./Header";
import Upload from "./Upload";
import Extract from "./Extract";
import Delete from "./Delete";
import Gallery from "./Gallery";
import User from "./User";
import About from "./About";
import Footer from "./Footer";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "Gallery",
            isAdmin: false,
            size: 0
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

    setSize = (size) => {
        this.setState({
            size: size
        })
    }

    render() {
        const { page, isAdmin, size } = this.state;

        return (
            <div >
                <div className="header-container">
                    <Header setPage={this.setPage} isAdmin={isAdmin} />
                </div>

                <div className="content-container">
                    {page === "Upload" ? <Upload />
                        : page === "Extract" ? <Extract />
                            : page === "Delete" ? <Delete />
                                : page === "About" ? <About size={size} />
                                    : page === "User" ? <User isAdmin={isAdmin} setisAdmin={this.setisAdmin} />
                                        : null
                    }
                    {page === "Gallery" ?
                        <Gallery isAdmin={isAdmin} setSize={this.setSize} />
                        : null
                    }
                </div>

                <div className="footer-container">
                    <Footer />
                </div>
            </div>
        )
    }
}