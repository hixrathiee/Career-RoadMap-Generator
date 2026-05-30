"use client";

import { useState } from "react";

export default function RoadmapForm({
  onGenerate,
}) {
  const [formData, setFormData] = useState({
    targetRole: "",
    currentSkills: "",
    experienceLevel: "Beginner",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  await onGenerate(formData);

  setFormData({
    targetRole: "",
    currentSkills: "",
    experienceLevel: "Beginner",
  });
};

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-xl border border-orange-200"
    >
      <h2 className="text-2xl font-bold text-orange-600 mb-6">
        Generate Roadmap
      </h2>

<label className="block text-sm font-medium text-gray-700 mb-2">
  Target Role
</label>
      <input
        type="text"
        name="targetRole"
        placeholder="Target Role"
        value={formData.targetRole}
        onChange={handleChange}
       className="w-full border border-gray-300 p-3 rounded-lg mb-4 text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />

<label className="block text-sm font-medium text-gray-700 mb-2">
  Current Skills
</label>
      <input
        type="text"
        name="currentSkills"
        placeholder="Current Skills (comma separated)"
        value={formData.currentSkills}
        onChange={handleChange}
        className="w-full border border-gray-300 p-3 rounded-lg mb-4 text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
      <p className="text-xs text-gray-500 mb-4">
  Example: HTML, CSS, JavaScript, React
</p>

<label className="block text-sm font-medium text-gray-700 mb-2">
  Experience Level
</label>
      <select
        name="experienceLevel"
        value={formData.experienceLevel}
        onChange={handleChange}
        className="w-full border border-gray-300 p-3 rounded-lg mb-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
      >
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>

      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-lg"
      >
        Generate Roadmap
      </button>
    </form>
  );
}