//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------

    // Définition d'un compteur

    var counter = document.getElementsByClassName('contentBlocks').length;
    document.getElementById('numberOfMessages').textContent = counter;


//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------

		// Quand l'utilisateur clique sur l'icône poubelle, on active ... :

    for(var i=0; i<document.getElementsByClassName("linkTrash").length; i++) {

      document.getElementsByClassName("linkTrash")[i].addEventListener("click",
    function() {
      this.parentNode.parentNode.remove();
      counter = counter - 1;
      document.getElementById('numberOfMessages').textContent = counter;
    })
  }

// A regarder !! Outside of suggesting storing all the data in memory, you can just store removed objects in memory instead. Create an empty array somewhere in the scope, and push the element to it before removing it from dom. When you need the removed element, simply pop and add it back to the parent. Like this.



//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------

	 // Affichage ou non de la div contenant le formulaire d'ajout d'un message

   var addNewMessageLink = document.getElementById("addNewMessageLink");

   var formAddNewContact = document.getElementById("formAddNewContact");

   addNewMessageLink.onclick = function() {
       formAddNewContact.style.display = "block";
   }

   // Fermeture de la div lorsque l'on appuie sur le logo de fermeture

   var closeForm = document.getElementById("closeForm");
   var resetButton = document.getElementById("resetButton");
   var sendButton = document.getElementById("sendButton");
   var pageWrapper = document.getElementById("pageWrapper");
   var firstname = document.getElementById("firstname");
   var familyName = document.getElementById("familyName");
   var messageCorps = document.getElementById("messageCorps");


   // Fermeture du formulaire au clic sur la croix
   closeForm.onclick = function() {
       formAddNewContact.style.display = "none";
   }

   // Ensemble des commandes activées à l'envoi du formulaire
   sendButton.addEventListener("click", function(e) {

     // On empêche le navigateur de renvoyer vers le serveur
     e.preventDefault();

     // On ferme le formulaire
     formAddNewContact.style.display = "none";

     // On crée un nouveau profil et on ajoute 1 au compteur
     var newProfile = document.createElement("article");
     newProfile.classList.add("profileBlocks");
     document.getElementById("pageWrapper").insertBefore(newProfile, pageWrapper.firstChild);
     counter = counter + 1;
     document.getElementById('numberOfMessages').textContent = counter;

     // On récupère les informations du formulaire pour les insérer dans le nouveau message
     var newFirstname = firstname.value;
     var newFamilyName = familyName.value;
     var espace = ' ';
     var identity = newFirstname + " " + newFamilyName;

     var newRecipient = document.createElement("h2");
     newRecipient.textContent = identity;
     console.log(newRecipient);
     newProfile.appendChild(newRecipient);

     var newMessage = document.createElement("p");
     newMessage.textContent = messageCorps.value;
     console.log(newMessage);
     newProfile.appendChild(newMessage);




   })






 //------------------------------------------------------------------------------------

 	   // Mise en mémoire des éléments supprimés par l'utilisateur
