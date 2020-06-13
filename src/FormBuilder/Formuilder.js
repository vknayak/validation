import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  FormHelperText,
  Button, TextField,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Checkbox,
  FormGroup,
  Slider,
  Switch,
  Typography
} from "@material-ui/core";

import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import "date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

export default function ForBuilderr({ list }) {

  const { register, handleSubmit, errors, control, getValues, setValue } = useForm({
    validationSchema: list[0].validation,
    mode: "onBlur",
    submitFocusError: false,
    defaultValues: {
      switch: false,
    }
  });
  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  }

  // console.log(formState.touched,"lllllllllll")
  // const values = getValues();
  // console.log(values, "lllllllllll")
  // console.log(formState.touched,"lllllllllll")
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {list.map(e => e.type === "text" ?

          <section key={e.name} style={{ marginTop: "20px" }}>
            {console.log(e.customProps.variant, "variant")}
            <TextField
              variant={e.customProps.variant ? e.customProps.variant : "standard"}
              placeholder={e.customProps.placeholder ? e.customProps.placeholder : ""}
              label={e.customProps.label ? e.customProps.label : ""}
              error={errors[e.name] ? true : false}
              name={e.name}
              inputRef={register}
              helperText={errors[e.name] && errors[e.name].message}
            />
            {console.log({ ...e.customProps }, "cusssss")}

          </section> :

          e.type === "select" ?
            <section key={e.name} style={{ marginTop: "20px" }}>
              <FormControl
                error={Boolean(errors[e.name])}
                variant={e.customProps.variant ? e.customProps.variant : "standard"}
              >
                <InputLabel id={e.customProps.id ? e.customProps.id : ""}>{e.customProps.label ? e.customProps.label : ""}</InputLabel>
                <Controller
                  as={
                    <Select
                      id={e.customProps.id ? e.customProps.id : ""}
                      label={e.customProps.label ? e.customProps.label : ""}
                      style={{ minWidth: 222 }}
                    >

                      {e.options.map((option) =>
                        <MenuItem value={option}>
                          {option}
                        </MenuItem>
                      )}

                    </Select>
                  }
                  name={e.name}
                  control={control}
                  defaultValue=""
                />
                <FormHelperText>{errors[e.name] && errors[e.name].message}</FormHelperText>
              </FormControl>
            </section>

            : e.type === "date" ?
              <section>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container justify="space-around">
                    <FormControl
                      error={Boolean(errors[e.name])}
                      variant={e.customProps.variant ? e.customProps.variant : "standard"}
                    >
                      <Controller

                        as={<KeyboardDatePicker
                              variant="dialog"
                              label={e.customProps.label ? e.customProps.label : ""}
                        />}
                        name={e.name}
                        control={control}
                        format="MM/dd/yyyy"
                      />
                    </FormControl>
                  </Grid>
                </MuiPickersUtilsProvider>

              </section>
              :

              e.type === "radio" ?


                <FormControl component="fieldset" error={Boolean(errors[e.name])} style={{ marginTop: "20px" }}>
                  <FormLabel component="legend" >Gender</FormLabel>
                  <Controller
                    as={
                      <RadioGroup aria-label="gender">
                        {e.value.map((radiovalue, index) =>
                          <FormControlLabel
                            value={radiovalue[index]}
                            control={<Radio />}
                            label={radiovalue[index]}
                            labelPlacement="end"
                          />
                        )}
                      </RadioGroup>
                    }
                    name={e.name}
                    control={control}

                  />
                  <FormHelperText>{errors[e.name] && errors[e.name].message}</FormHelperText>
                </FormControl>


                :

                e.type === "checkbox" ?
                  <div>
                    <FormControl error={Boolean(errors[e.name])} >

                      <FormLabel component="legend" style={{ marginTop: "10px" }}>Hobbies</FormLabel>

                      <FormGroup >
                        {e.HObbies.map((boat, i) => {

                          return (

                            <FormCheckBox
                              key={boat.id}
                              name={e.name}
                              control={control}
                              setValue={setValue}
                              getValues={getValues}
                              value={boat.id}
                              register={register}
                              defaultValue={e.preselectedHObbies.some(p => p.id === boat.id)}
                            />
                          );
                        })}
                      </FormGroup>

                      <FormHelperText>{errors[e.name] && errors[e.name].message}</FormHelperText>
                    </FormControl>
                  </div>

                  :
                  e.type === "slider" ?


                    <FormControl style={{ width: "200px" }} error={Boolean(errors[e.name])}>

                      <FormLabel><Typography id="discrete-slider" gutterBottom>{e.name}</Typography></FormLabel>
                      <Controller
                        name={e.name}
                        control={control}
                        defaultValue={e.customProps.defaultValue ? e.customProps.defaultValue : 0}
                        onChange={([, value]) => value}
                        as={<Slider
                        valueLabelDisplay="auto" 
                        min={e.customProps.min && typeof(e.customProps.min ) === "number"  ? e.customProps.min : 0} 
                        max={e.customProps.max && typeof(e.customProps.max ) ? e.customProps.max : 0} 
                        step={e.customProps.step && typeof(e.customProps.step ) ? e.customProps.step : 1} />}
                      />
                    </FormControl>
                    :
                    e.type === "switch" ?
                      <section name="switch">
                        <FormControl error={Boolean(errors[e.name])}>


                          <Controller
                            as={<FormControlLabel
                              control={<Switch name="gilad" />}
                              label={e.labelText}
                            />}
                            type="checkbox"
                            control={control}
                            name="switch"
                          />



                        </FormControl>
                      </section>
                      : ""

        )}

        <div style={{ marginTop: "20px" }}>
          <Button
            style={{ "marginTop": "10px", "marginBottom": "10px" }}
            type="submit"
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )

}

export const FormCheckBox = ({
  name,
  value,
  register,
  defaultValue
}) => {
  return (
    <FormControlLabel
      control={<Checkbox defaultChecked={defaultValue} />}
      name={name}
      inputRef={register}
      value={value}
      label={value}
      labelPlacement="end"
    />
  );
};