
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------

		// Quand l'utilisateur clique sur l'icône poubelle, on active ... :

    for(var i=0; i<document.getElementsByClassName("linkTrash").length; i++) {

      var counter = document.getElementsByClassName('contentBlocks').length;
      document.getElementById('numberOfMessages').textContent = counter;

      document.getElementsByClassName("linkTrash")[i].addEventListener("click",
    function() {
      counter = counter - 1;
      document.getElementById('numberOfMessages').textContent = counter;
      this.parentNode.parentNode.remove();
      console.log(counter);
    })
  }

// A regarder !! Outside of suggesting storing all the data in memory, you can just store removed objects in memory instead. Create an empty array somewhere in the scope, and push the element to it before removing it from dom. When you need the removed element, simply pop and add it back to the parent. Like this.



//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------

	 // Affichage ou non de la div contenant le formulaire d'ajout d'un message

   var addNewMessageLink = document.getElementById("addNewMessageLink");

   var divContainingNewMessageForm = document.getElementById("divContainingNewMessageForm");

   addNewMessageLink.onclick = function() {
       divContainingNewMessageForm.style.display = "block";
   }


   // Fermeture de la div lorsque l'on appuie sur le logo de fermeture

   var closeAddNewMessageForm = document.getElementById("closeAddNewMessageForm");

   closeAddNewMessageForm.onclick = function() {
       divContainingNewMessageForm.style.display = "none";
   }


//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------

	   // Ajout d'un profil dès que l'on clique sur "Ajouter"

     var sendNewMessageButton = document.getElementById("sendNewMessageButton");

     var pageWrapper = document.getElementById("pageWrapper");

     sendNewMessageButton.onclick = function() {
         var newProfile = document.createElement("article");
         newProfile.classList.add("profileBlocks");
         document.getElementById("pageWrapper").insertBefore(newProfile, pageWrapper.firstChild);
     }



 //------------------------------------------------------------------------------------

 	   // Mise en mémoire des éléments supprimés par l'utilisateur
