import React from 'react';
import{Row,Col,Form,Input,Button} from 'antd'
import{Link} from 'react-router-dom'
import {useDispatch , useSelector} from 'react-redux'
import { userRegister } from '../redux/actions/userActions';
import Spinner from '../components/spinner';



function Register(){

    const dispatch = useDispatch()
    const {loading} = useSelector(state=>state.alertsReducer)
    function onFinish(values){
        dispatch(userRegister(values))
        console.log(values)

    }
    return(
        <div className='login'>
            {loading && (<Spinner/>)}
            <Row gutter={16}>
                
                    <Col lg={8}>

                    </Col>
                    <Col lg={8} className='text-center p-5'>
                        <Form layout='vertical' className='login-form p-5 center' onFinish={onFinish}>
                            
                            <h1>Registration</h1>
                            <hr/>
                            <Form.Item name="username" label="Username" rules={[{required: true, message: 'Please enter your username!' }]}>
                                <Input placeholder="Enter your username"/>
                            </Form.Item>
                            <Form.Item name="password" label="Password" rules={[{required: true, message: 'Please enter your password!' }]}>
                                <Input.Password placeholder="Enter your password" />
                            </Form.Item>
                            <Form.Item name="cpassword" label="Confirm Password" rules={[{required: true, message: 'Please confirm your password!' },
                            ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('Passwords do not match!'));
                                    },
                                }),
                            ]}>
                                <Input.Password placeholder="Confirm your password" />
                            </Form.Item>
                            <Button type="primary" htmlType="submit" className='btn mt-2 mb-3' disabled={loading}>Register</Button>                            <br/>

                            <Link to="/login">Click here to Login</Link>
                        </Form>
                    </Col>
                
                
            </Row>
        </div>
    )
}

export default Register