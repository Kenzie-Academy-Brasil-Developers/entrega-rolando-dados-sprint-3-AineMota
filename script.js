let frequency = [0,0,0,0,0,0,0,0,0,0,0,0,0]

function rolling(){
    let dado = Math.floor((Math.random() * 6) + 1)
    return dado;
}

const som = () => {
    let dado1 = rolling();
    let dado2 = rolling();
    let soma = dado1 + dado2;

    frequency[soma] = frequency[soma] + 1;

    return soma;
}

for(let i = 0; i < 1000; i++){
    som();
}


const numbersResult = document.getElementById('numbersResult');

for( let i = 2; i <= 12; i++){
    const p = document.createElement('p');

    p.innerText = i + ' : ' + frequency[i];

    numbersResult.appendChild(p);    
}

const randomColor = () => {
    const colors = ["#1F271B", "#003F91", "#6D326D", "#157A6E", "#916953", "#000", "#836FFF","#708090","#008080","#00FA9A","#8B4513", "#BC8F8F",];
  
    return colors[Math.floor(Math.random() * 12)];
  };

const barResult = document.getElementById('barResult')

for( let i = 2; i <= 12; i++){
    const bar = document.createElement('div');

    bar.style.width = `${frequency[i] / 2 }vw`;
    bar.style.background = randomColor();
    bar.style.color = `#fff`;
    bar.innerText = i;

    numbersResult.appendChild(bar);    
}