let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Neurocientífica en formación interesada en el desarrollo de sitios web, en la escritura de artículos de ciencia y de divulgación científica, y en la ciencia de datos.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
