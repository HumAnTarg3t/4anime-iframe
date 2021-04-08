const iframes = document.querySelectorAll('iframe');
for (let i = 0; i < iframes.length; i++) {
    iframes[i].parentNode.removeChild(iframes[i]);
}