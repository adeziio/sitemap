import React, { Component } from 'react';
import { Button, FormControl, Alert } from '@mui/material';
import { upload } from "./../api/BackendAPI";

export default class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: undefined,
            resMsg: ""
        }
    }

    setResMsg = (resMsg) => {
        this.setState({
            resMsg: resMsg
        })
    }

    handleFileSelect = (event) => {
        this.setState({
            file: event.target.files[0],
            resMsg: ""
        })
    }

    handleSubmit = async () => {
        const { file } = this.state;
        if (file) {
            const result = await upload(file);
            if (result) {
                this.setResMsg(result.status);
            }
            else {
                this.setResMsg("Error");
            }

        }
        else {
            this.setResMsg("No file selected");
        }
    }

    render() {
        const { resMsg } = this.state;

        return (
            <>
                <FormControl>
                    <Button
                        variant="contained"
                        component="label"
                    >
                        <input
                            name="input"
                            type="file"
                            accept="image/jpeg, image/png"
                            onChange={this.handleFileSelect}
                        />
                    </Button>
                    <Button
                        variant="contained"
                        component="label"
                        sx={{ display: "block", marginTop: 1 }}
                        onClick={this.handleSubmit}
                    >
                        Submit
                    </Button>
                </FormControl>

                {resMsg === "Success" ? <Alert sx={{ marginTop: 1 }} severity="success">{resMsg}</Alert> : null}
                {resMsg === "No file selected" ? <Alert sx={{ marginTop: 1 }} severity="warning">{resMsg}</Alert> : null}
                {resMsg === "Error" ? <Alert sx={{ marginTop: 1 }} severity="error">{resMsg}</Alert> : null}
            </>
        )
    }
}