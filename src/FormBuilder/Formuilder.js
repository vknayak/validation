import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";
import MenuItem from '@material-ui/core/MenuItem';
export default function ForBuilderr ({list}){

      const { register, handleSubmit, errors, formState ,handleChange,handleBlur} = useForm({
        validationSchema: list[0].validation,
        mode:"onBlur",
        submitFocusError:false,
      });
      const onSubmit=(values) =>{
        console.log("hiiiiii")
        alert(JSON.stringify(values, null, 2));
      }
console.log(errors,"lllllllllll")
    return(
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {list.map(e=> e.type === "text" ?
            
            <div key={e.name } style={{marginTop:"20px"}}>
                <TextField  
                error={errors[e.name]? true : false}
                name={e.name} 
                label={e.labelText}
                inputRef={register} 
                helperText={errors[e.name] && errors[e.name].message} 
                variant="outlined"
                style={{minWidth:"28vw"}}
                />


            </div> : 

            e.type === "select" ?

            <div key={e.name} style={{marginTop:"20px"}}>


             <TextField
                name={e.name} 
                error={errors[e.name]? true : false}
                select
                defaultValue = {e.options[0]}
                onChange={handleChange}
                onBlur={handleBlur}
                label={e.labelText}
                helperText={ errors[e.name] && errors[e.name].message} 
                inputRef={register} 
                variant="outlined"
                style={{minWidth:"28vw"}}
              >
              <MenuItem  value="" >
                  select a state
                </MenuItem>
              {e.options.map((option) => (
                <MenuItem key={option} value={option} ref={register}>
                  {option}
                </MenuItem>
              ))}
              
              </TextField> 
            
              </div>

              : e.type === "date" ?
              
              <div key={e.name } style={{marginTop:"20px"}}>
              <TextField
                  error={errors[e.name]? true : false}
                  name={e.name}
                  label={e.labelText}
                  type={e.type}
                  helperText={errors[e.name] && errors[e.name].message} 
                  inputRef={register}
                  variant="outlined"
                  style={{minWidth:"28vw"}}
                />
                </div>
                : 

                e.type==="submit" ?

              <Button
              style = {{"marginTop":"10px","marginBottom":"10px",minWidth:"28vw"}}
              type={e.type}
              variant="contained"
              color="primary"
              >
              {e.name}
              </Button> 
              : ""
            
            )}
 
      </form>
      </div>
    )

}