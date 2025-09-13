const businessCourses = {
  accounting: {
    title: "Accounting & Finance",
    text: "This course provides a comprehensive understanding of financial reporting, auditing, taxation, and financial management, preparing students for careers in finance and accounting.",
    duration: "3 years (Full Time)",
    fees: "$9,500 per year (Scholarships available)",
    career: "Accountant, Financial Analyst, Auditor, Tax Consultant"
  },
  marketing: {
    title: "Marketing Management",
    text: "Focuses on strategic marketing, consumer behavior, branding, and digital marketing techniques to prepare students for roles in product and brand management.",
    duration: "3 years (Full Time)",
    fees: "$9,200 per year",
    career: "Marketing Manager, Brand Strategist, Market Research Analyst"
  },
  hr: {
    title: "Human Resource Management",
    text: "Covers essential HR functions including recruitment, training and development, performance management, and labor relations.",
    duration: "3 years (Full Time)",
    fees: "$9,000 per year",
    career: "HR Manager,Training Coordinator,Industrial Relations Officer"
  },
  ba: {
    title: "Business Analytics",
    text: "Equips students with analytical skills and tools like data mining, statistical analysis, and predictive modeling to make data-driven business decisions.",
    duration: "3 years (Full Time)",
    fees: "$10,000 per year",
    career: "Business Analyst, Data Analyst, Operations Analyst, BI Consultant"
  }
};

function showDepartment(course) {
  const section = document.getElementById("course-details");
  section.style.display = "block";
  section.innerHTML = `
    <h2>${businessCourses[course].title}</h2>
    <hr class="separator">
    <p>${businessCourses[course].text}</p>
    <div class="course-details">
      <p><strong>🕒 Duration:</strong> ${businessCourses[course].duration}</p>
      <p><strong>💰 Fees:</strong> ${businessCourses[course].fees}</p>
      <p><strong>🎯 Career Opportunities:</strong> ${businessCourses[course].career}</p>
    </div>
  `;
  section.scrollIntoView({ behavior: "smooth" });
}