fetch("http://localhost:4000/greet")
  .then(response => response.json())
  .then(data => {
    document.getElementById("greeting").innerText = data.message;
  })
  .catch(() => {
    document.getElementById("greeting").innerText = "HELLO ABHAY";
  });
