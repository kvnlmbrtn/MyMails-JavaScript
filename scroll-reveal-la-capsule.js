// Génération de la constante sr qui va être égale à la méthode ScrollReveal


const sr = ScrollReveal();



// Gestion des animations à l'ouverture de la page : titre, logo, etc.

sr.reveal('#pageWrapper', {
	distance: '0px',
	origin: 'center',
  scale: 0.1,
	duration: 1000
});

sr.reveal('#profileBlock1', {
	distance: '150px',
	origin: 'bottom',
  scale: 0.1,
	delay: 1000,
	duration: 500
});

sr.reveal('#profileBlock2', {
	distance: '150px',
	origin: 'bottom',
  scale: 0.1,
	delay: 1000,
	duration: 500
});

sr.reveal('#profileBlock3', {
	distance: '150px',
	origin: 'bottom',
  scale: 0.1,
	delay: 1000,
	duration: 500
});

sr.reveal('#profileBlock4', {
	distance: '150px',
	origin: 'bottom',
  scale: 0.1,
	delay: 1000,
	duration: 500
});

sr.reveal('#profileBlock5', {
	distance: '150px',
	origin: 'bottom',
  scale: 0.1,
	delay: 1000,
	duration: 500
});
