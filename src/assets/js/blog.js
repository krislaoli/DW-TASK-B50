function submitData(event) {
  const title = document.getElementById("title").value;
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;
  const content = document.getElementById("content").value;
  const technologies = document.getElementById("technologies");

  let checkedTechs = [];
  for (let index = 0; index < technologies.length; index++) {
    if (technologies[index].checked) {
      checkedTechs.push(technologies[index].value);
    }
  }

  if (title === "") {
    event.preventDefault();
    alert("Project Name Cannot Be Empty!");
    return false;
  }

  if (startDate === "") {
    event.preventDefault();
    alert("Start Date Cannot Be Empty!");
    return false;
  }

  if (endDate === "") {
    event.preventDefault();
    alert("End Date Cannot Be Empty!");
    return false;
  }

  // fail check if startDate bigger than endDate
  if (new Date(startDate) > new Date(endDate)) {
    event.preventDefault();
    alert("Start Date Must Be Later Than End Date!");
    return false;
  }

  if (content === "") {
    event.preventDefault();
    alert("Description Cannot Be Empty!");
    return false;
  }

  if (checkedTechs.length === 0) {
    event.preventDefault();
    alert("Choose Atleast One of The Technologies");
    return false;
  }

  return true;
}
