import css from "./SearchBox.module.css"
import {useId} from "react"
import { Formik, Form, Field } from 'formik';
export default function SearchBox() {

const idSearch = useId();
  return (
  <Formik>
    <Form>
      <label htmlFor="idSearch">Find contacts by name</label>
      <Field  type="text" name="search" id={idSearch} ></Field>
    </Form>
  </Formik>
  )
}

