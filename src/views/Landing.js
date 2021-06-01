import React from "react";
import { Link } from "react-router-dom";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

function TeamCard(props) {
    var src = "/img/" + props.src;
    return (
        <div className="w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
                <img
                    alt="..."
                    src={src}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                />
                <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">{props.name}</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                        {props.desg}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function Landing() {
    return (
        <>
            <Navbar transparent />
            <main>
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage:
                                "url('https://cdn.shopify.com/s/files/1/2006/5615/articles/TechniMobili-Blog-5RulesForBuying.jpg?v=1510251949')",
                        }}>
                        <span
                            id="blackOverlay"
                            className="w-full h-full absolute opacity-75 bg-black"></span>
                    </div>
                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                <div className="pr-12">
                                    <p className="text-white font-semibold text-4xl">
                                        Let us help you choose your next right
                                        product.
                                    </p>
                                    <h1 className="text-white font-bold text-5xl text-center p-5">
                                        Virtually
                                    </h1>
                                    {/* <p className="mt-4 text-lg text-blueGray-200">
                                        This is a simple example of a Landing Page you can build using Notus React. It features multiple CSS components based on
                                        the Tailwind CSS design system.
                                    </p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
                        style={{ transform: "translateZ(0)" }}>
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0">
                            <polygon
                                className="text-blueGray-200 fill-current"
                                points="2560 0 2560 100 0 100"></polygon>
                        </svg>
                    </div>
                </div>
                <section className="pb-20 bg-blueGray-200 -mt-24">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap">
                            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                            <i className="fas fa-award"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">
                                            Free Chats
                                        </h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            Get guidance through free chats with
                                            our experts.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                                            <i className="fas fa-retweet"></i>
                                        </div>
                                        <a href="./video.html">
                                            <h6 className="text-xl font-semibold">
                                                Video Calls
                                            </h6>
                                        </a>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            Get more personalised help through
                                            video call sessions.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                                            <i className="fas fa-fingerprint"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">
                                            Popular Brands
                                        </h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            Know the products from popular
                                            brands.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center mt-32">
                            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                    <i className="fas fa-user-friends text-xl"></i>
                                </div>
                                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                    Connect with the experts
                                </h3>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                                    When it comes to buying a new product, there
                                    are a lot of questions that needs to be
                                    answered. It takes hours of research and
                                    hundreds of web searches to get a clear idea
                                    about what's there in the market now.
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                                    We are trying to solve this problem by
                                    directly connecting you to people who had
                                    already done hours and hours of research and
                                    thousands of web searches.
                                </p>
                                <Link
                                    to="/"
                                    className="font-bold text-blueGray-700 mt-8">
                                    Get yourself registered today!
                                </Link>
                            </div>

                            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                                    <img
                                        alt="..."
                                        src="https://onlineshopperng.files.wordpress.com/2014/11/confused-computer.jpg?w=450"
                                        className="w-full align-middle rounded-t-lg"
                                    />
                                    <blockquote className="relative p-8 mb-4">
                                        <svg
                                            preserveAspectRatio="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 583 95"
                                            className="absolute left-0 w-full block h-95-px -top-94-px">
                                            <polygon
                                                points="-30,95 583,95 583,65"
                                                className="text-lightBlue-500 fill-current"></polygon>
                                        </svg>
                                        <h4 className="text-xl font-bold text-white">
                                            What to buy?
                                        </h4>
                                        <p className="text-md font-light mt-2 text-white">
                                            <ul>
                                                <li>
                                                    Market is rapidly evolving
                                                </li>
                                                <li>Too Many Options</li>
                                                <li>Lack of Knowledge</li>
                                            </ul>
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>{" "}
                </section>
                <section className="pt-20 pb-48">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-center text-center mb-24">
                            <div className="w-full lg:w-6/12 px-4">
                                <h2 className="text-4xl font-semibold">
                                    Our Team
                                </h2>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center">
                            <TeamCard
                                name="Archana Vijayakumar"
                                desg="CEO"
                                src="Archana.jpeg"></TeamCard>
                            <TeamCard
                                name="Amal Thoma"
                                desg="COO"
                                src="Amal.jpeg"></TeamCard>
                            <TeamCard
                                name="Riya P Mathew"
                                desg="CTO"
                                src="Riya.png"></TeamCard>
                            <TeamCard
                                name="Rahul Sunil"
                                desg="CFO"
                                src="Rahul.jpg"></TeamCard>
                            <TeamCard
                                name="Bharath T U"
                                desg="CMO"
                                src="Bharath.JPG"></TeamCard>
                        </div>
                    </div>{" "}
                </section>
                <section className="pb-20 relative block bg-blueGray-800">
                    <div
                        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
                        style={{ transform: "translateZ(0)" }}>
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0">
                            <polygon
                                className="text-blueGray-800 fill-current"
                                points="2560 0 2560 100 0 100"></polygon>
                        </svg>
                    </div>
                    <div className="container mx-auto px-4 lg:pt-24 lg:pb-64"></div>{" "}
                </section>{" "}
                <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                                    <div className="flex-auto p-5 lg:p-10">
                                        <form
                                            name="know-more"
                                            method="post"
                                            data-netlify="true"
                                            data-netlify-honeypot="bot-field">
                                            <input
                                                type="hidden"
                                                name="form-name"
                                                value="know-more"
                                            />
                                            <h4 className="text-2xl font-semibold">
                                                Want to Know More?
                                            </h4>
                                            <div className="relative w-full mb-3 mt-8">
                                                <label
                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="full-name">
                                                    Full Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="Name"
                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    placeholder="Full Name"
                                                />
                                            </div>

                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="email">
                                                    Email
                                                </label>
                                                <input
                                                    name="email"
                                                    type="email"
                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    placeholder="Email"
                                                />
                                            </div>

                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="message">
                                                    Message
                                                </label>
                                                <textarea
                                                    name="message"
                                                    rows="4"
                                                    cols="80"
                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                    placeholder="Type a message..."
                                                />
                                            </div>
                                            <div className="text-center mt-6">
                                                <button
                                                    type="submit"
                                                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                                    Send Message
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{" "}
                </section>{" "}
            </main>{" "}
            <Footer />
        </>
    );
}
