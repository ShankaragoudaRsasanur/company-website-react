import CompanyCard from "./CompanyCard";

function CompanyList() {
  const companies = [
    {
      title: "Web Development",
      description: "We build modern responsive websites using React."
    },
    {
      title: "Mobile Apps",
      description: "We develop Android and iOS applications."
    },
    {
      title: "Cloud Solutions",
      description: "We provide secure cloud deployment services."
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {companies.map((company, index) => (
            <CompanyCard
              key={index}
              title={company.title}
              description={company.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CompanyList;