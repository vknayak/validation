import React from "react";
import { useForm } from "react-hook-form";
// import * as yup from "yup";
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Joi from "@hapi/joi"

const validationSchema = Joi.object({
  firstName: Joi.string()
    .alphanum()
    // .min(3)
    .max(10)
    .required(),
  lastName: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  email: Joi.string().email({ tlds: {allow: false} })
});



const resolver = (data) => {
  console.log(data,"{{{{{{{{{{{{{{{{{{{   ")
const { error, value: values } = validationSchema.validate(data, {
  abortEarly: false
});

return {
  values: error ? {} : values,
  errors: error
    ? error.details.reduce((previous, currentError) => {
        return {
          ...previous,
          [currentError.path[0]]: currentError
        };
      }, {})
    : {}
};
};
export default function ReactHook() {

  const { register, handleSubmit, errors } = useForm({
    validationResolver: resolver,
    mode:"onBlur",
    submitFocusError:false,
  });
  const onSubmit=(values) =>{
    alert(JSON.stringify(values, null, 2));
  }

  console.log(errors.firstName,)
  return (
    <Container maxWidth="sm" component={Paper}>
    <h1>React Hook with Joi</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{marginTop:"20px"}}>
        <TextField  
        error={errors.firstName ? true : false}
        name="firstName" 
        label="firstName" 
        inputRef={register} 
        helperText={errors.firstName && errors.firstName.message} 
        variant="outlined"
        />
      
      </div>
      
      <div style={{marginTop:"20px"}}>
        <TextField  
        error={errors.lastName ? true : false}
        name="lastName" 
        inputRef={register} 
        label="lastName"
        helperText={errors.lastName && errors.lastName.message} 
        variant="outlined"
        />
      </div>  

      <div style={{marginTop:"20px"}}>
        <TextField  
        error={errors.email ? true : false}
        name="email" 
        label="email"
        inputRef={register} 
        helperText={errors.email && errors.email.message} 
        variant="outlined"
        />
      </div>
      
      
      
        <Button
        style = {{"marginTop":"10px","marginBottom":"10px"}}
        type="submit"
        variant="contained"
        color="primary"
        >
        Submit
      </Button> 
      
    </form>
    </Container>
   
  );
}



