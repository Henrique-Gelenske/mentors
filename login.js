document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const perfil = document.getElementById("perfil").value;

  if (perfil === "aluno") {
    window.location.href = "painel_aluno.html";
  } else if (perfil === "mentor") {
    window.location.href = "painel_mentor.html";
  }
});
