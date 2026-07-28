import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">
          Contact Us
        </h2>

        <div className="bg-white shadow-lg rounded-xl p-8">

          {/* Full Name */}
          <div className="mb-5">
            <label className="block mb-2 font-semibold">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full border rounded-lg p-3"
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="block mb-2 font-semibold">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border rounded-lg p-3"
            />
          </div>

          {/* Message */}
          <div className="mb-5">
            <label className="block mb-2 font-semibold">
              Message
            </label>

            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="w-full border rounded-lg p-3"
            ></textarea>
          </div>

          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
            Send Message
          </button>

        </div>
      </div>
    </section>
  );
}

export default Contact;