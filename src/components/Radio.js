import { useField } from "formik";

export default function Radio({ label, ...otherProps }) {
  // Clase 95: component custom de Radio

  const [field] = useField({ ...otherProps, type: "radio" });

  return (
    <div>
      <label>
        <input type="radio" {...field} {...otherProps} />
        {label}
      </label>
    </div>
  );
}
