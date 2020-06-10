import React, { Component } from 'react'
import history from "./history"
import { Button }from '@material-ui/core';
export class Main extends Component {

    ReactJoiFormHandler =()=>{
        history.push("/ReactHookWithJoi")
    }

    FormikHandler =()=>{
        history.push("/ReactFormik")
    }

    ReactYupFormHandler =()=>{
        history.push("/ReactHookWithYup")
    }




    render() {
        return (
            <div>
            <h1>Welcome to React Form Validators</h1>
            <h1>With Material Ui</h1>
            <Button color="inherit" onClick={this.ReactJoiFormHandler} style={{backgroundColor:"Brown"}}>React Hook with joi</Button>
            <Button color="inherit" onClick={this.FormikHandler} style={{backgroundColor:"Brown",marginLeft:20}}>Formik</Button>
            <Button color="inherit" onClick={this.ReactYupFormHandler} style={{backgroundColor:"Brown",marginLeft:"20px"}}>React Hook With yup</Button>        
            </div>
        )
    }
}

export default Main
