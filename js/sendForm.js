const formTestDrive = document.querySelector(".form-test-drive");

formTestDrive.addEventListener("submit", (e) => {
  e.preventDefault();

  let data = {};

  for (let { name, value } of formTestDrive.elements) {
    if (name) {
      data[name] = value;
    }
  }

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.status == 200 || response.status == 201) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
    .then((data) => {
      alert("Данные успешно отправлены.");
      formTestDrive.reset();
    })
    .catch((error) => alert("Произошла ошибка " + error.message + ". Повторите позднее."));
});
