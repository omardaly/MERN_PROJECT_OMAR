import React from 'react'
import '../../public/css/tailwind.css'
import { Select, Option } from "@material-tailwind/react";

import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";


const PostAdd = () => {
    return (
        <>
            <div className='ml-[40%] h-[4%]	'>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 ">

                    <Card color="transparent" shadow={false}>
                        <Typography variant="h4" color="blue-gray">
                            Add your Home
                        </Typography>
                        <div className="mb-4 flex flex-col gap-6 ">
                            <div className='adresse  '>
                                <Typography
                                    variant="lg"
                                    color="black"
                                    className="flex items-center font-normal mb-5"
                                >
                                    Adresse :

                                </Typography>

                                <Input size="lg" label="Adress" />

                            </div>
                            <div>
                                <div className="flex w-50 flex-col gap-6  ">
                                    <Typography
                                        variant="lg"
                                        color="black"
                                        className="flex items-center font-normal "
                                    >
                                        Accomodation:

                                    </Typography>


                                    <Select label="Select Version" black>
                                        <Option>Material Tailwind HTML</Option>
                                        <Option>Material Tailwind React</Option>
                                        <Option>Material Tailwind Vue</Option>
                                        <Option>Material Tailwind Angular</Option>
                                        <Option>Material Tailwind Svelte</Option>
                                    </Select>
                                </div>

                            </div>
                            <div className='adresse  '>
                                <Typography
                                    variant="lg"
                                    color="black"
                                    className="flex items-center font-normal mb-5"
                                >
                                    SurFace (m2) :

                                </Typography>

                                <Input size="lg" label="SurFace" />

                            </div>
                            <div className="flex w-50 flex-col gap-6  ">
                                <Typography
                                    variant="lg"
                                    color="black"
                                    className="flex items-center font-normal "
                                >
                                    Number Of Bedrooms:

                                </Typography>


                                <Select label="Select Version" black>
                                    <Option>1</Option>
                                    <Option>2</Option>
                                    <Option>3</Option>
                                    <Option>4</Option>
                                    <Option>5+</Option>
                                </Select>
                            </div>
                            <div className="flex w-50 flex-col gap-6  ">
                                <Typography
                                    variant="lg"
                                    color="black"
                                    className="flex items-center font-normal "
                                >
                                    Furnished:

                                </Typography>


                                <Select label="Select Version" black>
                                    <Option>yes</Option>
                                    <Option>no</Option>

                                </Select>
                            </div>
                            <div className='CheckBox flex '>
                                <Typography
                                    variant="lg"
                                    color="black"
                                    className="flex items-center font-normal "
                                >
                                    Rules:

                                </Typography>

                                <div>

                                    <Checkbox
                                        label={
                                            <Typography
                                                variant="small"
                                                color="gray"
                                                className="flex items-center font-normal"
                                            >
                                                Wemen only

                                            </Typography>
                                        }
                                        containerProps={{ className: "-ml-2.5" }}

                                    />
                                    <Checkbox
                                        label={
                                            <Typography
                                                variant="small"
                                                color="gray"
                                                className="flex items-center font-normal"
                                            >
                                                Men Only

                                            </Typography>
                                        }
                                        containerProps={{ className: "-ml-2.5" }}

                                    />


                                </div>
                                <div>
                                    <Checkbox
                                        label={
                                            <Typography
                                                variant="small"
                                                color="gray"
                                                className="flex items-center font-normal"
                                            >
                                                Smoker Welcome

                                            </Typography>
                                        }
                                        containerProps={{ className: "-ml-2.5" }}

                                    />
                                    <Checkbox
                                        label={
                                            <Typography
                                                variant="small"
                                                color="gray"
                                                className="flex items-center font-normal"
                                            >
                                                Pets Welcome

                                            </Typography>
                                        }
                                        containerProps={{ className: "-ml-2.5" }}

                                    />


                                </div>


                            </div>

                            <div className='Rent '>
                                <Typography
                                    variant="lg"
                                    color="black"
                                    className="flex items-center font-normal mb-5"
                                >
                                    Rent (with Charges) :

                                </Typography>

                                <Input type='number' size="lg" label="" />

                            </div>
                            <div className='Rent '>
                                <Typography
                                    variant="lg"
                                    color="black"
                                    className="flex items-center font-normal mb-5"
                                >
                                    Deposit :

                                </Typography>

                                <Input type='number' size="lg" label="" />

                            </div>
                            <div className='CheckBox  '>
                                <Typography

                                    className="flex items-center font-normal "
                                >
                                    Ameneties:

                                </Typography>
                                <div >
                                    <div className='flex'>

                                        <Checkbox
                                            label={
                                                <Typography
                                                    variant="small"
                                                    color="gray"
                                                    className="flex items-center font-normal"
                                                >
                                                    AC

                                                </Typography>
                                            }
                                            containerProps={{ className: "-ml-2.5" }}

                                        />
                                        <Checkbox
                                            label={
                                                <Typography
                                                    variant="small"
                                                    color="gray"
                                                    className="flex items-center font-normal"
                                                >
                                                    Wifi

                                                </Typography>
                                            }
                                            containerProps={{ className: "-ml-2.5" }}

                                        />
                                        <Checkbox
                                            label={
                                                <Typography
                                                    variant="small"
                                                    color="gray"
                                                    className="flex items-center font-normal"
                                                >
                                                    Balcony

                                                </Typography>
                                            }
                                            containerProps={{ className: "-ml-2.5" }}
                                        />

                                        <Checkbox
                                            label={
                                                <Typography
                                                    variant="small"
                                                    color="gray"
                                                    className="flex items-center font-normal"
                                                >
                                                    Parking

                                                </Typography>
                                            }
                                            containerProps={{ className: "-ml-2.5" }}

                                        />





                                    </div>
                                    <div className='flex'>
                                        <Checkbox
                                            label={
                                                <Typography
                                                    variant="small"
                                                    color="gray"
                                                    className="flex items-center font-normal"
                                                >
                                                    Garden

                                                </Typography>
                                            }
                                            containerProps={{ className: "-ml-2.5" }}

                                        />
                                        <Checkbox
                                            label={
                                                <Typography
                                                    variant="small"
                                                    color="gray"
                                                    className="flex items-center font-normal"
                                                >
                                                    Garage

                                                </Typography>
                                            }
                                            containerProps={{ className: "-ml-2.5" }}

                                        />
                                        <Checkbox
                                            label={
                                                <Typography
                                                    variant="small"
                                                    color="gray"
                                                    className="flex items-center font-normal"
                                                >
                                                    Washing Machine

                                                </Typography>
                                            }
                                            containerProps={{ className: "-ml-2.5" }}

                                        />


                                    </div>


                                </div>



                            </div>
                        </div>


                        <Button className="mt-6" fullWidth color='green'>
                            Submit
                        </Button>


                    </Card>
                </form>
            </div >

        </>
    )
}

export default PostAdd