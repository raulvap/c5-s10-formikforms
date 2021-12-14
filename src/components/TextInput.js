import { useField } from "formik";

export default function TextInput({ label, placeholder, ...otherProps }) {
  // Clase 92: componentes customizados

  const [field, meta] = useField(otherProps);

  //   console.log({ field, meta });

  return (
    <div>
      <label>{label} </label>
      <input {...field} placeholder={placeholder} />
      {meta.touched && meta.error ? <div>{meta.error} </div> : null}
    </div>
  );
}
