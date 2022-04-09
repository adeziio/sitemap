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
            console.log("Submitting:", file)
            const result = await upload(file);
            console.log("Got back:", result)
            this.setResMsg(result.status);
        }
        else {
            console.log("No file selected")
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
                            type="file"
                            accept="image/*"
                            onChange={this.handleFileSelect}
                        // hidden
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
            </>
        )
    }
}