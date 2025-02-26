import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DefaultLayout from '../components/DefaultLayout';
import { deleteCar, getAllCars } from '../redux/actions/carsAction';
import { Row, Col, Button } from "antd";
import Spinner from '../components/spinner';
import { Link } from "react-router-dom";
// import { format,  isValid } from 'date-fns';
// import { isAfter, isBefore, isEqual } from 'date-fns';
import { DeleteOutlined, EditOutlined  } from '@ant-design/icons';
import { Popconfirm } from "antd";



// const moment = require('moment');
// import { format, isValid, differenceInHours} from 'date-fns';


// const { RangePicker } = DatePicker

function AdminHome(){
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

    // function isBetween(dateToCheck, startDate, endDate) {
    //     return (
    //         (isAfter(dateToCheck, startDate) && isBefore(dateToCheck, endDate)) ||
    //         isEqual(dateToCheck, startDate) ||
    //         isEqual(dateToCheck, endDate)
    //     );
    // }
               
    
    return(
        <DefaultLayout>
            <Row justify="center" gutter={16} className="mt-2">
                <Col lg={20} sm={24}>
                    <div className="d-flex justify-content-between align-items-center">
                        <h3 className="mt-1 mr-2"><b>Admin Panel</b></h3>
                        <Button className='btn1 mr-2'><Link to={`/addcar`}><b>ADD CAR</b></Link>
                        </Button>
                    </div>
                </Col>
            </Row>

            {loading === true && (<Spinner/>)}
            <Row justify="center" gutter={16} >
                {totalCars.map(car=>{
                    return <Col lg={5} sm={24} xs={24}>
                        <div className='car p-2 bs1'>
                            <img src = {car.image} className='carimg' alt='img'/>
                            <div className='car-content d-flex align-item-center justify-content-between'>
                                <div style={{textAlign : "left"}}>
                                    <p>{car.name}</p>
                                    <p> Rent Per Hour {car.rentPerHour}/-</p>
                                </div>
                                <div className='mr-4 mt-3'>
                                    <Link to={`/editcar/${car._id}`}><EditOutlined className='mr-3'style={{color:'green', cursor:'pointer'}}/></Link>
                                    <Popconfirm title="Are you sure to delete this car?" onConfirm={()=>{
                                        dispatch(deleteCar({
                                            carid : car._id
                                        }))}} okText="Yes" cancelText="No">
                                        <DeleteOutlined
                                            style={{ color: "red", cursor: "pointer" }}
                                        />
                                    </Popconfirm>
                                </div>
                            </div>
                        </div>
                    </Col>
                })}
            </Row>
        </DefaultLayout>
    )
}

export default AdminHome