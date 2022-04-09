import React, { Component } from 'react';
import { Button, FormControl } from '@mui/material';
import { upload } from "./../api/BackendAPI";

export default class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: undefined
        }
    }

    handleFileSelect = (event) => {
        this.setState({
            file: event.target.files[0]
        })
    }

    handleSubmit = async () => {
        const { file } = this.state;
        if (file) {
            console.log("Submitting:", file)
            const result = await upload(file);
            console.log("Got back:", result)
        }
        else {
            console.log("No file selected")
        }
    }

    render() {
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
            </>
        )
    }
}