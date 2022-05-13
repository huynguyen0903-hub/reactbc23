import {useState}   from 'react';


//Custom Hooks không return về giao diện mà chỉ return về data
export default function useForm(initialValues) {
    const [values, setValues] = useState(initialValues)

    const handleChange = (evt) => {
        const { name, value} = evt.target;
        
        setValues({
            ...values,
            [name]: value, 
        })
    };
    
  return {values, handleChange};
}

// const {} = UseForm({

// })
