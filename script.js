  function enviarFormulario() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
  
    if (!nome) {
      alert("Por favor, preencha o campo Nome.");
      return false;
    }
  
    if (!email) {
      alert("Por favor, preencha o campo Email.");
      return false;
    }
     exibirValores(nome, email);
  }
  
  let formularioValores = [];
  
  function exibirValores(nome,email) {
    formularioValores.push({ nome: nome, email: email });
  
    let valoresDiv = document.getElementById("valoresEnviados");
    valoresDiv.innerHTML = "";
    for (let i = 0; i < formularioValores.length; i++) {
      valoresDiv.innerHTML += "<p><strong>Nome:</strong> " + formularioValores[i].nome + "</p>" +
        "<p><strong>Email:</strong> " + formularioValores[i].email + "</p>";
    }
  }
  
  function initMap() {
    let latitude = -8.0475626;
    let longitude = -34.8770091;
    let mapElement = document.getElementById("map");
    let iframe = document.createElement("iframe");
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
  