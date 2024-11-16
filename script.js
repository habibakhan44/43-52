// 1
// const form = document.getElementById("signup-form");
// const output = document.getElementById("output");
// form.addEventListener("submit", (event) => {
//     event.preventDefault(); 
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     output.innerHTML = `
//         <h2>Form Data</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Password:</strong> ${password}</p>
//     `;

//     form.reset();
// });


// // 2
// document.querySelector('.read-more-btn').addEventListener('click', function() {
//     const fullDetails = document.querySelector('.full-details');
//     const summary = document.querySelector('.summary');
    
//     if (fullDetails.style.display === 'none') {
//       fullDetails.style.display = 'block';
//       summary.style.display = 'none'; 
//       this.textContent = 'Read Less'; 
//     } else {
//       fullDetails.style.display = 'none'; 
//       summary.style.display = 'block'; 
//       this.textContent = 'Read More';
//     }
//   });
  




// 3
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('student-form');
  const table = document.getElementById('student-table').getElementsByTagName('tbody')[0];
  let editIndex = -1; 

  form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const name = document.getElementById('name').value;
      const age = document.getElementById('age').value;
      const grade = document.getElementById('grade').value;
      
   
      if (editIndex !== -1) {
          const row = table.rows[editIndex];
          row.cells[0].textContent = name;
          row.cells[1].textContent = age;
          row.cells[2].textContent = grade;
          editIndex = -1; 
      } else {
        
          const row = table.insertRow();
          row.insertCell(0).textContent = name;
          row.insertCell(1).textContent = age;
          row.insertCell(2).textContent = grade;
          const actionsCell = row.insertCell(3);
          
        
          const editButton = document.createElement('button');
          editButton.textContent = 'Edit';
          editButton.classList.add('edit');
          editButton.addEventListener('click', function() {
              document.getElementById('name').value = name;
              document.getElementById('age').value = age;
              document.getElementById('grade').value = grade;
              editIndex = row.rowIndex - 1; 
          });
          actionsCell.appendChild(editButton);

          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'Delete';
          deleteButton.classList.add('delete');
          deleteButton.addEventListener('click', function() {
              table.deleteRow(row.rowIndex - 1);
          });
          actionsCell.appendChild(deleteButton);
      }
      
    
      form.reset();
  });


  const initialRows = table.querySelectorAll('tr');
  initialRows.forEach(row => {
      const editButton = row.querySelector('.edit');
      const deleteButton = row.querySelector('.delete');

      editButton.addEventListener('click', function() {
          const name = row.cells[0].textContent;
          const age = row.cells[1].textContent;
          const grade = row.cells[2].textContent;

          document.getElementById('name').value = name;
          document.getElementById('age').value = age;
          document.getElementById('grade').value = grade;
          editIndex = row.rowIndex - 1; 
      });

      deleteButton.addEventListener('click', function() {
          table.deleteRow(row.rowIndex - 1);
      });
  });
});
