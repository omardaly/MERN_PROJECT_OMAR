import React from 'react'
import '../../public/css/tailwind.css'
import { Select, Option } from "@material-tailwind/react";
import Footer from './Footer';
import Nav from './Nav';


import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Input,
    Typography,
    Button,
    Tooltip,
    IconButton,
} from "@material-tailwind/react";

const Explore = () => {
    return (
        <>
            <div>
                <Nav />

            </div>
            <div className='mt-[2%]'>
                <div className='flex justify-around	'>
                    <div className="relative flex w-full gap-2 md:w-max" >
                        <Input
                            type="search"
                            label="Type here..."
                            className="pr-20"
                            containerProps={{
                                className: "min-w-[288px]",
                            }}
                        />
                        <Button size="sm" className="!absolute right-1 top-1 rounded " color='green' >
                            Search
                        </Button>
                    </div>
                    <div className='flex '>
                        <div className="flex w-40 flex-col gap-6 ml-12 ">

                            <Select label="Select Version" success>
                                <Option>Material Tailwind HTML</Option>
                                <Option>Material Tailwind React</Option>
                                <Option>Material Tailwind Vue</Option>
                                <Option>Material Tailwind Angular</Option>
                                <Option>Material Tailwind Svelte</Option>
                            </Select>
                        </div>
                        <div className="flex w-40 flex-col gap-6 ml-12">

                            <Select label="Select Version" success>
                                <Option>Material Tailwind HTML</Option>
                                <Option>Material Tailwind React</Option>
                                <Option>Material Tailwind Vue</Option>
                                <Option>Material Tailwind Angular</Option>
                                <Option>Material Tailwind Svelte</Option>
                            </Select>
                        </div>
                        <div className="flex w-40 flex-col gap-6 ml-12">

                            <Select label="Select Version" success>
                                <Option>Material Tailwind HTML</Option>
                                <Option>Material Tailwind React</Option>
                                <Option>Material Tailwind Vue</Option>
                                <Option>Material Tailwind Angular</Option>
                                <Option>Material Tailwind Svelte</Option>
                            </Select>
                        </div>
                        <div className="flex w-40 flex-col gap-6 ml-12">

                            <Select label="Select Version" success>
                                <Option>Material Tailwind HTML</Option>
                                <Option>Material Tailwind React</Option>
                                <Option>Material Tailwind Vue</Option>
                                <Option>Material Tailwind Angular</Option>
                                <Option>Material Tailwind Svelte</Option>
                            </Select>
                        </div>
                        <div className="flex w-40 flex-col gap-6 ml-12 ">

                            <Select label="Select Version" success>
                                <Option>Material Tailwind HTML</Option>
                                <Option>Material Tailwind React</Option>
                                <Option>Material Tailwind Vue</Option>
                                <Option>Material Tailwind Angular</Option>
                                <Option>Material Tailwind Svelte</Option>
                            </Select>
                        </div>
                        <div className="flex w-40 flex-col gap-6 ml-12 ">

                            <Select label="Select Version" success>
                                <Option>Material Tailwind HTML</Option>
                                <Option>Material Tailwind React</Option>
                                <Option>Material Tailwind Vue</Option>
                                <Option>Material Tailwind Angular</Option>
                                <Option>Material Tailwind Svelte</Option>
                            </Select>
                        </div>
                    </div>




                </div>
                <div className='flex justify-around '>
                    <Card className="w-full max-w-[26rem] shadow-lg mt-10 ">
                        <CardHeader floated={false} color="blue-gray">
                            <img
                                src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                alt="ui/ux review check"
                            />
                            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                            <IconButton
                                size="sm"
                                color="red"
                                variant="text"
                                className="!absolute top-4 right-4 rounded-full"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                </svg>
                            </IconButton>
                        </CardHeader>
                        <CardBody>
                            <div className="mb-3 flex items-center justify-between">
                                <Typography variant="h5" color="blue-gray" className="font-medium">
                                    Mahdia
                                </Typography>
                                <Typography
                                    color="blue-gray"
                                    className="flex items-center gap-1.5 font-normal"
                                >
                                    700 DT
                                </Typography>
                            </div>
                            <Typography color="gray">
                                Enter a freshly updated and thoughtfully furnished peaceful home
                                surrounded by ancient trees, stone walls, and open meadows.
                            </Typography>
                            <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                            </div>
                        </CardBody>
                        <CardFooter className="pt-3">
                            <Button size="lg" fullWidth={true}>
                                View
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="w-full max-w-[26rem] shadow-lg mt-10">
                        <CardHeader floated={false} color="blue-gray">
                            <img
                                src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                alt="ui/ux review check"
                            />
                            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                            <IconButton
                                size="sm"
                                color="red"
                                variant="text"
                                className="!absolute top-4 right-4 rounded-full"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                </svg>
                            </IconButton>
                        </CardHeader>
                        <CardBody>
                            <div className="mb-3 flex items-center justify-between">
                                <Typography variant="h5" color="blue-gray" className="font-medium">
                                    sousse
                                </Typography>
                                <Typography
                                    color="blue-gray"
                                    className="flex items-center gap-1.5 font-normal"
                                >
                                    500$
                                </Typography>
                            </div>
                            <Typography color="gray">
                                Enter a freshly updated and thoughtfully furnished peaceful home
                                surrounded by ancient trees, stone walls, and open meadows.
                            </Typography>
                            <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                            </div>
                        </CardBody>
                        <CardFooter className="pt-3">
                            <Button size="lg" fullWidth={true}>
                                View
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="w-full max-w-[26rem] shadow-lg mt-10">
                        <CardHeader floated={false} color="blue-gray">
                            <img
                                src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                alt="ui/ux review check"
                            />
                            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                            <IconButton
                                size="sm"
                                color="red"
                                variant="text"
                                className="!absolute top-4 right-4 rounded-full"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                </svg>
                            </IconButton>
                        </CardHeader>
                        <CardBody>
                            <div className="mb-3 flex items-center justify-between">
                                <Typography variant="h5" color="blue-gray" className="font-medium">
                                    Tunis
                                </Typography>
                                <Typography
                                    color="blue-gray"
                                    className="flex items-center gap-1.5 font-normal"
                                >
                                    400 DT
                                </Typography>
                            </div>
                            <Typography color="gray">
                                Enter a freshly updated and thoughtfully furnished peaceful home
                                surrounded by ancient trees, stone walls, and open meadows.
                            </Typography>
                            <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                            </div>
                        </CardBody>
                        <CardFooter className="pt-3">
                            <Button size="lg" fullWidth={true}>
                                View
                            </Button>
                        </CardFooter>
                    </Card>


                    <Card className="w-full max-w-[26rem] shadow-lg mt-10">
                        <CardHeader floated={false} color="blue-gray">
                            <img
                                src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                alt="ui/ux review check"
                            />
                            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                            <IconButton
                                size="sm"
                                color="red"
                                variant="text"
                                className="!absolute top-4 right-4 rounded-full"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                </svg>
                            </IconButton>
                        </CardHeader>
                        <CardBody>
                            <div className="mb-3 flex items-center justify-between">
                                <Typography variant="h5" color="blue-gray" className="font-medium">
                                    Gafsa
                                </Typography>
                                <Typography
                                    color="blue-gray"
                                    className="flex items-center gap-1.5 font-normal"
                                >
                                    500 DT
                                </Typography>
                            </div>
                            <Typography color="gray">
                                Enter a freshly updated and thoughtfully furnished peaceful home
                                surrounded by ancient trees, stone walls, and open meadows.
                            </Typography>
                            <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                            </div>
                        </CardBody>
                        <CardFooter className="pt-3">
                            <Button size="lg" fullWidth={true}  >
                                View
                            </Button>
                        </CardFooter>
                    </Card>






                </div>
                <div className='mt-[5%]'>
                    <Footer />
                </div>



            </div>
        </>

    )
}

export default Explore