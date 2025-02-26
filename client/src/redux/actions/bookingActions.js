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

export const bookCar = (reqObj) => async (dispatch) => {
  dispatch({ type: 'LOADING', payload: true });

  try {
    await axios.post('/api/bookings/bookcar', reqObj);
    dispatch({ type: 'LOADING', payload: false });
    showToast('Your car booked successfully', 'success');
    setTimeout(() => {
      window.location.href='/userbookings'
    }, 500);
  } catch (error) {
    console.log(error);
    dispatch({ type: 'LOADING', payload: false });
    showToast('Please try later', 'error');
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
