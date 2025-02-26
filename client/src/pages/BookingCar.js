import React, { useEffect, useState } from 'react';
import DefaultLayout from '../components/DefaultLayout';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from '../redux/actions/carsAction';
// import Spinner from '../components/spinner';
import { Row ,Col, Divider, DatePicker, Checkbox, Modal } from 'antd';
import { format, differenceInHours} from 'date-fns';
import { bookCar } from '../redux/actions/bookingActions';
import StripeCheckout from 'react-stripe-checkout';


const { RangePicker } = DatePicker
function BookingCar(){
    const { carid } = useParams();
    const {cars} = useSelector(state=>state.carsReducer)
    // const {loading} = useSelector(state=>state.alertsReducer)
    const[car , setcar] = useState({})
    const dispatch = useDispatch();
   const [from, setFrom] = useState(null);
    const [to, setTo] = useState(null);
    const[hoursDifference, setHoursDifference] = useState(0); // State to hold the result
    const[driver, setdriver] = useState(false)
    const[totalAmount, setTotalAmount] = useState(0);
    const [showModal, setShowModal] = useState(false);


    useEffect(()=>{
            dispatch(getAllCars())
            if(cars.length>0){
                setcar(cars.find(o=>o._id===carid))
            }
    },[cars, carid, dispatch]) //carid, dispatch to removed

    useEffect(()=>{
        setTotalAmount(prev => (hoursDifference * car.rentPerHour) + (driver ? 30 * hoursDifference : 0));
}, [driver, hoursDifference, car.rentPerHour]); //car.rentPerHour,totalAmount to be removed

    function selectTimeSlots(values){
      
        const startDate = new Date(values[0]);
        const endDate = new Date(values[1]);
    
        
        console.log(format(startDate, 'MMM dd yyyy HH:mm'));
        console.log(format(endDate, 'MMM dd yyyy HH:mm'));

        const hoursDiff = differenceInHours(endDate, startDate);
        console.log(`Difference in hours: ${hoursDiff}`);
        setHoursDifference(hoursDiff);
        setFrom(startDate);
        setTo(endDate);

        // Example calculation for total amount (adjust based on pricing logic)
        const hourlyRate = car?.ratePerHour || 0;
        setTotalAmount(hoursDiff * hourlyRate);
        
    }
    

    function onToken(token){
        const reqObj ={
            token,
            user : JSON.parse(localStorage.getItem('user'))._id,
            car : car._id,
            hoursDifference,
            totalAmount,
            driverRequired : driver,
            bookedTimeSlots : {
                from : format(from, 'yyyy-MM-dd HH:mm'),
                to : format(to, 'yyyy-MM-dd HH:mm')
            }
        }

        dispatch(bookCar(reqObj))
    }

    return(
        
        <DefaultLayout>
            {/* {loading === true && (<Spinner/>)} */}
            <Row justify="center" className='d-flex align-items-center' style={{minHeight: '90vh'}}>
                <Col lg={14} sm={24} xs={24} className='p-3'>
                    <img src={car.image} className='carimg2 bs1 w-100' alt="car Logo"/>
                </Col>
                <Col lg={9} sm={24} xs={24}>
                    <Divider type="horizontal" tvariant="dashed" style={{ borderColor: '#7cb305' }} dashed>Car Info</Divider>
                    <div style={{textAlign : 'right'}} >
                        <p>{car.name}</p>
                        <p> Rent Per Hour {car.rentPerHour}/-</p>
                        <p>Fuel Type : {car.fuelType}</p>
                        <p>Max Person :{car.capacity}</p>
                    </div>
                    <Divider type="horizontal" tvariant="dashed" style={{ borderColor: '#7cb305' }} dashed>Select Time Slots</Divider>
                    <RangePicker showTime={{format : 'HH:mm'}} format='MMM DD YYYY HH:mm' onChange={selectTimeSlots}/>
                    <br/>
                    <button className='btn1 mt-2' onClick={()=>{setShowModal(true)}}>See Booked Slots</button>
                    {
                        from && to && 
                        (
                            <div style={{textAlign : 'right'}}>
                                <p>Total Hours : <b>{hoursDifference}</b></p>
                                <p>Rent Per Hour :<b>{car.rentPerHour}</b> </p>
                                <Checkbox onChange={(e)=>{
                                    if (e.target.checked) {
                                        setdriver(true);
                                    }
                                    else{
                                        setdriver(false);
                                    }
                                }}>Driver Required</Checkbox>

                                <h3>Total Amount : {totalAmount}</h3>

                                <StripeCheckout 
                                shippingAddress 
                                token={onToken} 
                                currency='inr'
                                amount={totalAmount * 100}
                                stripeKey="pk_test_51Qo01UHOpEmURzPQmgd92NZkVQa0T2sLTTWEEwjsp5uueRYoEmoiRpAGHCk9zCRIxQh3MwGNDgk2jYngiVqeSpz800iJJMzGhA">

                                    <button className='btn1' >Book Now</button>

                                </StripeCheckout>

                            </div>
                        )
                    }
                </Col>
            </Row>
            
            {car.name && (
                <Modal visible={showModal} closable={false} footer={false} title="Booked time slots">
                    <div className="p-2">
                        {car.bookedTimeSlots.map((slot) => {
                            return (
                            <button className="btn1 mt-2">
                                {slot.from} - {slot.to}
                            </button>
                            );
                        })}

                        <div className="text-right mt-5">
                            <button className="btn1" onClick={() => { setShowModal(false);  }}>CLOSE</button>
                        </div>
                    </div>
                </Modal>
            )}
            
        </DefaultLayout>
    )
}

export default BookingCar