import css from "./ContactForm.module.css"
import {useId} from "react"
import { Formik, Form, Field } from 'formik';



export default function ContactForm() {
  const idName = useId();
  const idNumber = useId();


  const handleSubmit = (values, actions) => {
		console.log(values);
		actions.resetForm();
	};

  return (
    <Formik initialValues={{name: "", number: ""}} onSubmit={handleSubmit}>
			<Form>
        <fieldset>
        <label htmlFor={idName}>Name</label>
        <Field type="text" name="name" id={idName} />
        <label htmlFor={idNumber}>Number</label>
				<Field type="text" name="number" id={idNumber}/>
				<button type="submit">Submit</button>
        </fieldset>
			</Form>
    </Formik>
  )
}

