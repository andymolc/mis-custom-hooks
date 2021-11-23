import { useEffect, useRef, useState } from 'react'

export const useFetch = (url) => {
    
    const isMounted = useRef(true)

    const [state, setState] = useState({data:null,loadding:true,error:null});

    useEffect( ()=>{
        return() => {
            isMounted.current = false;
        }
    },[])

    useEffect( ()=>{

        setState({data:null,loadding:true,error:null});

        fetch(url)
            .then( resp => resp.json())
            .then( data => {

                // setTimeout(() => {
                    if(isMounted.current){

                        setState ({
                            loadding:false,
                            error:null,
                            data
                        })
                    }
                    else{
                        console.log('No se llamo');
                    }
                // }, 4000);
            });
    },[url])
    return state;
 }