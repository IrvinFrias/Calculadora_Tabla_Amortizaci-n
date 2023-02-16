import './input.css';
import {useField} from "formik";



const Input = ({label, ...props}) => {
    const [field, meta] = useField({...props})
    return(
        <>
            <label className="d-flex flex-column">
                <span className="fw-semibold mb-2">{label}</span>
                <input className="btn-outline-custom" {...field} {...props} type="text" />
            </label>
            {
                meta.touched && meta.error ?
                    <div className="error">{meta.error} hola</div> :null
            }
        </>


    )
}
export default Input