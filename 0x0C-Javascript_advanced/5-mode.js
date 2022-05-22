
  function changeMode(size, weight, transform, background, color) {
    document.documentElement.style['font-size'] = size;
    document.documentElement.style['font-weight'] = weight;
    document.documentElement.style['text-transform'] = transform;
    document.documentElement.style['background-color'] = background;
    document.documentElement.style['color'] = color;
  }

  function main() {
    const parrafo = document.createElement("p");
    const pContent = document.createTextNode("Welcome Holberton!");
    parrafo.appendChild(pContent);
    document.body.appendChild(parrafo);
    const button1 = document.createElement("button");
    button1.addEventListener("click", function(event){
      let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    })
    const bContent1 = document.createTextNode('Spooky');
    button1.appendChild(bContent1);
    document.body.appendChild(button1);
    const button2 = document.createElement("button");
    button2.addEventListener("click", function(event){
      let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    })
    const bContent2 = document.createTextNode('Dark mode');
    button2.appendChild(bContent2);
    document.body.appendChild(button2);
    const button3 = document.createElement("button");
    button3.addEventListener("click", function(event){
      let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');
    })
    const bContent3 = document.createTextNode('Scream mode');
    button3.appendChild(bContent3);
    document.body.appendChild(button3);
  }
  main();

