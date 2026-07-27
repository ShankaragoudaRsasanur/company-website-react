function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">

        {/* Company */}
        <div>
          <h2 className="text-2xl font-bold mb-4">My Company</h2>
          <p className="text-gray-300">
            We build modern websites and web applications using React,
            Java, Spring Boot, and the latest technologies.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>

          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#" className="hover:text-yellow-400">About</a></li>
            <li><a href="#" className="hover:text-yellow-400">Services</a></li>
            <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Services</h2>

          <ul className="space-y-2">
            <li>Web Development</li>
            <li>React Development</li>
            <li>UI/UX Design</li>
            <li>Java Full Stack</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact</h2>

          <p>Email: info@mycompany.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Location: Bengaluru, India</p>
        </div>

      </div>

      <hr className="my-8 border-gray-600" />

      <p className="text-center text-gray-300">
        © 2026 My Company. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;