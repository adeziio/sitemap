import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import notFound from './../logo/not-found.jpg';
import { extractKey } from "../api/BackendAPI";

export default class FocusedView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            base64: "",
            resMsg: ""
        }
    }

    componentDidMount = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const key = urlParams.get('key');
        this.extract(key);
    }

    setResMsg = (resMsg) => {
        this.setState({
            resMsg: resMsg
        })
    }

    extract = async (key) => {
        let resExtract = await extractKey(key);
        if (resExtract) {
            if (resExtract.status === "Success") {
                this.setState({
                    base64: resExtract.base64
                })
            }
            else {
                this.setResMsg("Failed");
            }
        }
        else {
            this.setResMsg("Failed");
        }
    }

    render() {
        const { base64, resMsg } = this.state;
        const src = resMsg !== "Failed" ? `data:image/*;base64,${base64}` : notFound;

        return (
            <>
                <Helmet>
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="theme-color" content="#000000" />
                    <meta name="description" content="A photo collection created by TESTING." />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="TESTING" />
                    <meta property="og:description" content="A photo collection created by TESTING." />
                    <meta property="og:image" content={src} />
                    <meta property="og:url" content="https://stargallery.vercel.app/" />
                </Helmet>
                <img src={`${src}`} alt="" width="100%" height="auto" />
            </>
        )
    }
}