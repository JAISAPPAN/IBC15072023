'use client';
import { useState, ChangeEvent, FormEvent } from 'react';

const ContactModelForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [remarks, setRemarks] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform form submission logic here
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleWhatsappNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWhatsappNumber(e.target.value);
  };

  const handleRemarksChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setRemarks(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="whatsappNumber" className="block mb-2 text-sm font-medium text-gray-700">
          Whatsapp Number
        </label>
        <input
          type="number"
          id="whatsappNumber"
          value={whatsappNumber}
          onChange={handleWhatsappNumberChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="remarks" className="block mb-2 text-sm font-medium text-gray-700">
          Enquiry Details
        </label>
        <textarea
          id="remarks"
          value={remarks}
          onChange={handleRemarksChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          rows={4}
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactModelForm;
