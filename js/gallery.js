var windowWidth = window.outerWidth;

var getImageHolder = document.getElementsByClassName('image-holder');
var getTextCard = document.getElementsByClassName('text-card');

function revealTextCard(e){
     e.preventDefault();
      var parentElement = e.currentTarget;
      var childElement = parentElement.children[1];
     childElement.classList.add('card-reveal');
    }

function hideTextCard(e){
  e.preventDefault();
  var element = e.currentTarget;

  if (element.classList.contains('card-reveal') == true){
   element.classList.remove('card-reveal');
  }
}



//Adds hover on event listener on image


if (windowWidth > 650){
for (var i = 0; i < getImageHolder.length; i++) {
    getImageHolder[i].addEventListener("mouseover", revealTextCard);
    getImageHolder[i].addEventListener("touchstart", revealTextCard);
  }
}

//Adds hover off event listener on text card
for (var i = 0; i < getImageHolder.length; i++) {
    getTextCard[i].addEventListener("mouseout", hideTextCard);
    getImageHolder[i].addEventListener("touchend", revealTextCard);
  }
