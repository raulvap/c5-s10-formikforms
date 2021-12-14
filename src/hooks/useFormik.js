import { Formik, Form, Field, ErrorMessage } from "formik";
import TextInput from "../components/TextInput";
import Checkbox from "../components/Checkbox";
import Select from "../components/Select";
import Radio from "../components/Radio";

function ComponentFormik() {
  // Clase 89: componente de Formik, hacemos los cambios desde el anterior:

  return (
    <Formik
      initialValues={{
        name: "",
        lastname: "",
        email: "",
        radio: "",
      }}
      validate={validate}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        {/* Clase 92: componentes custom con el componenet useField */}
        <TextInput name="name" label="Nombre" placeholder="Nombre" />
        {/* <label>Nombre:</label> */}
        {/* Clase 90: componentes de Field y ErrorMessage */}
        {/* <Field name="name" type="text" placeholder="Nombre" /> */}
        {/* <ErrorMessage name="name" /> */}
        <br />

        <label>Apellido:</label>
        <Field name="lastname" type="text" placeholder="Apellido" />
        <ErrorMessage name="lastname" />
        <br />

        <label>Correo electrónico:</label>
        <Field name="email" type="email" placeholder="Correo electrónico" />
        <ErrorMessage name="email" />
        <br />
        <Select label="Tipo de Celular" name="mobile">
          <option value="default">Seleccionar opción</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Select>
        <Radio label="Azul" value="blue" name="radio" />
        <Radio label="Rojo" value="red" name="radio" />
        <Radio label="Amarillo" value="yellow" name="radio" />
        <ErrorMessage name="radio" />
        <Checkbox name="accept">Aceptar términos y condiciones</Checkbox>
        <button type="submit">Enviar</button>
      </Form>
    </Formik>
  );
}

export default ComponentFormik;

// Clase 86: validando la información
const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "El nombre es requerido";
  } else if (values.name.length < 5) {
    errors.name = "El nombre debe ser mayor a 5 caracteres";
  }

  if (!values.lastname) {
    errors.lastname = "El apellido es requerido";
  } else if (values.name.length < 5) {
    errors.name = "El apellido debe ser mayor a 5 caracteres";
  }

  if (!values.radio) {
    errors.radio = "Debes seleccionar una opción";
  }

  return errors;
};
