import React from "react";
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import FormBuilder from "./FormBuilder/FormBuilder";
import FormData from "./FormBuilder/FormData";


export default function ReactHook() {
  return (
    <Container maxWidth="sm" component={Paper} style={{textAlign:"center"}}>
    <h1>React Hook with Yup</h1>
        <FormBuilder list={FormData} />
    </Container>
  );
}



