document.getElementById("submit-btn").addEventListener("click", function () {
    const name = document.getElementById("student-name").value;
    const studentId = document.getElementById("student-id").value;
    const score = parseInt(document.getElementById("score").value, 10);
  
    if (!name || !studentId || isNaN(score) || score < 0 || score > 100) {
      alert("Please enter valid data.");
      return;
    }
  
    const grade = calculateGrade(score);
  
    const tableBody = document.getElementById("table-body");
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${name}</td>
      <td>${studentId}</td>
      <td>${score}</td>
      <td>${grade}</td>
    `;
  
    tableBody.appendChild(newRow);
  
    clearForm();
  });
  
  function calculateGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
  }
  
  function clearForm() {
    document.getElementById("evaluation-form").reset();
  }
  