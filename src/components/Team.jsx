function Team() {
  const team = [
    {
      name: "John Smith",
      role: "CEO",
    },
    {
      name: "Sarah Johnson",
      role: "Frontend Developer",
    },
    {
      name: "Michael Brown",
      role: "Backend Developer",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">
          Our Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-6 text-center shadow-lg hover:shadow-2xl transition"
            >
              <div className="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                {member.name.charAt(0)}
              </div>

              <h3 className="text-2xl font-bold">
                {member.name}
              </h3>

              <p className="text-gray-600 mt-2">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;