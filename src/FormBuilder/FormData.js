import * as yup from "yup";


const schema = yup.object().shape({
  firstName: yup.string()
            .required('Required')
            .max(15, 'Must be 15 characters or less'),
  email:yup.string()
        .email('Invalid email address')
        .required('Required'),
  state:yup.string()
      .oneOf(["Haryana","Chandigarh","Himachal Pradesh","other"])
      .required('Required'),
  date: yup
        .date()
        .typeError('required'),
});


const data = [

    {
      "name": "firstName",
      "type": "text",
      "validation":schema,
      "labelText": "First Name",
    },
    {
      "name": "email",
      "type": "text",
      "validation":schema,
      "labelText": "email",
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
      "validation": "<yup code comes here>",
      "labelText": "state"
    },
    {
      "name": "date",
      "type": "date",
      "validation": "<yup code comes here>",
      "labelText": "Date",
    },
    {
      name:"submit",
      type:"submit"
    }
]

export default data;