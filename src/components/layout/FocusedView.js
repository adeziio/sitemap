import React, { Component } from 'react';
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
                <img src={`${src}`} alt="" width="100%" height="auto" />
            </>
        )
    }
}