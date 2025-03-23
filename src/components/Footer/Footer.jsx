// import React from 'react'
// import { Link } from 'react-router-dom'
// import Logo from '../Logo'

// function Footer() {
//   return (
//     <section className="relative overflow-hidden py-10 bg-gray-400 border border-t-2 border-t-black">
//             <div className="relative z-10 mx-auto max-w-7xl px-4">
//                 <div className="-m-6 flex flex-wrap">
//                     <div className="w-full p-6 md:w-1/2 lg:w-5/12">
//                         <div className="flex h-full flex-col justify-between">
//                             <div className="mb-4 inline-flex items-center">
//                                 <Logo width="100px" />
//                             </div>
//                             <div>
//                                 <p className="text-sm text-gray-600">
//                                     &copy; Copyright 2023. All Rights Reserved by DevUI.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="w-full p-6 md:w-1/2 lg:w-2/12">
//                         <div className="h-full">
//                             <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
//                                 Company
//                             </h3>
//                             <ul>
//                                 <li className="mb-4">
//                                     <Link
//                                         className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                                         to="/"
//                                     >
//                                         Features
//                                     </Link>
//                                 </li>
//                                 <li className="mb-4">
//                                     <Link
//                                         className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                                         to="/"
//                                     >
//                                         Pricing
//                                     </Link>
//                                 </li>
//                                 <li className="mb-4">
//                                     <Link
//                                         className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                                         to="/"
//                                     >
//                                         Affiliate Program
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link
//                                         className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                                         to="/"
//                                     >
//                                         Press Kit
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="w-full p-6 md:w-1/2 lg:w-2/12">
//                         <div className="h-full">
//                             <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
//                                 Support
//                             </h3>
//                             <ul>
//                                 <li className="mb-4">
//                                     <Link
//                                         className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                                         to="/"
//                                     >
//                                         Account
//                                     </Link>
//                                 </li>
//                                 <li className="mb-4">
//                                     <Link
//                                         className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                                         to="/"
//                                     >
//                                         Help
//                                     </Link>
//                                 </li>
//                                 <li className="mb-4">
//                                     <Link
//                                         className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                                         to="/"
//                                     >
//                                         Contact Us
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link
//                                         className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                                         to="/"
//                                     >
//                                         Customer Support
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="w-full p-6 md:w-1/2 lg:w-3/12">
//                         <div className="h-full">
//                             <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
//                                 Legals
//                             </h3>
//                             <ul>
//                                 <li className="mb-4">
//                                     <Link
//                                         className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                                         to="/"
//                                     >
//                                         Terms &amp; Conditions
//                                     </Link>
//                                 </li>
//                                 <li className="mb-4">
//                                     <Link
//                                         className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                                         to="/"
//                                     >
//                                         Privacy Policy
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link
//                                         className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                                         to="/"
//                                     >
//                                         Licensing
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//   )
// }

// export default Footer


import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="w-full bg-white border-t-2 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        {/* Centered Links Section */}
        <div className="w-full flex flex-wrap justify-center text-center gap-10">
          {/* Company Links */}
          <div className="w-full md:w-1/4">
            <h3 className="text-xs font-semibold uppercase text-gray-600 mb-3">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                  Features
                </Link>
              </li>
              <li>
                <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                  Pricing
                </Link>
              </li>
              <li>
                <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="w-full md:w-1/4">
            <h3 className="text-xs font-semibold uppercase text-gray-600 mb-3">
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                  Account
                </Link>
              </li>
              <li>
                <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                  Help
                </Link>
              </li>
              <li>
                <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="w-full md:w-1/4">
            <h3 className="text-xs font-semibold uppercase text-gray-600 mb-3">
              Legals
            </h3>
            <ul className="space-y-2">
              <li>
                <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Logo & Copyright Section */}
        <div className="mt-4 flex items-center space-x-3 pb-2">
          <Logo width="60px" />
          <p className="text-sm text-gray-700">
            &copy; Copyright 2025. All Rights Reserved by Chirag.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
