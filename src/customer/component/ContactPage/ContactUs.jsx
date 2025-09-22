import React from 'react';
import { PiMapPinAreaLight } from "react-icons/pi";
import { BiSupport } from "react-icons/bi";
import { MdMarkEmailRead } from "react-icons/md";
import { IoShareSocial } from "react-icons/io5";

const ContactUs = () => {
  return (
    <div className="main grid place-items-center text-center py-8 px-4">

      {/* Logo Section */}
      <div className="flex flex-col items-center gap-4 mb-10">
        <img className="w-[100px] h-[100px]" src="/images/box.png" alt="Logo" />
        <img className="w-[150px] h-[30px]" src="/images/contactwhite.png" alt="Contact" />
      </div>

      {/* Intro Text */}
      <div className="max-w-7xl text-gray-200 space-y-4 mb-12">
        <h1 className="font-mono text-4xl">CONTACT US</h1>
        <p>SMS To Our Facebook Page Without Calling To Get Fast Service Or Get Your Product Delivered.</p>
        <p>দ্রুত পরিষেবা পেতে অথবা আপনার পণ্য দ্রুত ডেলিভারি পেতে কল না করে আমাদের ফেসবুক পেজে এসএমএস করুন।</p>
        <p>আমরা হোয়াটসঅ্যাপ এ কোন প্রকার কল সাপোর্ট দেই না। অনুগ্রহ করে আমাদেরকে হোয়াটসঅ্যাপ এ কল করবেন না। শুধুমাত্র আমরা হোয়াটসঅ্যাপ এ এসএমএস সাপোর্ট দেই।</p>
      </div>

      {/* Support Section */}
      <div className="support grid grid-cols-12 gap-6 p-10 text-gray-200
       bg-boxbg backdrop-blur-md rounded-3xl shadow-lg max-w-7xl w-full">

        {/* Left Info */}
        <div className="col-span-12 md:col-span-5 flex flex-col justify-center gap-6">
          <h2 className="text-3xl font-bold text-white">Need Help?</h2>
          <p className="text-gray-300">
            Our support team is here 24/7 to help you with any issues or questions.
            Reach out anytime via chat, email, or phone.
          </p>

        </div>

        {/* Right Contact Cards */}
        <div className="col-span-12 md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 backdrop-blur-sm drop-shadow-lg">

          {/* Location */}
          <div className="bg-box p-6 rounded-2xl flex flex-col items-center text-center hover:bg-gray-900/70 transition">
            <PiMapPinAreaLight className="text-red-500 text-4xl mb-4" />
            <h3 className="font-bold text-lg">Our Location</h3>
            <p className="text-gray-300 mt-2">Dhaka, Bangladesh</p>
          </div>

          {/* Support */}
          <div className="bg-box p-6 rounded-2xl flex flex-col items-center text-center hover:bg-gray-900/70 transition">
            <BiSupport className="text-blue-500 text-4xl mb-4" />
            <h3 className="font-bold text-lg">Call Support</h3>
            <p className="text-gray-300 mt-2">+880 1234 567890</p>
          </div>

          {/* Email */}
          <div className="bg-box p-6 rounded-2xl flex flex-col items-center text-center hover:bg-gray-900/70 transition">
            <MdMarkEmailRead className="text-green-500 text-4xl mb-4" />
            <h3 className="font-bold text-lg">Email Support</h3>
            <p className="text-gray-300 mt-2">support@example.com</p>
          </div>

          {/* Social */}
          <div className="bg-box p-6 rounded-2xl flex flex-col items-center text-center hover:bg-gray-900/70 transition">
            <IoShareSocial className="text-purple-500 text-4xl mb-4" />
            <h3 className="font-bold text-lg">Social Media</h3>
            <p className="text-gray-300 mt-2">Send us a message on Facebook</p>
          </div>

        </div>


      </div>


      {/* GOOGLE-MAP */}

      <div className="google-map w-full bg-boxbg mt-7 rounded-2xl">
        <h1 className='text-gray-200 font-mono text-4xl py-4'>GOOGLE MAP</h1>
        <div className="google-map px-5 pb-6">
          <iframe className='w-full rounded-2xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.972812943236!2d90.37379957967906!3d23.890582728158606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c52f3fd8458f%3A0xa500e8bc3b7d39c4!2zUmFqYWJhcmkgQ2hvd3Jhc3RhIOCmsOCmvuCmnOCmvuCmrOCmvuCnnOCmvyDgpprgp4zgprDgpr7gprjgp43gpqTgpr4!5e0!3m2!1sen!2sbd!4v1733854438841!5m2!1sen!2sbd" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
