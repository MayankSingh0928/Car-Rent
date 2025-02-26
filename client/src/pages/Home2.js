import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DefaultLayout from '../components/DefaultLayout';
// import HomeLayout from '../components/HomeLayout'
import { getAllCars } from '../redux/actions/carsAction';
import { Button, Row, Col, DatePicker } from "antd";
import Spinner from '../components/spinner';
import { Link } from "react-router-dom";
import { isAfter, isBefore, isEqual, isValid } from 'date-fns';

// const moment = require('moment');
// import { format, isValid, differenceInHours} from 'date-fns';


const { RangePicker } = DatePicker

function Home2(){
    const {cars} = useSelector(state=>state.carsReducer)
    const {loading} = useSelector(state=>state.alertsReducer)
    const [totalCars, setTotalcars] = useState([])
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getAllCars());
    }, [dispatch]); // ✅ Added dispatch to the dependency array
    
    useEffect(()=>{
        setTotalcars(cars)
    },[cars])

    function isBetween(dateToCheck, startDate, endDate) {
        return (
            (isAfter(dateToCheck, startDate) && isBefore(dateToCheck, endDate)) ||
            isEqual(dateToCheck, startDate) ||
            isEqual(dateToCheck, endDate)
        );
    }
    
    function setFilter(values) {
        if (!values || values.length !== 2 || !values[0] || !values[1]) {
            console.error('Invalid date values');
            return []; 
        }
    
        const selectedFrom = new Date(values[0]);
        const selectedTo = new Date(values[1]);
    
        if (!isValid(selectedFrom) || !isValid(selectedTo)) {
            console.error('Invalid time value detected for selected range');
            return []; 
        }
    
        const temp = []; // Keep as const since we're pushing elements
    
        for (const car of cars) {
            if (car.bookedTimeSlots.length === 0) {
                temp.push(car); // Fix: Use push instead of assignment
            } else {
                for (const booking of car.bookedTimeSlots) {
                    const bookingFrom = new Date(booking.from);
                    const bookingTo = new Date(booking.to);
    
                    if (
                        isBetween(selectedFrom, bookingFrom, bookingTo) ||
                        isBetween(selectedTo, bookingFrom, bookingTo) ||
                        isBetween(bookingFrom, selectedFrom, selectedTo) ||
                        isBetween(bookingTo, selectedFrom, selectedTo)
                    ) {
                        continue; // Skip conflicting cars
                    } else {
                        temp.push(car);
                    }
                }
            }
        }
    
        setTotalcars(temp);
    }
    
                
    
    return(
        <DefaultLayout>
            <div className='home2'>
                <Row className='mt-5' justify={'center'}>
                    <Col lg ={20} sm={24} className='d-flex justify-content-left'>

                        <RangePicker showTime={{format : 'HH:mm'}} format='MMM DD YYYY HH:mm' onChange={setFilter}/>
                    
                    </Col>
                </Row>

                {loading === true && (<Spinner/>)}
                
                <Row justify="center" gutter={[16, 16]}>
                    {totalCars.map((car) => {
                        return (
                            <Col lg={6} md={8} sm={12} xs={24} key={car._id}>
                                <div className='car p-2 bs1'>
                                    <img src={car.image} className='carimg' alt={car.name} />
                                    <div className='car-content d-flex align-items-center justify-content-between'>
                                        <div style={{ textAlign: "left" }}>
                                            <p>{car.name}</p>
                                            <p>Rent Per Hour {car.rentPerHour}/-</p>
                                        </div>
                                        <div>
                                            <Button className='btn1 mr-2'>
                                                <Link to={`/booking/${car._id}`}>Book Now</Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        );
                    })}
                </Row>

            </div>
        </DefaultLayout>
    )
}

export default Home2