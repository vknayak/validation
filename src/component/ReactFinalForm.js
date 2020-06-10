import React ,{ Component } from 'react'
import { Form, Field } from 'react-final-form'
import { TextField} from '@material-ui/core';
import { Button }from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))


const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

class ReactFinalForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data:{},
           lastName: 'nayak',
          firstName: 'kumar',
          email:""
    }
  }

  render() {
    const requiredName = value => (value ? undefined : 'Required')
    const requiredEmail = value => (value && value.includes("." && "@") ? undefined : "Please include an '@' in your email address and include type of your mail")

    return (
      <div>
            <Container maxWidth="lg" component={Paper}>
            <Typography component="h1" variant="h5">React final from</Typography>
        <Form
          onSubmit={onSubmit}
          initialValues={this.state}
          render={({ handleSubmit, pristine, form, submitting, values }) => {
            return (
              <form onSubmit={handleSubmit}>
                {this.state.loading && <div className="loading" />}
                <div style={{marginTop:"20px"}}>
                  
                  <Field
                    name="firstName"
                    component={TextField}
                    placeholder="Username"
                    label="firstName"
                    variant="outlined"
                    validate={requiredName}
                  />
                </div>
                <div style={{marginTop:"20px"}}>
                <Field
                name="lastName"
                component={TextField}
                placeholder="lastName"
                label="lastName"
                variant="outlined"
                validate={requiredName}
                
              />
                </div>

                <div style={{marginTop:"20px"}}>
                <Field
                name="email"
                component={TextField}
                placeholder="email"
                label="email"
                variant="outlined"
                type="email"
                validate={requiredEmail}
              />
                </div>
                <div className="buttons" style={{marginTop:"20px"}}>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                >
                Submit
              </Button>
                </div>
              
              </form>
            )
          }}
        />
        </Container>
      </div>
    )
  }
}

export default ReactFinalForm;
