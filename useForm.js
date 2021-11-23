import { useState } from 'react';

export const useForm = (initialState = {})  => {
  
    const [values, setvalues] = useState(initialState);

    const reset= () =>{
        setvalues(initialState);
    }

    const handleInputChange = ({target}) => {
        console.log(target.name);
        setvalues({
            ...values,
            [target.name]:target.value
        });
    }

    return [values,handleInputChange,reset];
 }