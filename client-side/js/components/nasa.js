function getDate() {
    return getElementById("myDate").value;
}


export default function fetchNasa() {





    const app = document.querySelector("#app");
    let Api_Key = "kCOeINu8qP2sS7zaSFgeD0S5mrp1bEa01C3JDzPr";

    var dateValue = new Date('YYYY-MM-DD');




    fetch("https://api.nasa.gov/planetary/apod?date=" + "&api_key=" + Api_Key)
        .then(response => response.json())
        .then(jsonData => {


            console.log(jsonData);


            let showData = jsonData;


            var input = document.createElement("input");
            input.setAttribute('id', 'myDate')
            input.setAttribute('type', 'YYYY-MM-DD');
            //input.setAttribute('value', "2002-02-01")
            input.placeholder = "Enter Date: YYYY-MM-DD"

            let dateValue = input.value;
            dateValue = showData.date;
            app.innerHTML = "";
            //  
            const dateBtn = document.createElement('button');
            dateBtn.innerText = "click me to see picture of the day";
            app.appendChild(dateBtn);
            dateBtn.addEventListener('click', () => {

                const title = document.createElement('h1');
                title.innerText = showData.title;
                const nameElem = document.createElement('p');
                nameElem.innerHTML = showData.explanation;


                const pic = document.createElement('img')
                pic.src = showData.url;
                pic.id = "nasaImage";
                pic.style.width = "300px";
                app.appendChild(title);
                app.appendChild(nameElem);
                app.appendChild(pic);
            })

        })
        .catch(err => console.log(err))
}