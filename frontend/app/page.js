"use client";

import { useEffect, useState } from "react";

import RoadmapForm from "@/components/RoadmapForm";
import RoadmapDisplay from "@/components/RoadmapDisplay";
import RoadmapHistory from "@/components/RoadmapHistory";

import {
  generateRoadmap,
  getRoadmaps,
  deleteRoadmap,
} from "@/services/api";

export default function Home() {
  const [roadmap, setRoadmap] = useState(null);
  const [history, setHistory] = useState([]);

  const fetchHistory = async () => {
    try {
      const res = await getRoadmaps();
      setHistory(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  const handleGenerate = async (formData) => {
    try {
      const res = await generateRoadmap(formData);

      setRoadmap(res.data);
      fetchHistory();

      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteRoadmap(id);

      // Clear roadmap if currently displayed roadmap is deleted
      if (roadmap?._id === id) {
        setRoadmap(null);
      }

      fetchHistory();
    } catch (error) {
      console.error(error);
    }
  };

  const handleView = (item) => {
    setRoadmap(item);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 p-8">
      <div className="max-w-6xl mx-auto">

        {/* Hero Section */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-orange-600">
            Career Roadmap Generator
          </h1>

          <p className="text-gray-700 mt-3 text-lg">
            Generate personalized career roadmaps based on your skills and experience
          </p>
        </div>

        {/* Form + Roadmap */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <RoadmapForm onGenerate={handleGenerate} />

          <RoadmapDisplay roadmap={roadmap} />
        </div>

        {/* History */}
        <div className="mt-10">
          <RoadmapHistory
            history={history}
            onDelete={handleDelete}
            onView={handleView}
          />
        </div>

      </div>
    </main>
  );
}