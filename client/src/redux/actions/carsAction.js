
import axios from 'axios';


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
       showToast('New car added successfully','success')
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
       showToast('Car edited successfully','success')
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
       showToast('Car deleted successfully','success')
       setTimeout(() => {
          window.location.reload()
       }, 1000);
  } catch (error) {
      console.log(error)
      dispatch({type: 'LOADING' , payload:false})
  }
    
};