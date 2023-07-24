document.addEventListener("DOMContentLoaded", function () {
    const myForm = document.getElementById("myForm");
    const dataTableBody = document.querySelector("#dataTable tbody");
  
    myForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const address = document.getElementById("address").value;
      const pincode = document.getElementById("pincode").value;
      const gender = document.querySelector('input[name="gender"]:checked').value;
  
      const foodInputs = document.querySelectorAll('input[name="food"]:checked');
      const food = Array.from(foodInputs).map((input) => input.value).join(", ");
  
      const state = document.getElementById("state").value;
      const country = document.getElementById("country").value;
  
      // Add form data to the table
      addRowToTable(firstName, lastName, address, pincode, gender, food, state, country);
  
      // Reset the form fields
      myForm.reset();
    });
  
    function addRowToTable(firstName, lastName, address, pincode, gender, food, state, country) {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${address}</td>
        <td>${pincode}</td>
        <td>${gender}</td>
        <td>${food}</td>
        <td>${state}</td>
        <td>${country}</td>
      `;
  
      dataTableBody.appendChild(newRow);
    }
  });
  