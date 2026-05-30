export default function RoadmapHistory({
  history,
  onDelete,
  onView,
}) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-orange-200">
      <div className="flex items-center justify-between mb-6">
  <h2 className="text-2xl font-bold text-orange-600">
    Roadmap History
  </h2>

  <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
  {history.length} {history.length === 1 ? "Roadmap" : "Roadmaps"}
</span>
</div>

      {history.length === 0 ? (
        <p className="text-gray-500">
          No roadmaps generated yet.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 gap-5">
          {history.map((item) => (
            <div
              key={item._id}
              className="bg-orange-50 border border-orange-100 rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >
              <span className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                Career Path
              </span>

              <h3 className="text-lg font-bold text-orange-600">
                {item.targetRole}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                {new Date(
                  item.createdAt
                ).toLocaleString()}
              </p>

              <div className="flex gap-3 mt-5">
                <button
                  onClick={() => onView(item)}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition"
                >
                  View
                </button>

                <button
                  onClick={() =>
                    onDelete(item._id)
                  }
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}