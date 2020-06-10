import React,{Fragment} from 'react';
import { Formik, Form, useField} from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props);  
  // console.log(useField(props),"usefield")
  console.log(field,"only filed");
  console.log(meta,"only meta")
  return (
    <Fragment>
      <TextField onFocus {...field} {...props} 
      label={label} 
      variant="outlined" 
      error={meta.touched && meta.error ? true : false}
      helperText={meta.touched && meta.error ? (<div className="error">{meta.error}</div>) : null}/>
      
    </Fragment>
  );
};


const SignupForm = () => {
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '' }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
      })}
      onSubmit={(values) =>{
        alert(JSON.stringify(values, null, 2));
      }}
    >
    <Container maxWidth="sm" component={Paper}>
    <h1>formik</h1>
      <Form>
          <div style={{marginTop:"20px"}}>
          <MyTextInput

              label="First Name"
              name="firstName"
              type="text"
              // placeholder="Jane"
              />
          </div>

          <div style={{marginTop:"20px"}}>
              <MyTextInput
              label="Last Name"
              name="lastName"
              type="text"
              // placeholder="Doe"
            />
          </div>
          
          <div style={{marginTop:"20px"}}>
          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            // placeholder="jane@formik.com"
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
      </Form>
      </Container>
    </Formik>
  );
};

export default SignupForm;