import React from 'react';

function Contact() {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl w-full space-y-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Get in touch:</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">Fill in the form to start a conversation</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <div className="flex items-center mt-4 text-gray-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                className="w-8 h-8 text-gray-500"
                            >
                                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <div className="ml-4 text-md font-semibold">Aastha Insurance And Investments, Solapur</div>
                        </div>

                        <div className="flex items-center mt-2 text-gray-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                className="w-8 h-8 text-gray-500"
                            >
                                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path d="M22 3h-6l-4 4H6a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V5a2 2 0 00-2-2z" />
                            </svg>
                            <div className="ml-4 text-md font-semibold">+44 1234567890</div>
                        </div>

                        <div className="flex items-center mt-2 text-gray-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                className="w-8 h-8 text-gray-500"
                            >
                                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <div className="ml-4 text-md font-semibold">info@acme.org</div>
                        </div>
                    </div>

                    <form className="flex flex-col space-y-4">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Full Name"
                            className="py-3 px-4 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500"
                        />

                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            className="py-3 px-4 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500"
                        />

                        <input
                            type="tel"
                            name="tel"
                            id="tel"
                            placeholder="Telephone Number"
                            className="py-3 px-4 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500"
                        />

                        <button
                            type="submit"
                            className="py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>

            {/* Google Maps iframe */}
            <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.362120517823!2d75.90537277403347!3d17.680345583257687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5da86fd68f571%3A0x558b4160103884ad!2sAastha%20Insurance%20Investment!5e0!3m2!1sen!2sin!4v1708590894286!5m2!1sen!2sin"
                width="400"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}

export default Contact;
