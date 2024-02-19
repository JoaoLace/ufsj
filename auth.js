function testarSenha() {
    var senha1 = document.getElementById("senha1");
    var senha2 = document.getElementById("senha2");
    if (senha1.value !== senha2.value)
        {
            alert("As senhas não coincidem")
            setTimeout(function () {
                location.reload(true);
            }, 100);
        }
  }