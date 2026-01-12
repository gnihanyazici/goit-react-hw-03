import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";

const ContactForm = ({ onAdd }) => {
  const initialValues = {
    name: "",
    number: "",
  };

  // Validasyon Şeması
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    onAdd({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        <div className={s.fieldGroup}>
          <label htmlFor="name" className={s.label}>Name</label>
          <Field type="text" name="name" id="name" className={s.input} />
          <ErrorMessage name="name" component="span" className={s.error} />
        </div>

        <div className={s.fieldGroup}>
          <label htmlFor="number" className={s.label}>Number</label>
          <Field type="text" name="number" id="number" className={s.input} />
          <ErrorMessage name="number" component="span" className={s.error} />
        </div>

        <button type="submit" className={s.btn}>Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;