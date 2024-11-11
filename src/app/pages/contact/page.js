// pages/contact.js
import Navbar from '@/app/components/Navbar/page';
import React from 'react';

export default function Contact() {
  return (
 <>
 <Navbar />
 <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <form className="w-full max-w-lg bg-white p-8 shadow-md rounded-lg space-y-6">
        <h2 className="text-2xl font-semibold text-center mb-4">GET IN TOUCH</h2>
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="w-full mb-4 md:mb-0">
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              NAME
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              placeholder="Enter your name"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700" htmlFor="phone">
            PHONE NUMBER
          </label>
          <input
            type="tel"
            id="phone"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700" htmlFor="message">
            MESSAGE
          </label>
          <textarea
            id="message"
            rows="4"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-gray-800 text-white rounded-md font-semibold hover:bg-gray-700"
          >
            SEND
          </button>
        </div>
      </form>
    </div>
 </>
  );
}
