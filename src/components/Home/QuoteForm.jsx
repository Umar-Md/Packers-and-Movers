import React from 'react';

const QuoteForm = () => (
  <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md mx-auto lg:ml-auto border border-gray-100">
    <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">Get a Free Quote</h3>
    <p className="text-gray-500 text-center mb-6 text-sm">Save up to 20% on your next move</p>
    <form className="space-y-4">
      <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none" />
      <input type="tel" placeholder="Phone Number" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none" />
      <div className="grid grid-cols-2 gap-4">
        <input type="text" placeholder="From City" className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-600" />
        <input type="text" placeholder="To City" className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-600" />
      </div>
      <button className="w-full bg-blue-800 text-white py-4 rounded-lg font-bold hover:bg-blue-900 uppercase tracking-wide transition-all shadow-md">
        Check Price Now
      </button>
    </form>
  </div>
);

export default QuoteForm;