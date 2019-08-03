function makeList() {
  let ulElement = document.createElement("ul");
  document.body.appendChild(ulElement);

  for (let i = 0; i < booklist.length; i++) {
    let liElement = document.createElement("li");
    ulElement.appendChild(liElement);
    liElement.innerHTML = booklist[i];
    liElement.setAttribute("id", booklist[1]);
  }
}

// makeList();

let bookcover = {
  name_1: "./images/bosna.jpg",
  name_2: "./images/cekk.jpg",
  name_3: "./images/italya.jpg",
  name_4: "./images/ispanya.jpg",
  name_5: "./images/isvec.jpg",
  name_6: "./images/hollanda.jpg"
};

let imgkey = Object.keys(bookcover);

console.log(imgkey);

let bookObject = {
  name_1: {
    title: "BosnaHersek",
    Sure: "3 gece 4 gun",
    fiyat: "300"
  },
  name_2: {
    title: "Cekya",
    Sure: "3 gece 4 gun",
    fiyat: "300"
  },
  name_3: {
    title: "Italya",
    Sure: "3 gece 4 gun",
    fiyat: "300"
  },
  name_4: {
    title: "Ispanya",
    Sure: "3 gece 4 gun",
    fiyat: "300"
  },
  name_5: {
    title: "Isvec",
    Sure: "3 gece 4 gun",
    fiyat: "300"
  },
  name_6: {
    title: "Hollanda",
    Sure: "3 gece 4 gun",
    fiyat: "300"
  }
};

//5

function detailedlist() {
  console.log(bookObject["name_10"]);  

  const enBuyukDiv= document.body.appendChild(document.createElement("div"));
  enBuyukDiv.className="enBuyukDiv";

  for (i in bookObject) {
    let maindiv = enBuyukDiv.appendChild(document.createElement("div"));
    maindiv.className="mainDiv";
    console.log(bookObject[i]);

    let h1Element = document.createElement("h1");
    h1Element.innerHTML = bookObject[i].title;
    maindiv.appendChild(h1Element);

    let ulElement = document.createElement("ul");
    ulElement.setAttribute("id", i);

    
    maindiv.appendChild(ulElement);
    addImagesToList(i)

    let liElement1 = document.createElement("li");
    liElement1.innerHTML = bookObject[i].Sure;
    ulElement.appendChild(liElement1);
    // liElement1.setAttribute("id", i);

    let liElement2 = document.createElement("li");
    liElement2.innerHTML = bookObject[i].fiyat;
    ulElement.appendChild(liElement2);
  }
}
detailedlist()

//7

function addImagesToList(imgkey) {
    console.log(imgkey);
    let imgElement = document.createElement("img");
    imgElement.setAttribute("src", bookcover[imgkey]);
    imgElement.setAttribute("widht", "300px");
    imgElement.setAttribute("height", "300px");
    document.getElementById(imgkey).appendChild(imgElement);
  
}

// addImagesToList()
