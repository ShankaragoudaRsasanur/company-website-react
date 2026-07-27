function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "Modern React websites."
    },
    {
      title: "Mobile Apps",
      desc: "Android and iOS applications."
    },
    {
      title: "UI/UX Design",
      desc: "Beautiful user interfaces."
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            >
              <h3 className="text-2xl font-bold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;