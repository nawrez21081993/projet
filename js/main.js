// Animations init
$( document ).ready(function() {
  new WOW().init();
});

//validation function
function validateForm() {
  var name =  document.getElementById('name').value;
  if (name == "") {
      alert('Veuillez remplir le champ "Nom et prénom" ');
      return false;
  }

  var poste =  document.getElementById('poste').value;
  if (poste == "") {
      alert('Veuillez remplir le champ "Votre poste" ');
      return false;
  }


  var email =  document.getElementById('email').value;
  if (email == "") {
      alert('Veuillez remplir le champ "Adresse mail" ');
      return false;
  } else {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(email)){
          alert('Adresse mail invalide');
          return false;
      }
  }


  var subject =  document.getElementById('object').value;
  if (subject == "") {
      alert('Veuillez remplir le champ "Object" ');
      return false;
  }
  var message =  document.getElementById('message').value;
  if (message == "") {
      alert('Veuillez remplir le champ "Votre message" ');
      return false;
  }
  alert("Message envoyé! Merci pour votre réactivité! ");
}