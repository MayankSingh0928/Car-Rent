import axios from 'axios';
import { message } from 'antd';
export const userLogin=(reqObj)=>async dispatch=>{
    dispatch({type : 'LOADING', payload:true})
    try{
        const response = await axios.post('/api/users/login',reqObj)
        localStorage.setItem('user', JSON.stringify(response.data))
        message.success('Login Successfull');
        setTimeout(()=>{
            window.location.href='/'
        },1000);
        dispatch({type : 'LOADING', payload:false})

    }catch(error){
        console.log(error)
        message.error('Invalid Caredential')
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

export const userLoginAdmin=(reqObj)=>async dispatch=>{
    dispatch({type : 'LOADING', payload:true})
    try{
        const response = await axios.post('/api/users/loginadmin',reqObj)
        localStorage.setItem('user', JSON.stringify(response.data))
        message.success('Login Successfull');
        setTimeout(()=>{
            window.location.href='/admin'
        },1000);
        dispatch({type : 'LOADING', payload:false})

    }catch(error){
        console.log(error)
        message.error('Invalid Caredential')
        dispatch({type : 'LOADING', payload:false})


    }
}