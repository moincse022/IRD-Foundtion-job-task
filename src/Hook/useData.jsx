import React, { useEffect, useState } from 'react';

const useData = () => {
const [data,setData]=useState({});
const [isLoading,setIsLoading]=useState(true);
useEffect(()=>{
    fetch('/data.json')
    .then(res=>res.json())
    .then(data=>{
        setData(data)
        setIsLoading(false)
    })
    

},[])
console.log(data);
return [data,setData,isLoading];
};

export default useData;