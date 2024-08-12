function attachEvents() {
  const baseUrl = "http://localhost:3030/jsonstore/collections/students";

  const tableInfo = document.querySelector('table tbody');
  const [firstNameEl, lastNameEl, facultnumberEl, gradeEl] = document.querySelectorAll("input[type=text]");

  const btnSubmit = document.getElementById('submit');



  btnSubmit.addEventListener('click', () => {

    fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'aplicationjson'
      },
      body: JSON.stringify({

        firstName: firstNameEl.value,
        lastName: lastNameEl.value,
        facultyNumber: facultnumberEl.value,
        grade: gradeEl.value

      })
    })
      .then(res => res.json())
      .then(res => console.log(res));

    firstNameEl.value = "";
    lastNameEl.value = "";
    facultnumberEl.value = "";
    gradeEl.value = "";

  });

  fetch(baseUrl)
    .then(res => res.json())
    .then(result => {
      const allStudents = Object.values(result);
      for (const student of allStudents) {


        const thFirstName = document.createElement('th');
        thFirstName.textContent = student.firstName;

        const thLastName = document.createElement('th');
        thLastName.textContent = student.lastName;

        const thfacultNUmberName = document.createElement('th');
        thfacultNUmberName.textContent = student.facultyNumber;

        const thGrade = document.createElement('th');
        thGrade.textContent = student.grade;

        const trEl = document.createElement('tr');
        trEl.append(thFirstName, thLastName, thfacultNUmberName, thGrade);

        tableInfo.appendChild(trEl);
      }
    });
}

attachEvents();