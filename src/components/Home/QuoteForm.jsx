const QuoteForm = () => (
  <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md ml-auto">
    <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Get a Free Quote</h3>
    <form className="space-y-4">
      <input type="text" placeholder="Full Name" className="w-full p-3 border rounded focus:outline-blue-600" />
      <input type="tel" placeholder="Phone Number" className="w-full p-3 border rounded focus:outline-blue-600" />
      <div className="grid grid-cols-2 gap-4">
        <input type="text" placeholder="From City" className="p-3 border rounded" />
        <input type="text" placeholder="To City" className="p-3 border rounded" />
      </div>
      <button className="w-full bg-blue-800 text-white py-4 rounded font-bold hover:bg-blue-900 uppercase tracking-wide transition">
        Check Price Now
      </button>
    </form>
  </div>
);

export default QuoteForm;