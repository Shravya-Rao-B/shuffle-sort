function shuffleCards() {
    let allCards = document.getElementById("allCards");
    let allChildCards = allCards.children;
    for (var i = allChildCards.length; i >= 0; i--) {
        allCards.appendChild(allChildCards[Math.random() * i | 0]);
    }
}
function sortCards() {
    var allCards = document.getElementById("allCards");
    var childNodes = allCards.childNodes;
    var cardElements = [];
for (var i in childNodes) {
    if (childNodes[i].nodeType == 1) {
        cardElements.push(childNodes[i]);
    }
}
cardElements.sort(function(a, b) {
    return a.innerHTML == b.innerHTML
            ? 0
            : (a.innerHTML > b.innerHTML ? 1 : -1);
  });
for (i = 0; i < cardElements.length; ++i) {
    allCards.appendChild(cardElements[i]);
  }
}