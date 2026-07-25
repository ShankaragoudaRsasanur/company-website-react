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
      <h2 className="text-4xl font-bold text-center mb-10">
        Our Services
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {services.map((service, index) => (
         <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-3">
              {service.title}
            </h3>

            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;