import axios from 'axios';
import { message } from 'antd';

export const bookCar = (reqObj) => async (dispatch) => {
  dispatch({ type: 'LOADING', payload: true });

  try {
    await axios.post('/api/bookings/bookcar', reqObj);
    dispatch({ type: 'LOADING', payload: false });
    message.success('Your car booked successfully');
    setTimeout(() => {
      window.location.href='/userbookings'
    }, 1000);
  } catch (error) {
    console.log(error);
    dispatch({ type: 'LOADING', payload: false });
    message.success('Please try later')
  }
};
let cachedCars = null; // Cache to store car data and avoid multiple requests

export const getAllBookings = () => async (dispatch, getState) => {
  if (cachedCars) {
    dispatch({ type: 'GET_ALL_BOOKINGS', payload: cachedCars });
    return;
  }

  dispatch({ type: 'LOADING', payload: true });

  try {
    const response = await axios.get('/api/bookings/getallbookings', {
      headers: {
        'Cache-Control': 'no-cache',
      },
    });

    if (response.status === 200) {
      cachedCars = response.data; // Store data in cache
      dispatch({ type: 'GET_ALL_BOOKINGS', payload: response.data });
    }
  } catch (error) {
    console.error('Error fetching Booking:', error);
  } finally {
    dispatch({ type: 'LOADING', payload: false });
  }
};
