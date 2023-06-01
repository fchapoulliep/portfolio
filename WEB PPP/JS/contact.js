const grandParentDiv = document.querySelector('#HautPage');
const parentDiv = document.querySelector('.partieGauche');
const childDiv = document.querySelector('.petit');
const scrollButton = document.querySelector('#scrollDown');
var currentPosition = 0;

scrollButton.addEventListener('click', function() {
    var pageHeight = document.documentElement.scrollHeight;
    var windowHeight = window.innerHeight;
    var scrollPosition = pageHeight - windowHeight;
    
    if (currentPosition < scrollPosition) {
      window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
      currentPosition = scrollPosition;
    } else { 
      window.scrollTo({ top: 0, behavior: 'smooth' });
      currentPosition = 0;
    }
  });
