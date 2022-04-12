import React, { Component } from 'react';
import { Button, FormControl, Alert, TextField, Card, CardMedia } from '@mui/material';
import { extractKey } from "../api/BackendAPI";

export default class Extract extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: "",
            base64: "",
            date: "",
            resMsg: ""
        }
    }

    setKey = (e) => {
        this.setState({
            key: e.target.value
        })
    }

    setResMsg = (resMsg) => {
        this.setState({
            resMsg: resMsg
        })
    }

    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.extract();
        }
    }

    extract = async () => {
        const { key } = this.state;
        if (key) {
            let resExtract = await extractKey(key);
            if (resExtract) {
                if (resExtract.status === "Success") {
                    this.setState({
                        base64: resExtract.base64,
                        date: resExtract.date
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
    }

    focusedView = (src, date) => {
        const newTab = window.open();
        newTab?.document.write(`<!DOCTYPE html><head><title>${date}</title></head><body><img src="${src}" width="100%" height="auto" ></body></html>`);
        newTab?.document.close();
    }

    render() {
        const { base64, date, resMsg } = this.state;
        const src = `data:image/*;base64,${base64}`;

        return (
            <>
                <FormControl variant="standard" sx={{ width: "20rem", marginTop: "2rem" }}>
                    <TextField sx={{ marginTop: 1 }} label="Key" variant="outlined" onChange={(e) => this.setKey(e)} onKeyDown={this._handleKeyDown} />
                    <Button sx={{ marginTop: 1 }} type="button" color="primary" variant="contained" onClick={this.extract} >
                        Extract
                    </Button>
                    {resMsg === "Failed" ? <Alert sx={{ marginTop: 1 }} severity="error">{`Failed to extract`}</Alert> : null}
                </FormControl>
                {base64 ?
                    <Card
                        sx={{ height: "100%", width: "100%", maxWidth: "400px", display: "block", m: 2 }}
                        elevation={5}
                    >
                        <CardMedia
                            component="img"
                            width="100%"
                            image={src}
                            alt={"img"}
                            onClick={() => this.focusedView(src, date)}
                        />
                    </Card> : null
                }
            </>
        )
    }
}