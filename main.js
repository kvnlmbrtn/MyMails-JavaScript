//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------

    // Définition d'un compteur

    var counter = document.getElementsByClassName('contentBlocks').length;
    document.getElementById('numberOfMessages').textContent = counter;


//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------

		// Quand l'utilisateur clique sur l'icône poubelle, on active ... :

    for(var i=0; i<document.getElementsByClassName("trashLogo").length; i++) {

      document.getElementsByClassName("trashLogo")[i].addEventListener("click",
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

     // On récupère les informations du formulaire pour les insérer dans le nouveau message

     var newFirstname = firstname.value;
     var newFamilyName = familyName.value;
     var espace = ' ';
     var identity = newFirstname + " " + newFamilyName;

     // On crée un nouveau profil et on ajoute 1 au compteur
     var newProfile = document.createElement("article");
     newProfile.classList.add("profileBlocks");

           var newPictureBlock = document.createElement("div");
           newProfile.classList.add("pictureBlocks");

                 var newAvatar = document.createElement('img');
                 newAvatar.src = "avatar-2.jpg";
                 newAvatar.classList.add("profilePictures");
                 newProfile.appendChild(newAvatar);

           newProfile.appendChild(newPictureBlock);

           var newContentBlock = document.createElement("div");
           newContentBlock.classList.add("contentBlocks");

                 var newRecipient = document.createElement("h2");
                 newRecipient.textContent = identity;
                 newRecipient.classList.add("recipient");
                 newContentBlock.appendChild(newRecipient);

                 var newMessage = document.createElement("p");
                 newMessage.textContent = messageCorps.value;
                 newMessage.classList.add("messageContent");
                 newContentBlock.appendChild(newMessage);

           newProfile.appendChild(newContentBlock);

           var newLogoBlock = document.createElement("div");
           newLogoBlock.classList.add("logoBlocks");

                var newTrashLogo = document.createElement('img');
                newTrashLogo.src = "garbage.png";
                newTrashLogo.classList.add("trashLogo");

                // Attention au caractère asynchrone ici, car JS va lire toutes les trash qui existent au démarrage du navigateur. Celle qu'on vient de créer n'est donc pas reconnue et il faut donc réenvoyer la commande pour que le navigateur "apose une oreille" sur la nouvelle poubelle créé

                newTrashLogo.addEventListener("click",
                  function() {
                    this.parentNode.parentNode.remove();
                    counter = counter - 1;
                    document.getElementById('numberOfMessages').textContent = counter;
                  })

                newLogoBlock.appendChild(newTrashLogo);

           newProfile.appendChild(newLogoBlock);


     document.getElementById("pageWrapper").insertBefore(newProfile, pageWrapper.firstChild);
     counter = counter + 1;
     document.getElementById('numberOfMessages').textContent = counter;

   })





//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------

 	   // Mise en mémoire des éléments supprimés par l'utilisateur



//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------


     // Partie où l'on rend la barre de navigation dynamique

     		// Lorsque l'utilisateur fait défiler le site, on active la fonction fonctionNavigationFigée

        window.onscroll = function() {fonctionNavigationFigée()};

    		// On récupère la barre de navigation dans le DOM

    		var bannerNavigation = document.getElementById("bannerNavigation");

    		// On variabilise la position de la barre de navigation

    		var fixedPosition = bannerNavigation.offsetTop;

    		// On ajoute la class "positionFigée à la barre de navigation quand la position est atteinte en scrollant
    		// On la retire lorsque l'on quitte cette position de scroll

    		function fonctionNavigationFigée() {
    		  if (window.pageYOffset > fixedPosition) {
    		    bannerNavigation.classList.add("fixedPosition");
    		  } else {
    		    bannerNavigation.classList.remove("fixedPosition");
    		  }
    		}
