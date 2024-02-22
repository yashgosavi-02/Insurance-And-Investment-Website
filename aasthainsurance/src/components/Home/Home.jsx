import React from 'react'
import { Link } from 'react-router-dom';
import PartnerSection from './PartnerSection'
import Stats from './Stats';
import CalculatorSection from './CalculatorSection';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-5xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-xl font-bold sm:text-3xl">
                            Insurance for your <br />better family life
                            {/* <span className="hidden sm:block text-4xl"></span> */}
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/"
                        >Get Started
                        </Link>
                    </div>
                </div>
                <div>
                    <PartnerSection/>
                </div>
                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-80" src="https://img.freepik.com/free-vector/family-protection-concept-illustration_114360-21637.jpg?size=626&ext=jpg&ga=GA1.1.1304262724.1708581590&semt=sph" alt="image1" />
                </div>
            </aside>
            <h2 className="text-center text-2xl sm:text-3xl py-8 font-medium">Why Choose us ?</h2>

            <div className="grid  place-items-center sm:mt-10">
                <img className="sm:w-40 w-35" src="https://img.freepik.com/free-vector/thoughtful-woman-with-laptop-looking-big-question-mark_1150-39362.jpg?t=st=1708588135~exp=1708591735~hmac=c9da7236d8a2d5b30fd9d88c0fac747a6290b8372fda67bf5f00d15693d819bf&w=740" alt="image2" />
            </div>
            <div>
                <Stats/>
            </div>
            <div>
                <CalculatorSection/>
            </div>
        </div>
    );
}