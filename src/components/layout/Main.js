import React, { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Upload from "../service/Upload";
import Extract from "../service/Extract";
import Delete from "../service/Delete";
import Gallery from "../service/Gallery";
import User from "../service/User";
import About from "../service/About";

const Main = () => {
    const [page, setPage] = useState("Gallery");
    const [isAdmin, setisAdmin] = useState(false);
    const [size, setSize] = useState(0);

    return (
        <>
            <div className="header-container">
                <Header setPage={setPage} isAdmin={isAdmin} />
            </div>

            <div className="content-container">
                {page === "Gallery" ? <Gallery isAdmin={isAdmin} size={size} setSize={setSize} />
                    : page === "Upload" ? <Upload />
                        : page === "Extract" ? <Extract />
                            : page === "Delete" ? <Delete />
                                : page === "About" ? <About size={size} />
                                    : page === "User" ? <User isAdmin={isAdmin} setisAdmin={setisAdmin} />
                                        : null
                }
            </div>

            <div className="footer-container">
                <Footer />
            </div>
        </>
    )
}

export default Main;