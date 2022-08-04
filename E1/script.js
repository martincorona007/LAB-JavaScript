// 1 Getting form and input attributes
/*window.onload = () => {
    const nameForm = document.forms.nameForm;
    nameForm.method = "post";
    nameForm.target = "_blank";
    nameForm.action = "";
    nameForm.addEventListener("submit", e => {
      e.preventDefault();//prevent submit action
      const firstName = document.getElementById("firstName");
      const lastName = document.getElementById("lastName");
      alert(`Your name is ${firstName.value} ${lastName.value}`);
    });
  };
  */
 //2. Setting Form Values
/*window.onload = () => {
    const nameForm = document.forms.nameForm;
    nameForm.method = "post";
    nameForm.target = "_blank";
    nameForm.action = "";
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    firstName.value = "John";
    lastName.value = "Smith";
    nameForm.addEventListener("submit", e => {
      e.preventDefault();
      alert(`Your name is ${firstName.value} ${lastName.value}`);
    });
  };*/
  //3. Form Validation
  /*window.onload = () => {
    const nameForm = document.forms.nameForm;
    nameForm.method = "post";
    nameForm.target = "_blank";
    nameForm.action = "";
    nameForm.addEventListener("submit", e => {
      e.preventDefault();
      const firstName = document.getElementById("firstName");
      const lastName = document.getElementById("lastName");
      const email = document.getElementById("email");
      let errors = [];
      if (!firstName.value) {
        errors.push("First name is required.");
      }
      if (!lastName.value) {
        errors.push("Last name is required.");
      }
      if (!email.value) {
        errors.push("Email is required.");
      }
      if (!/[^@]+@[^\.]+\..+/.test(email.value)) {
        errors.push("Email is invalid.");
      }
      if (errors.length > 0) {
        alert(errors.join(" "));
        return;
      }
      alert(
        `Your name is ${firstName.value} ${lastName.value}. Your email is ${email.value}`
      );
    });
  };
  */
 //4. HtML validation
 
  window.onload = () => {
    const nameForm = document.forms.nameForm;
    nameForm.method = "post";
    nameForm.target = "_blank";
    nameForm.action = "";
    nameForm.addEventListener("submit", e => {
      e.preventDefault();
      const firstName = document.getElementById("firstName");
      const lastName = document.getElementById("lastName");
      const email = document.getElementById("email");
      alert(
        `Your name is ${firstName.value} ${lastName.value}. Your email is ${email.value}`
      );
    });
  };