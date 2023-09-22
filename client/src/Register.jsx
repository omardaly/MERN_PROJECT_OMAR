import React from 'react'
import { Select, Option } from "@material-tailwind/react";
import { useParams, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";


const Register = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className='ml-[40%] h-[4%]	'>
                <Card color="transparent" shadow={false}>

                    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <Typography variant="h4" color="green">
                            Sign Up
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            Enter your details to register.
                        </Typography>
                        <div className="mb-2 flex flex-col gap-6">
                            <div className='First Name  '>
                                <Typography
                                    variant="lg"
                                    color="black"
                                    className="flex items-center font-normal mb-2"
                                >
                                    First Name :

                                </Typography>

                                <Input size="lg" label="First Name" />

                            </div>
                            <div className='Last Name  '>
                                <Typography
                                    variant="lg"
                                    color="black"
                                    className="flex items-center font-normal mb-2"
                                >
                                    Last Name:

                                </Typography>

                                <Input size="lg" label="Last Name" />

                            </div>
                            <div className='Date Birth  '>
                                <Typography
                                    variant="lg"
                                    color="black"
                                    className="flex items-center font-normal mb-2"
                                >
                                    Date Birth :

                                </Typography>

                                <Input size="lg" label="Date Birth" type='date' />

                            </div>
                            <div className="flex w-50 flex-col gap-  ">

                                <Typography
                                    variant="lg"
                                    color="black"
                                    className="flex items-center font-normal "
                                >
                                    Gender:

                                </Typography>


                                <Select label="Select Version" black>
                                    <Option>Female</Option>
                                    <Option>Men</Option>
                                </Select>
                            </div>
                            <div className='Email'>
                                <Typography
                                    variant="lg"
                                    color="black"
                                    className="flex items-center font-normal "
                                >
                                    Email:

                                </Typography>

                                <Input size="lg" label="Email" />

                            </div>

                            <div className='Password'>
                                <Typography
                                    variant="lg"
                                    color="black"
                                    className="flex items-center font-normal "
                                >
                                    Password:

                                </Typography>

                                <Input type="password" size="lg" label="Password" />


                            </div>
                            <div className=' Confirm Password'>
                                <Typography
                                    variant="lg"
                                    color="black"
                                    className="flex items-center font-normal "
                                >
                                    Confirm Password:

                                </Typography>

                                <Input type="password" size="lg" label="Password" />


                            </div>


                        </div>
                        <div className='w-40	'>
                            <Checkbox
                                label={
                                    <Typography
                                        variant="small"
                                        color="gray"
                                        className="flex  font-normal "
                                    >
                                        Remember Me

                                    </Typography>
                                }
                                containerProps={{ className: "-ml-2.5" }}
                            />

                        </div>

                        <Button className="mt-4" fullWidth color='green'>
                            Sign Up
                        </Button>
                        <Typography color="gray" className="mt-4 text-center font-normal">
                            Already have an account?{" "}
                            <a href="#" className="font-medium text-green-300">
                                <Link to={'/Login'}>Login</Link>
                            </a>
                        </Typography>
                    </form>
                </Card>

            </div >


        </>
    )
}


export default Register