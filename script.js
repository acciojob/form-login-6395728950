function getFormvalue() {
    // alert("button clicked!");
	const firstname = document.querySelector(".fname").value.trim();
		const lastname = document.querySelector(".lname").value.trim();
  if(firstname==="" || lastname===""){
	  alert("all fields are required:");
	  return;
  }
	alert(`${firstname} ${lastname}`);
}
