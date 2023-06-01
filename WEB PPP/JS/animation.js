const maDivInterne = document.querySelector('.partieDroite');
const monTitre = maDivInterne.querySelector('h2');
const maListe = maDivInterne.querySelector('ul');
const monImage = maDivInterne.querySelector('img');

monTitre.addEventListener('mouseover', function() {
  monImage.style.transform = 'rotate(270deg)';
});

monTitre.addEventListener('mouseout', function() {
  monImage.style.transform = 'rotate(0deg)';
});

maListe.addEventListener('mouseover', function() {
    monImage.style.transform = 'rotate(270deg)';
  });
  
  maListe.addEventListener('mouseout', function() {
    monImage.style.transform = 'rotate(0deg)';
  });

  


