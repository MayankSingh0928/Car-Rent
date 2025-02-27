
import axios from 'axios';
import { message } from 'antd';


let cachedCars = null; // Cache to store car data and avoid multiple requests

export const getAllCars = () => async (dispatch, getState) => {
  if (cachedCars) {
    dispatch({ type: 'GET_ALL_CARS', payload: cachedCars });
    return;
  }

  dispatch({ type: 'LOADING', payload: true });

  try {
    const response = await axios.get('/api/cars/getallcars', {
      headers: {
        'Cache-Control': 'no-cache',
      },
    });

    if (response.status === 200) {
      cachedCars = response.data; // Store data in cache
      dispatch({ type: 'GET_ALL_CARS', payload: response.data });
    }
  } catch (error) {
    console.error('Error fetching cars:', error);
  } finally {
    dispatch({ type: 'LOADING', payload: false });
  }
};

export const addCar=(reqObj)=>async dispatch=>{

  dispatch({type: 'LOADING' , payload:true})

  try {
       await axios.post('/api/cars/addcar' , reqObj)
     
       dispatch({type: 'LOADING' , payload:false})
       message.success('New car added successfully')
       setTimeout(() => {
          window.location.href='/admin'
       }, 1000);
  } catch (error) {
      console.log(error)
      dispatch({type: 'LOADING' , payload:false})
  }
    
};

export const editCar=(reqObj)=>async dispatch=>{

  dispatch({type: 'LOADING' , payload:true})

  try {
       await axios.post('/api/cars/editcar' , reqObj)
     
       dispatch({type: 'LOADING' , payload:false})
       message.success('Car edited successfully')
       setTimeout(() => {
          window.location.href='/admin'
       }, 1000);
  } catch (error) {
      console.log(error)
      dispatch({type: 'LOADING' , payload:false})
  }
    
};

export const deleteCar=(reqObj)=>async dispatch=>{

  dispatch({type: 'LOADING' , payload:true})

  try {
       await axios.post('/api/cars/deletecar' , reqObj)
     
       dispatch({type: 'LOADING' , payload:false})
       message.success('Car deleted successfully')
       setTimeout(() => {
          window.location.reload()
       }, 1000);
  } catch (error) {
      console.log(error)
      dispatch({type: 'LOADING' , payload:false})
  }
    
};