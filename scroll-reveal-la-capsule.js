// Génération de la constante sr qui va être égale à la méthode ScrollReveal


const sr = ScrollReveal();



// Gestion des animations à l'ouverture de la page : titre, logo, etc.

sr.reveal('#bannerNavigation', {
	distance: '0px',
	origin: 'center',
  scale: 0.1,
	duration: 1000
});

sr.reveal('#pageWrapper', {
	distance: '0px',
	origin: 'center',
  scale: 0.1,
	duration: 1000,
	delay: 1000
});

sr.reveal('#profileBlocks', {
	origin: 'bottom',
	distance: '200px',
	duration: 500,
  useDelay: 'onload'
});
