function exibirValores(nome, email) {
    var valoresDiv = document.getElementById("valores");
    valoresDiv.innerHTML = "<p><strong>Nome:</strong> " + nome + "</p>" +
      "<p><strong>Email:</strong> " + email + "</p>";
  }
  
  function enviarFormulario() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
  
    if (nome === "") {
      alert("Por favor, preencha o campo Nome.");
      return false;
    }
  
    if (email === "") {
      alert("Por favor, preencha o campo Email.");
      return false;
    }
    return exibirValores(nome, email);
  }
  
  var formularioValores = [];
  
  function exibirValores() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
  
    formularioValores.push({ nome: nome, email: email });
  
    var valoresDiv = document.getElementById("valoresEnviados");
    valoresDiv.innerHTML = "";
    for (var i = 0; i < formularioValores.length; i++) {
      valoresDiv.innerHTML += "<p><strong>Nome:</strong> " + formularioValores[i].nome + "</p>" +
        "<p><strong>Email:</strong> " + formularioValores[i].email + "</p>";
    }
  }
  
  function initMap() {
    var latitude = -8.0475626;
    var longitude = -34.8770091;
    var mapElement = document.getElementById("map");
    var iframe = document.createElement("iframe");
    iframe.src = "https://www.openstreetmap.org/export/embed.html?bbox=" +
      (longitude - 0.01) + "," + (latitude - 0.01) + "," +
      (longitude + 0.01) + "," + (latitude + 0.01) +
      "&layer=mapnik";
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.frameBorder = 0;
  
    mapElement.appendChild(iframe);
  }
  
  initMap();
  