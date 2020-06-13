import * as yup from "yup";


const schema = yup.object().shape({
  firstName: yup.string()
            .required('Required')
            .max(15, 'Must be 15 characters or less'),
  email:yup.string()
        .email('Invalid email address')
        .required('Required'),
  state:yup.string()
      .oneOf(["Haryana","Chandigarh","Himachal Pradesh","other"],'please select one')
      .required('Required'),
  date: yup
        .date()
        .typeError('required'),
  Gender:yup.string()
        .oneOf(["male","female"],"please select gender")
        .required("required"),

  Hobbies: yup.array()
        .transform(function(o, obj) {
          return o.filter(o =>o);
        })
        .min(2, "please select two options")
        .required('required'),
  Age:yup.number().required('required'),
  switch:yup.boolean().required()

});



const data = [
  {
    "validation": schema,
  },

    {
      "name": "firstName",
      "type": "text",
      "customProps":{variant:"outlined",id:"",defaultValue:"",placeholder:"kumar",label:"First Name"}
    },
    {
      "name": "email",
      "type": "text",
      "customProps":{variant:"outlined",id:"",defaultValue:"",placeholder:"kumar19@navgurukul.org",label:"Email"}
    },
      {
      "name": "state",
      "type": "select",
      "options": [
        "Haryana",
        "Chandigarh",
        "Himachal Pradesh",
        "other"
      ],
      "customProps":{variant:"outlined",id:"",label:"select a State"}
    },
    {
      "name": "date",
      "type": "date",
      "customProps":{variant:"outlined",id:"",label:"pick a Date"}
    },
    {
      name:"Gender",
      value:[{0:"male"},{1:"female"}],
      type:"radio"
    },
    {
      name:"Hobbies",
      HObbies : [{ id: "cricet" }, { id: "volleyball" }, { id: "chess" }, { id: "coding" }],
      preselectedHObbies : [],
      type:"checkbox",
    },
    {
      name:"Age",
      type:"slider",
      "customProps":{defaultValue:18,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:null,min:17
      ,max:24 }
    },
    {
      name:"switch",
      type:"switch",
      labelText:"Mui Switch",
    }
]

export default data;