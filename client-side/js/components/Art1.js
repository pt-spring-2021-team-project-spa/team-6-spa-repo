const app = document.querySelector("#app");

// to get random art
const objId = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getData() {
    document.getElementById("myInput").value;
}

function getRandomArt() {
    fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/" + objId(40000, 37000))
        .then(response => response.json())
        .then(jsonData => {

            console.log(jsonData);
            let showData = jsonData;
            if (jsonData.objectID == null) {
                throw new Error(" invalid object");

            }

            const title = document.createElement('h1');
            title.innerText = showData.title;
            const nameElem = document.createElement('p');
            nameElem.innerHTML = "Culture : " + showData.culture + " ;  "
            + "Credit Line : " + showData.creditLine;
            
            const metLink = document.createElement('a');
            metLink.href = "Object URL : " + showData.objectURL;

            const pic = document.createElement('img')
            pic.src = showData.primaryImageSmall;

            pic.style.width = "800px";
            app.innerHTML = "";
            makeSearchBar();
            app.appendChild(title);
            app.appendChild(nameElem);
            app.appendChild(metLink);
            app.appendChild(pic);


        })
        .catch((err) => {
            console.log(err);
            console.log("catch done");
            getRandomArt();

        })

}

function makeSearchBar() {
    // var input = document.createElement("input");
    // input.setAttribute('id','myInput')
    //  input.setAttribute('type', 'text');

    //  input.placeholder ="search art"
    //  app.appendChild(input)


    const dateBtn = document.createElement('button');
    dateBtn.innerText = "Click for random art!";
    app.appendChild(dateBtn);
    dateBtn.addEventListener("click", getRandomArt);
}

makeSearchBar();