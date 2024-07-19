function calculateGPA() {
    const grades = document.querySelectorAll('.grade');
    const credits = document.querySelectorAll('.credits');
    let totalPoints = 0;
    let totalCredits = 0;

    grades.forEach((grade, index) => {
        const credit = parseFloat(credits[index].value);
        if (!isNaN(credit) && credit > 0) {
            totalPoints += parseFloat(grade.value) * credit;
            totalCredits += credit;
        }
    });

    let gpa = totalCredits > 0 ? totalPoints / totalCredits : 0;
    document.getElementById('gpaResult').textContent = gpa.toFixed(2);
}

function addCourse() {
    const semester = document.getElementById('semester');
    const newCourse = document.createElement('div');
    newCourse.classList.add('course');
    newCourse.innerHTML = `
        <input type="text" placeholder="e.g. Course" class="course-name">
        <label for="grade">Grade:</label>
        <select class="grade">
            <option value="4">A</option>
            <option value="3.5">B+</option>
            <option value="3">B</option>
            <option value="2.5">C+</option>
            <option value="2">C</option>
            <option value="0">F</option>
        </select>
        <label for="credits">Credits:</label>
        <input type="number" class="credits">
    `;
    semester.appendChild(newCourse);
}
