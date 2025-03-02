import axios from 'axios';
import { message } from 'antd';

export const bookCar = (reqObj) => async (dispatch) => {
  dispatch({ type: 'LOADING', payload: true });

  try {
    await axios.post('/api/bookings/bookcar', reqObj);
    dispatch({ type: 'LOADING', payload: false });
    message.success('Your car booked successfully');
    setTimeout(() => {
      window.location.href='/userbookings';
    }, 1000);
  } catch (error) {
    console.error(error);
    dispatch({ type: 'LOADING', payload: false });
    message.error('Please try later');
  }
};

export const getAllBookings = () => async (dispatch) => {
  dispatch({ type: 'LOADING', payload: true });

  try {
    const response = await axios.get('/api/bookings/getallbookings', {
      headers: {
        'Cache-Control': 'no-cache',
      },
    });

    if (response.status === 200) {
      dispatch({ type: 'GET_ALL_BOOKINGS', payload: response.data });
    }
  } catch (error) {
    console.error('Error fetching Bookings:', error);
    message.error('Failed to fetch bookings');
  } finally {
    dispatch({ type: 'LOADING', payload: false });
  }
};

export const deleteBooking = (bookingId) => async (dispatch) => {
  dispatch({ type: 'LOADING', payload: true });

  try {
    await axios.post('/api/bookings/deletebooking', { bookingId });
    message.success('Booking deleted successfully');
    await dispatch(getAllBookings()); // Ensure bookings refresh after deletion
  } catch (error) {
    console.error('Error deleting booking:', error);
    message.error('Failed to delete booking. Please try again later.');
  } finally {
    dispatch({ type: 'LOADING', payload: false });
  }
};
