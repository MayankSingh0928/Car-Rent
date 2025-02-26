import React, { useEffect, useState } from 'react'
import DefaultLayout from '../components/DefaultLayout'
import { useParams } from 'react-router-dom';
import { Col , Row , Form , Input} from 'antd'
import { useDispatch , useSelector } from 'react-redux'
import Spinner from '../components/spinner'
import { getAllCars, editCar } from '../redux/actions/carsAction'


function EditCar() {

    const {cars} = useSelector(state=>state.carsReducer)
    const { carid } = useParams();
    const dispatch = useDispatch()
    const {loading} = useSelector(state=>state.alertsReducer)
    const [car, setcar] = useState()
    const [totalcars, settotalcars] = useState([]);

    useEffect(() => {
        if (cars.length === 0) {
            dispatch(getAllCars());
        } else {
            settotalcars(cars);
            const selectedCar = cars.find(o => o._id === carid);
            if (selectedCar && selectedCar !== car) {
                setcar(selectedCar);
            }
        }
    }, [cars, carid, dispatch, car]); // ✅ Added all required dependencies
    
    

    function onFinish(values){

        values._id = car._id;
        
        dispatch(editCar(values))
        console.log(values)
   }
    return(
        <DefaultLayout>

            {loading && (<Spinner />)}

            <Row justify='center mt-5'>
                <Col lg={12} sm={24} xs={24} className='p-2'>

                    {totalcars.length > 0 && (
                        <Form initialValues={car}  className='bs1 p-2' layout='vertical' onFinish={onFinish}>
                        <h3>Edit Car Details</h3>
                        <hr />
                        <Form.Item name='name' label='Car name' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='image' label='Image url' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='rentPerHour' label='Rent per hour' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='capacity' label='Capacity' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='fuelType' label='Fuel Type' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>

                           <div className='text-right'>
                                <button className='btn1'>EDIT CAR</button>
                           </div>
                    </Form>
                    )}
                
                </Col>
            </Row>
        </DefaultLayout>
    )
}

export default EditCar