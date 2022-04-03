import { useField } from "formik"

const TextInput = (  {label, ...props} )  => {
    const [field, meta] = useField(props)

    // console.log({field,meta})

    return(
        <div>
            <label>{label}</label>
            <input {...field} {...props}/>
            {meta.touched && meta.error ? <div>{meta.error}</div> : null }
        </div>
    )
}

export default TextInput