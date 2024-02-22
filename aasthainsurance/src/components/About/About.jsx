import React from 'react'

function About() {
    return (
        <div className="py-16 bg-white">
          <div className="container mx-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="md:w-5/12 lg:w-5/12">
                <img
                  className="w-full h-auto"
                  src="https://img.freepik.com/free-photo/happy-couple-holding-hands-while-talking-about-housing-plans-with-real-estate-agent-home_637285-3834.jpg?size=626&ext=jpg&ga=GA1.1.1304262724.1708581590&semt=ais"
                  alt="image"
                />
              </div>
              <div className="md:w-7/12 lg:w-6/12">
                <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                  Welcome to Aastha Insurance and Investments!
                </h2>
                <p className="mt-6 text-gray-600">
                  Aastha Insurance and Investments is a premier financial firm offering personalized insurance and investment solutions from renowned partners like TATA-AIA and LIC. With a focus on individualized planning and a seamless online platform, clients can conveniently explore options ranging from life and health insurance to mutual funds. Committed to trust and transparency, their experienced team provides exceptional customer service and ongoing support to help clients achieve their financial goals securely.
                </p>
                <p className="mt-4 text-gray-600">
                  Aastha Insurance and Investments prioritizes client needs, offering informed guidance and access to leading industry products. With a dedication to building long-term relationships based on trust and integrity, they assist clients at every stage of their financial journey, ensuring a pathway to financial success and prosperity.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
}

export default About