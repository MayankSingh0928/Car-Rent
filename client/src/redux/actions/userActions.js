import axios from 'axios';
import { message } from 'antd';

const showToast = (message, type = "success") => {
    const toast = document.createElement("div");
    toast.innerText = message;
    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.right = "20px";
    toast.style.background = type === "success" ? "green" : "red";
    toast.style.color = "white";
    toast.style.padding = "10px 20px";
    toast.style.borderRadius = "5px";
    toast.style.zIndex = "1000";
    document.body.appendChild(toast);
  
    setTimeout(() => {
      toast.style.opacity = "0";
      setTimeout(() => document.body.removeChild(toast), 500);
    }, 3000); // Auto-hide after 3 seconds
  };
export const userLogin=(reqObj)=>async dispatch=>{
    dispatch({type : 'LOADING', payload:true})
    try{
        const response = await axios.post('/api/users/login',reqObj)
        localStorage.setItem('user', JSON.stringify(response.data))
        showToast('Login successfully', 'success');
        setTimeout(()=>{
            window.location.href='/'
        },1000);
        dispatch({type : 'LOADING', payload:false})

    }catch(error){
        console.log(error)
        
        showToast('Something went wrong', 'error');
        dispatch({type : 'LOADING', payload:false})


    }
}

export const userRegister=(reqObj)=>async dispatch=>{
    dispatch({type : 'LOADING', payload:true})
    try{
        await axios.post('/api/users/register',reqObj)
        
        message.success('Registration Successfull');
        

        setTimeout(()=>{
            window.location.href='/login'

        },500);
        dispatch({type : 'LOADING', payload:false})

        

    }catch(error){
        console.log(error)
        dispatch({type : 'LOADING', payload:false})
        message.error('Something went wrong')


    }
}