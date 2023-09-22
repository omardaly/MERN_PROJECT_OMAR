import React from 'react'
import '../../public/css/tailwind.css'
import { Typography } from "@material-tailwind/react";
import { useParams, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'






const Footer = () => {
    const navigate = useNavigate()

    return (
        <>
            <footer className="w-full bg-white-700 p-4 mt-15">
                <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-green-700 text-center md:justify-around">
                    <div>
                        <img src="/img/Logo_test_1.png" alt="logo-ct" className="w-10 mt-10" />
                        <Typography
                            as="a"
                            href="#"
                            color="white"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-white-500"
                        >
                            Go-Safe
                        </Typography>

                    </div>

                    <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 mt-8">
                        <li>
                            <Typography
                                as="a"
                                href="#"
                                color="white"
                                className="font-normal transition-colors  focus:text-white-500"
                            >
                                Home

                            </Typography>
                        </li>
                        <li>
                            <Typography
                                as="a"
                                href="#"
                                color="white"
                                className="font-normal transition-colors  focus:text-blue-500"
                            >
                                <Link to={'/Login'}>Sing In</Link>
                            </Typography>
                        </li>
                        <li>
                            <Typography
                                as="a"
                                href="#"
                                color="white"
                                className="font-normal transition-colors  focus:text-blue-500"
                            >
                                <Link to={'/Register'}>Register</Link>
                            </Typography>
                        </li>
                        <li>
                            <Typography
                                as="a"
                                href="#"
                                color="white"
                                className="font-normal transition-colors  focus:text-blue-500"
                            >
                                Contact Us
                            </Typography>
                        </li>
                    </ul>
                </div>

            </footer>

        </>
    )
}

export default Footer