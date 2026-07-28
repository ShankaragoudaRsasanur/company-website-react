function CompanyCard({ title, description }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
      <h3 className="text-2xl font-bold text-blue-600 mb-3">
        {title}
      </h3>

      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
}

export default CompanyCard;