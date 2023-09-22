import React from 'react'

import { Select, Option } from "@material-tailwind/react";

import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";


const Login = () => {
    return (
        <>
            <div className='ml-[40%] h-[4%]	'>
                <Card color="transparent" shadow={false}>

                    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <Typography variant="h4" color="green">
                            Login
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            Enter your details to register.
                        </Typography>
                        <div className="mb-2 flex flex-col gap-6">
                            <Input size="lg" label="Email" />
                            <Input type="password" size="lg" label="Password" />
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
                            Login
                        </Button>

                    </form>
                </Card>

            </div >


        </>
    )
}

export default Login