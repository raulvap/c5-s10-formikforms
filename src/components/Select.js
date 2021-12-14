import { useField } from "formik";

export default function Select({ label, ...otherProps }) {
  // Clase 94: creando un custom select con hook useField. Children va en otherProps

  const [field, meta] = useField(otherProps);

  //   console.log({ field, meta });

  return (
    <div>
      <label>{label} </label>
      <select {...field} {...otherProps} />
      {meta.touched && meta.error ? <div>{meta.error} </div> : null}
    </div>
  );
}
