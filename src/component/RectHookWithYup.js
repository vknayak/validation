import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


const schema = yup.object().shape({
  firstName: yup.string()
            .required('Required')
            .max(15, 'Must be 15 characters or less'),
  lastName: yup.string()
            .required('Required')
            .max(20, 'Must be 20 characters or less'),
  email:yup.string()
        .email('Invalid email address')
        .required('Required')
});

export default function ReactHook() {

  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
    mode:"onBlur",
    submitFocusError:false,
  });
  const onSubmit=(values) =>{
    alert(JSON.stringify(values, null, 2));
  }
  console.log(useForm,"useFormmmmm")

  console.log(errors,"errorssssss")
  return (
    <Container maxWidth="sm" component={Paper}>
    <h1>React Hook with Yup</h1>
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



