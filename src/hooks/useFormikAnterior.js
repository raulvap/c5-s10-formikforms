import { useFormik } from "formik";

function ComponentFormik() {
  // Clase 84: intro a formik
  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
    },
    validate: validate,

    onSubmit: (values) => console.log(values),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Nombre:</label>
      {/* <input
        name="name"
        placeholder="Nombre"
        type="text"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      Clase 88: Este input anterior lo podemos simplificar de la siguiente manera: */}
      <input
        type="text"
        placeholder="Nombre"
        {...formik.getFieldProps("name")}
      />
      {/* Clase 86: agregando los errores: */}
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name} </div>
      ) : null}
      <br />

      <label>Apellido:</label>
      <input
        type="text"
        placeholder="Apellido"
        {...formik.getFieldProps("lastname")}
      />
      {formik.touched.lastname && formik.errors.lastname ? (
        <div>{formik.errors.lastname} </div>
      ) : null}
      <br />
      <label>Correo electrónico:</label>
      <input
        placeholder="Correo electrónico"
        type="email"
        {...formik.getFieldProps("email")}
        // {formik.touched.email && formik.errors.email ?
        // <div>{formik.errors.email} </div> : null}
      />
      <br />
      <button type="submit">Enviar</button>
    </form>
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

  return errors;
};
