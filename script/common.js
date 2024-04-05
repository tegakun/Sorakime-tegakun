function menu() {
  document.getElementById('menu').classList.toggle('open');
}
window.onload = () => {
  let element = document.createElement('style');
  element.innerText = `
    body::before {left: 0vw;}
  `;
  document.body.appendChild(element);
  /*let sheets = document.styleSheets;
  sheets[sheets.length - 1].insertRule(
    'body::before {left: 0vw;}',
    sheets[sheets.length - 1].cssRules.length
  );*/
};
