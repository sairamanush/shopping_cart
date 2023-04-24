import React, {useEffect,useState} from 'react';

const UseCart=(operation)=>{
    const[count,setCartCount]=useState(0);
useEffect(()=>{

if(operation==="inc"){
    setCartCount(count++)
}
else{
    setCartCount(count--)
}
},[operation])
return [count]
}
export default UseCart