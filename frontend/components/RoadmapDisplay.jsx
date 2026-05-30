export default function RoadmapDisplay({ roadmap }) {
  if (!roadmap || !roadmap.roadmap) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-orange-200">
      <h2 className="text-2xl font-bold text-orange-600 mb-6">
        Generated Roadmap
      </h2>

      <div className="flex items-center justify-center h-[320px]">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-700">
            No Roadmap Generated Yet
          </h3>

          <p className="text-gray-500 mt-2">
            Fill in your details and generate a personalized career roadmap.
          </p>
        </div>
      </div>
    </div>
  );
}

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-orange-200">
      <h2 className="text-2xl font-bold text-orange-600 mb-6">
        Generated Roadmap
      </h2>

      <ul className="space-y-4">
        {roadmap.roadmap.map((step, index) => (
          <li
            key={index}
            className="flex items-center gap-4"
          >
            <div className="min-w-[36px] h-10 w-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-semibold shadow">
              {index + 1}
            </div>

            <div className="flex-1 bg-orange-50 border border-orange-100 rounded-xl p-4 shadow-sm hover:shadow-md transition">
              <p className="text-gray-700 font-medium">
                {step}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}