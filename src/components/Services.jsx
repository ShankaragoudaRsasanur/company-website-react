function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Modern responsive websites using React and Tailwind CSS.",
    },
    {
      title: "App Development",
      description: "Android and iOS applications with modern technologies.",
    },
    {
      title: "Cloud Solutions",
      description: "Deploy scalable and secure applications to the cloud.",
    },
    {
      title: "AI Solutions",
      description: "Smart AI-powered applications for businesses.",
    },
    {
      title: "UI/UX Design",
      description: "Beautiful and user-friendly interface designs.",
    },
    {
      title: "Cyber Security",
      description: "Protect applications with modern security practices.",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
          Our Services
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;