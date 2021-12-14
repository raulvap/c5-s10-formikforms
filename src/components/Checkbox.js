import { useField } from "formik";

const Checkbox = ({ children, ...otherProps }) => {
  // Clase 93: componente custom de Checkbox

  // Hook de useFiel: le pasamos las props y el type para que sepa que es checkbox
  const [field, meta] = useField({ ...otherProps, type: "checkbox" });

  // console.log({ field, meta });

  return (
    <div>
      <label>
        <input type="checkbox" {...field} {...otherProps} />
        {children}
      </label>
      {meta.touched && meta.error ? <div>{meta.error} </div> : null}
    </div>
  );
};

export default Checkbox;
