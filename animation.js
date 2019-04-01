var twoD = [];

for (i = 0; i < 20; i++){
    twoD[i] = [];
    for(j = 0; j < 20; j++){
        twoD[i][j] = '/';
    }
}

for(i = 0; i < twoD.length; i++){
    document.getElementById("main").textContent += twoD[i].join("");
    document.getElementById("main").innerHTML += "\n";
}

var text = [];

for (i = 0; i < 20; i++){
    text[i] = [];
    for(j = 0; j < 20; j++){
        text[i][j] = ' ';
    }
}
var content = ['D','o','n','t',' ','T','a','l','k','','t','o',' ','m','e',' ','I','n',' ','M','y',' ','V','e','l','v','e','t',' ','V','a','n','s'];
text[2] = content;

//for(i = 0; i < text.length; i++){
    //document.getElementById("main").textContent += text[i].join("");
    //document.getElementById("main").innerHTML += "\n";
//}

//randomly pick element of 2d array and replace with correct letter

var row = Math.floor((Math.random() * twoD.length));
var column = Math.floor((Math.random() * twoD[row].length));

if(twoD[row][column] == '/'){
    twoD[row][column] = text[row][column];
    document.getElementById("main").textContent = "";
    for(i = 0; i < twoD.length; i++){
        document.getElementById("main").textContent += twoD[i].join("");
        document.getElementById("main").innerHTML += "\n";
    }
}