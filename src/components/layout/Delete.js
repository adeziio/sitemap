import React, { Component } from 'react';
import { Button, FormControl, Alert, TextField } from '@mui/material';
import { deleteKey } from "./../api/BackendAPI";

export default class Delete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: "",
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
            this.delete();
        }
    }

    delete = async () => {
        const { key } = this.state;
        if (key) {
            let resDelete = await deleteKey(key);
            if (resDelete) {
                this.setResMsg(resDelete.status);
            }
            else {
                this.setResMsg("Failed");
            }
        }
    }

    render() {
        const { resMsg } = this.state;

        return (
            <>
                <FormControl variant="standard" sx={{ width: "20rem", marginTop: "2rem" }}>
                    <TextField sx={{ marginTop: 1 }} label="Key" variant="outlined" onChange={(e) => this.setKey(e)} onKeyDown={this._handleKeyDown} />
                    <Button sx={{ marginTop: 1 }} type="button" color="primary" variant="contained" onClick={this.delete} >
                        Delete
                    </Button>
                    {resMsg === "Success" ? <Alert sx={{ marginTop: 1 }} severity="success">{resMsg}</Alert> : null}
                    {resMsg === "Failed" ? <Alert sx={{ marginTop: 1 }} severity="error">{`Failed to delete`}</Alert> : null}
                </FormControl>
            </>
        )
    }
}