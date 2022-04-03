//formik  component
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextInput from "./components/TextInput";
import Checkbox from "./components/Checkbox";
import Select from "./components/Select";

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Requerido";
  } else if (values.name.length < 5) {
    errors.name = "El nombre no puede ser menor a 5 letras";
  }

  if (!values.lastname) {
    errors.lastname = "Requerido";
  } else if (values.lastname.length < 5) {
    errors.lastname = "El apellido no puede ser menor a 5 letras";
  }

  return errors;
};

function App() {
  return (
    <Formik
      initialValues={{ name: '', lastname: "", email: '', tipo:'' }}
      validate={validate}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <TextInput name="name" label="Nombre" />      
        <br />

        <TextInput name="lastname" label="Apellido" />
        <br />

        <TextInput name="email" label="Correo" />
        <br />
        <Select label="Tipo" name="tipo">
          <option value="">Seleccione</option>
          <option value="luffy">Luffy</option>
          <option value="zoro">Zoro</option>
         </Select>
        <Checkbox name="accept">Aceptar</Checkbox>

        <button type="submit">Enviar</button>

      </Form>
    </Formik>
  );
}

export default App;

//formik no component - Hook

// import {  useFormik } from "formik";

// const validate = (values)=>{

//     const errors = {}

//     if (!values.name) {
//       errors.name = "Requerido"
//     }else if (values.name.length < 5){
//       errors.name = "El nombre no puede ser menor a 5 letras"
//     }

//     if (!values.lastname) {
//       errors.lastname = "Requerido"
//     }else if (values.lastname.length < 5){
//       errors.lastname = "El apellido no puede ser menor a 5 letras"
//     }

//     return errors;
//   }

// function App() {
//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       lastname: "",
//       email: "",
//     },
//     validate,
//     onSubmit: (values) => console.log(values),
//   });

//   return (
//     <form onSubmit={formik.handleSubmit}>

//       <label>Nombre</label>
//       <input type="text" {...formik.getFieldProps('name')}/>
//       {formik.touched.name && formik.errors.name ?
//       <div> {formik.errors.name} </div> :null }
//       <br />

//       <label>Apellido</label>
//       <input type="text" {...formik.getFieldProps('lastname')}/>
//         {formik.touched.lastname && formik.errors.lastname ? <div> {formik.errors.lastname} </div> :null }
//       <br />

//       <label>Email</label>
//       <input type="text" {...formik.getFieldProps('email')}/>
//        {formik.touched.email && formik.errors.email ?
//        <div> {formik.errors.email} </div> :null }
//       <br />
//       <button type="submit">Enviar</button>
//     </form>
//   );
// }

// export default App;
