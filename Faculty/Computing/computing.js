const computingCourses = {
  se: {
    title: "Software Engineering",
    text: "Covers principles of software development, system design, software testing, and deployment to prepare students for real-world engineering roles.",
    duration: "4 years (Full Time)",
    fees: "$10,000 per year",
    career: "Software Developer, QA Engineer, DevOps Engineer, Systems Architect"
  },
  ds: {
    title: "Data Science",
    text: "Focuses on data analysis, machine learning, data visualization, and big data technologies, enabling insights and intelligent systems.",
    duration: "4 years (Full Time)",
    fees: "$10,200 per year",
    career: "Data Scientist, Data Engineer, AI Specialist, Statistician"
  },
  cyber: {
    title: "Cyber Security",
    text: "Covers ethical hacking, network security, digital forensics, and information assurance to build robust defense systems.",
    duration: "4 years (Full Time)",
    fees: "$9,800 per year",
    career: "Cyber Security Analyst, Security Engineer, Penetration Tester"
  },
  cse: {
    title: "Computer Systems Engineering",
    text: "Blends hardware and software systems including embedded systems, digital logic, microprocessors, and automation.",
    duration: "4 years (Full Time)",
    fees: "$9,900 per year",
    career: "Systems Engineer, Embedded Systems Developer, Hardware Designer"
  },
};

function showDepartment(course) {
  const section = document.getElementById("course-details");
  section.style.display = "block";
  section.innerHTML = `
    <h2>${computingCourses[course].title}</h2>
    <hr class="separator">
    <p>${computingCourses[course].text}</p>
    <div class="course-details">
      <p><strong>🕒 Duration:</strong> ${computingCourses[course].duration}</p>
      <p><strong>💰 Fees:</strong> ${computingCourses[course].fees}</p>
      <p><strong>🎯 Career Opportunities:</strong> ${computingCourses[course].career}</p>
    </div>
  `;
  section.scrollIntoView({ behavior: "smooth" });
}
