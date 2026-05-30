const roadmapTemplates = {
  "frontend developer": [
    "Master HTML5 and Semantic Markup",
    "Learn Modern CSS (Flexbox, Grid, Responsive Design)",
    "Build Strong JavaScript Fundamentals (ES6+)",
    "Understand DOM Manipulation and Browser APIs",
    "Learn React Fundamentals",
    "Master State Management (Context API / Redux)",
    "Learn Next.js and Server-Side Rendering",
    "Consume REST APIs and Handle Authentication",
    "Build Real-World Frontend Projects",
    "Optimize Performance and Accessibility",
    "Learn Testing Fundamentals",
    "Deploy Applications on Vercel/Netlify",
    "Build a Professional Portfolio",
  ],

  "backend developer": [
    "Learn Programming Fundamentals",
    "Master Node.js Runtime",
    "Build RESTful APIs using Express.js",
    "Understand Databases and Data Modeling",
    "Learn MongoDB and Mongoose",
    "Implement Authentication and Authorization",
    "Handle File Uploads and Cloud Storage",
    "Learn API Security Best Practices",
    "Understand Caching and Performance Optimization",
    "Write Unit and Integration Tests",
    "Build Scalable Backend Projects",
    "Learn Docker Basics",
    "Deploy Applications on Cloud Platforms",
  ],

  "full stack developer": [
    "Master HTML, CSS, and JavaScript",
    "Learn Modern Frontend Development with React",
    "Build Applications using Next.js",
    "Understand Backend Development with Node.js",
    "Create REST APIs using Express.js",
    "Learn MongoDB and Database Design",
    "Implement Authentication and Authorization",
    "Integrate Frontend with Backend Services",
    "Build Full-Stack Projects",
    "Learn Git and Collaborative Development",
    "Understand CI/CD Fundamentals",
    "Deploy Full-Stack Applications",
    "Build a Strong Developer Portfolio",
  ],

  "java developer": [
    "Master Core Java Fundamentals",
    "Understand Object-Oriented Programming Concepts",
    "Learn Collections Framework and Generics",
    "Practice Exception Handling and Multithreading",
    "Understand JDBC and Database Connectivity",
    "Learn SQL and Database Design",
    "Master Spring Framework Fundamentals",
    "Build REST APIs using Spring Boot",
    "Implement Authentication and Security",
    "Write Unit Tests with JUnit",
    "Build Enterprise-Level Java Projects",
    "Learn Microservices Architecture",
    "Deploy Java Applications",
  ],

  "python developer": [
    "Master Python Fundamentals",
    "Understand Object-Oriented Programming",
    "Practice Data Structures and Algorithms",
    "Learn Python Libraries and Package Management",
    "Work with Databases using Python",
    "Build APIs using FastAPI or Django",
    "Implement Authentication and Security",
    "Write Automated Tests",
    "Build Real-World Python Projects",
    "Learn Performance Optimization",
    "Understand Cloud Deployment",
    "Deploy Python Applications",
  ],

  "data analyst": [
    "Learn Excel and Spreadsheet Analysis",
    "Master SQL for Data Querying",
    "Learn Python for Data Analysis",
    "Work with Pandas and NumPy",
    "Perform Data Cleaning and Preprocessing",
    "Learn Data Visualization using Power BI/Tableau",
    "Build Interactive Dashboards",
    "Understand Statistics and Probability",
    "Work on Real-World Datasets",
    "Create Data Analysis Portfolio Projects",
  ],

  "data scientist": [
    "Master Python Programming",
    "Learn Statistics and Probability",
    "Understand Data Cleaning and Feature Engineering",
    "Learn Data Visualization",
    "Master Machine Learning Fundamentals",
    "Work with Scikit-learn",
    "Learn Deep Learning Basics",
    "Build End-to-End ML Projects",
    "Understand Model Deployment",
    "Create a Data Science Portfolio",
  ],
  
};

const skillAliases = {
  java: [
    "java",
    "core java"
  ],

  oop: [
    "oop",
    "oops",
    "object-oriented programming",
    "object oriented programming"
  ],

  javascript: [
    "javascript",
    "es6"
  ],

  react: [
    "react"
  ],

  nextjs: [
    "next.js",
    "server-side rendering"
  ],

  html: [
    "html",
    "semantic markup"
  ],

  css: [
    "css",
    "flexbox",
    "grid",
    "responsive design"
  ],

  nodejs: [
    "node.js",
    "express"
  ],

  mongodb: [
    "mongodb",
    "mongoose"
  ],

  sql: [
    "sql",
    "mysql"
  ]
};

const normalizeSkill = (skill) => {
  const map = {
    "core java": "java",
    "oops": "oop",
    "node.js": "nodejs",
    "next.js": "nextjs"
  };

  return map[skill] || skill;
};

const generateRoadmap = (
  targetRole,
  currentSkills,
  experienceLevel
) => {
  const role = targetRole.toLowerCase();

  let roadmap;

  if (role.includes("frontend") || role.includes("react")) {
    roadmap = [...roadmapTemplates["frontend developer"]];
  } else if (role.includes("backend") || role.includes("node")) {
    roadmap = [...roadmapTemplates["backend developer"]];
  } else if (
    role.includes("full stack") ||
    role.includes("mern")
  ) {
    roadmap = [...roadmapTemplates["full stack developer"]];
  } else if (role.includes("java")) {
    roadmap = [...roadmapTemplates["java developer"]];
  } else if (role.includes("python")) {
    roadmap = [...roadmapTemplates["python developer"]];
  } else if (role.includes("data analyst")) {
    roadmap = [...roadmapTemplates["data analyst"]];
  } else if (role.includes("data scientist")) {
    roadmap = [...roadmapTemplates["data scientist"]];
  } else {
    roadmap = [
      "Learn Fundamentals",
      "Build Projects",
      "Create Portfolio",
    ];
  }

  const knownSkills = currentSkills
    .toLowerCase()
    .split(",")
    .map((skill) => skill.trim());

 roadmap = roadmap.filter((step) => {
  const stepLower = step.toLowerCase();

  return !knownSkills.some((skill) => {
    const normalizedSkill =
      normalizeSkill(skill);

    const aliases =
      skillAliases[normalizedSkill] || [skill];

    return aliases.some((alias) =>
      stepLower.includes(alias.toLowerCase())
    );
  });
});

  if (experienceLevel.toLowerCase() === "beginner") {
    roadmap.unshift(
      "Understand Programming Fundamentals"
    );
  }

 if (experienceLevel.toLowerCase() === "advanced") {
  roadmap = roadmap.filter(
    (step) => !step.toLowerCase().includes("fundamentals")
  );

  roadmap.push(
    "Learn System Design",
    "Contribute to Open Source",
    "Build Scalable Production Applications",
    "Prepare for Technical Interviews"
  );
}

  if (roadmap.length === 0) {
    roadmap.push(
      "Build Advanced Projects",
      "Contribute to Open Source",
      "Prepare for Technical Interviews"
    );
  }

  // Remove duplicates
  roadmap = [...new Set(roadmap)];

  return roadmap;
};

module.exports = generateRoadmap;
