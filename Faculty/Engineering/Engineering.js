const courses = {
  civil: {
    title: "Civil Engineering",
    text: "Civil Engineering focuses on designing, constructing, and maintaining the physical and naturally built environment. It includes bridges, roads, canals, dams, and buildings.",
    duration: "4 years (Full Time)",
    fees: "$12,000 per year (Scholarships available)",
    career: "Structural Engineer, Site Engineer, Urban Planner, Government Sector Jobs"
  },
  mechanical: {
    title: "Mechanical Engineering",
    text: "Mechanical Engineering involves the design, production, and operation of machines. It covers innovations in energy, transportation, and robotics.",
    duration: "4 years (Full Time)",
    fees: "$11,500 per year",
    career: "Design Engineer, Automotive Engineer, HVAC Specialist, Robotics Developer"
  },
  electrical: {
    title: "Electrical Engineering",
    text: "Electrical Engineering deals with the study and application of electricity, electronics, and electromagnetism.",
    duration: "4 years (Full Time)",
    fees: "$12,500 per year",
    career: "Power Systems Engineer, Electronics Developer, Telecommunication Engineer"
  },
  se: {
    title: "Software Engineering",
    text: "Covers principles of software development, system design, software testing, and deployment to prepare students for real-world engineering roles.",
    duration: "4 years (Full Time)",
    fees: "$10,000 per year",
    career: "Software Developer, QA Engineer, DevOps Engineer, Systems Architect"
  }
};

function showDepartment(course) {
  const section = document.getElementById("course-details");
  const courseData = courses[course];

  if (!courseData) return; // safety check

  section.style.display = "block";
  section.innerHTML = `
    <h2>${courseData.title}</h2>
    <hr class="separator">
    <p>${courseData.text}</p>
    <div class="course-details">
      <p><strong>🕒 Duration:</strong> ${courseData.duration}</p>
      <p><strong>💰 Fees:</strong> ${courseData.fees}</p>
      <p><strong>🎯 Career Opportunities:</strong> ${courseData.career}</p>
    </div>
  `;
  section.scrollIntoView({ behavior: "smooth" });
}
