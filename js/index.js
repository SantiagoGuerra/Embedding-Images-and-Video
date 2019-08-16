//universal selector to reset styles by default
var allElements = document.getElementsByTagName("*");

for (var i = 0, len = allElements.length; i < len; i++) {
    var element = allElements[i];
    
    element.style.boxSizing = 'border-box';
    element.style.fontFamily = 'Roboto';
}

