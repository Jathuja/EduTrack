const medicineCourses = {
  clinical: {
    title: "Clinical Sciences",
    text: "Covers the practical aspects of medicine including internal medicine, surgery, pediatrics, and obstetrics/gynecology, helping students develop clinical reasoning and patient care skills.",
    duration: "5 years (Full Time) + 1 Year Internship",
    fees: "$15,500 per year",
    career: "Clinical Doctor, Hospitalist, Medical Officer"
  },
  pharmacology: {
    title: "Pharmacology",
    text: "Focuses on the study of drugs, their actions, uses, and effects on the human body. Students gain knowledge on prescription guidelines and therapeutic applications.",
    duration: "5 years (Full Time)",
    fees: "$14,800 per year",
    career: "Pharmacologist, Clinical Researcher, Medical Advisor"
  },
  anatomy: {
    title: "Anatomy",
    text: "Provides an in-depth understanding of the structure of the human body through cadaveric dissection, imaging, and theoretical study.",
    duration: "5 years (Full Time)",
    fees: "$14,500 per year",
    career: "Anatomist, Medical Educator, Forensic Expert"
  },
  publicHealth: {
    title: "Public Health",
    text: "Deals with disease prevention, health education, and health policy planning at a population level to promote community well-being.",
    duration: "5 years (Full Time)",
    fees: "$15,000 per year",
    career: "Public Health Officer, Epidemiologist, Health Policy Analyst"
  }
};

function showDepartment(course) {
  const section = document.getElementById("course-details");
  section.style.display = "block";
  section.innerHTML = `
    <h2>${medicineCourses[course].title}</h2>
    <hr class="separator">
    <p>${medicineCourses[course].text}</p>
    <div class="course-details">
      <p><strong>🕒 Duration:</strong> ${medicineCourses[course].duration}</p>
      <p><strong>💰 Fees:</strong> ${medicineCourses[course].fees}</p>
      <p><strong>🎯 Career Opportunities:</strong> ${medicineCourses[course].career}</p>
    </div>
  `;
  section.scrollIntoView({ behavior: "smooth" });
}
