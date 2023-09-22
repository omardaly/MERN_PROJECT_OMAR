import React from 'react'
import '../../public/css/tailwind.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import {
    Card,
    CardHeader,
    CardBody,
    Navbar,
    MobileNav,
    CardFooter,
    Input,
    Avatar,
    Typography,
    Button,
    Tooltip,
    IconButton,
} from "@material-tailwind/react";

import './Nav.css'


const Home = () => {
    const navigate = useNavigate()


    return (
        <>

            <div >


                <div className="relative  h-screen content-center items-center justify-center pt-7 pb-32">


                    <div className="absolute top-0 h-full w-full bg-[url('https://media.istockphoto.com/id/184337065/photo/college-roomate-friends-working-and-studying-together-in-apartment-dorm.jpg?s=2048x2048&w=is&k=20&c=6Xh4PMeFkri4piqB0VH_-Q6Ooqtcz0zmwLNOag2Sx6M=')] bg-cover bg-center" />
                    <div className="absolute top-0 h-full w-full bg-black/20 bg-cover bg-center" />

                    <div>
                        <div className="max-w-4xl container relative mx-auto">
                            <div className="mt-[30%]" >
                                <h1 className="text-6xl font-extrabold text-white mb-60 ml-[20%] ">Find Home Together</h1>
                                <form className="flex items-center ">
                                    <div className="relative flex w-full gap-2 md:w-max" >
                                        <Input
                                            type="search"
                                            label="Type here..."
                                            color="white"
                                            className="pr-20"
                                            containerProps={{
                                                className: "min-w-[750px] ml-20",
                                            }}
                                        />
                                        <Button size="sm" className="!absolute right-1 top-1 rounded " color='green' >
                                            <Link to={'/explorer'}>Search</Link>
                                        </Button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div >




                </div>

                <div className='Card justify-center 	mr-[20%]  ml-[20%] '>


                    <div className='Card flex justify-around mt-20  '>
                        <Card color="transparent" shadow={false} className="w-50 max-w-[15rem]">
                            <CardHeader
                                color="transparent"
                                floated={false}
                                shadow={false}
                                className="mx-0 flex items-center gap-4 pt-0 pb-8"
                            >

                                <div className="flex items-center justify-between">
                                    <Typography variant="h5" color="blue-gray">
                                        We're the busiest

                                    </Typography>

                                </div>

                            </CardHeader>
                            <CardBody className="mb-6 p-0">
                                <Typography>
                                    &quot;Every 3 minutes someone finds a flatmate on SpareRoom. With the biggest selection of ads, you'll find yours&quot;
                                </Typography>
                            </CardBody>
                        </Card>
                        <Card color="transparent" shadow={false} className="w-50 max-w-[15rem]">
                            <CardHeader
                                color="transparent"
                                floated={false}
                                shadow={false}
                                className="mx-0 flex items-center gap-4 pt-0 pb-8"
                            >

                                <div className="flex items-center justify-between">
                                    <Typography variant="h5" color="blue-gray">
                                        Safety
                                    </Typography>

                                </div>
                            </CardHeader>
                            <CardBody className="mb-6 p-0">
                                <Typography>
                                    &quot;Your safety is our top priority. We have a team of moderators working 7 days a week to check ads and content&quot;
                                </Typography>
                            </CardBody>
                        </Card>
                        <Card color="transparent" shadow={false} className="w-50 max-w-[15rem]">
                            <CardHeader
                                color="transparent"
                                floated={false}
                                shadow={false}
                                className="mx-0 flex items-center gap-4 pt-0 pb-8"
                            >

                                <Typography variant="h5" color="blue-gray">
                                    We're all about people
                                </Typography>

                            </CardHeader>
                            <CardBody className="mb-6 p-0">
                                <Typography>
                                    &quot;Everyone's idea of the perfect housemate is different, so search based on what's important to you&quot;
                                </Typography>
                            </CardBody>
                        </Card>

                    </div>
                    <div className='flex justify-around mt-20 '>
                        <Card className="w-80 ">
                            <CardHeader floated={false} className="h-60">
                                <img src="/img/team-1.jpg" alt="profile-picture" className='object-cover	 h-60' />
                            </CardHeader>
                            <CardBody className="text-center">
                                <Typography variant="h4" color="blue-gray" className="mb-2">
                                    Sousse
                                </Typography>

                            </CardBody>

                        </Card>
                        <Card className="w-80">
                            <CardHeader floated={false} className="  h-60">
                                <img src="/img/team-2.jpg" alt="profile-picture object-cover 	" />
                            </CardHeader>
                            <CardBody className="text-center">
                                <Typography variant="h4" color="blue-gray" className="mb-2">
                                    Tunis
                                </Typography>

                            </CardBody>

                        </Card>
                        <Card className="w-80">
                            <CardHeader floated={false} className="  h-60">
                                <img src="/img/team-3.jpg" alt="profile-picture object-cover h-60	" />
                            </CardHeader>
                            <CardBody className="text-center">
                                <Typography variant="h4" color="blue-gray" className="mb-2">
                                    Tunis
                                </Typography>

                            </CardBody>

                        </Card>

                    </div>
                    <div className='flex justify-around mt-20 '>
                        <Card className="w-80">
                            <CardHeader floated={false} className="h-50">
                                <img src="/img/team-4.jpg" alt="profile-picture" className='object-cover	 h-60' />
                            </CardHeader>
                            <CardBody className="text-center">
                                <Typography variant="h4" color="blue-gray" className="mb-2">
                                    Tozeur
                                </Typography>

                            </CardBody>

                        </Card>
                        <Card className="w-80">
                            <CardHeader floated={false} className="  h-60">
                                <img src="/img/team-5.jpg" alt="profile-picture object-cover h-full	" />
                            </CardHeader>
                            <CardBody className="text-center">
                                <Typography variant="h4" color="blue-gray" className="mb-2">
                                    Tunis
                                </Typography>

                            </CardBody>

                        </Card>
                        <Card className="w-80">
                            <CardHeader floated={false} className="h-50">
                                <img src="/img/team-7.jpg" alt="profile-picture" className='object-cover	 h-60 w-full' />
                            </CardHeader>
                            <CardBody className="text-center">
                                <Typography variant="h4" color="blue-gray" className="mb-2">
                                    Nabeul
                                </Typography>

                            </CardBody>

                        </Card>
                    </div>
                </div>
                <Footer />





            </div>

        </>

    )
}

export default Home