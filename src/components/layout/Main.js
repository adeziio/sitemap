import React, { Component } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Upload from "../service/Upload";
import Extract from "../service/Extract";
import Delete from "../service/Delete";
import Gallery from "../service/Gallery";
import User from "../service/User";
import About from "../service/About";


export default class Main extends Component {
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
            <>
                <div className="header-container">
                    <Header setPage={this.setPage} isAdmin={isAdmin} />
                </div>

                <div className="content-container">
                    {page === "Gallery" ? <Gallery isAdmin={isAdmin} size={size} setSize={this.setSize} />
                        : page === "Upload" ? <Upload />
                            : page === "Extract" ? <Extract />
                                : page === "Delete" ? <Delete />
                                    : page === "About" ? <About size={size} />
                                        : page === "User" ? <User isAdmin={isAdmin} setisAdmin={this.setisAdmin} />
                                            : null
                    }
                </div>

                <div className="footer-container">
                    <Footer />
                </div>
            </>
        )
    }
}