let data = [];

const fetchData = () => {
    //verinin çekildiği yer
    fetch("data.json")
        .then(response => {return response.json();
        })
        .then(responseData => {
            //json'dan okunan verinin data array'ine atanması
            data = responseData;
            //veri geldikten sonra filtreleme butonu görünür olsun
            let filterButton = document.querySelector("#filterButton");
            filterButton.style.display = "inline-block";
            let checkBox = document.querySelector("#checkbox");
            checkBox.style.display = "inline-block";
            let inputText = document.querySelector("#inputtext");
            inputText.style.display = "inline-block";
            const gizle = document.querySelector("#gizle");
            gizle.style.display = "inline-block";
            const gizle2 = document.querySelector("#gizle2");
            gizle2.style.display = "inline-block";
            const gizle3 = document.querySelector("#gizle3");
            gizle3.style.display = "inline-block";
            //verinin html içerisinde listelendiği fonksiyon
            listData(data);
        })
        .catch(err => {
            //hata yönetimi
            console.log(err)

        })
}

//verinin ul tag'i içerisinde listelenmesini sağlayan fonksiyon
const listData = (data) => {
    let list = document.querySelector(".list");
    list.innerHTML = data.map(element => {
        return `
        <li id=${element.id}>
            <span class='bold'>name:</span> ${element.name}
            <span class='bold'>number:</span> ${element.number}
            <span class='bold'>email:</span> ${element.email} 
            <span class='bold'>age:</span> ${element.age} 
            <span class='bold'>city:</span> ${element.city} 
            <span class='bold'>id:</span> ${element.id} 
        </li>
        `;
    })
}

//verinin filtrelenmesini sağlayan fonksiyon
//TODO
const filterData = (filter) => {
    switch (filter) {
        case "filtrele":
            listData(data);
            break;
        case "age":
            data = data.filter(element => element.age >= 18);
            break;
        default:
            break;
    }
}


const changeText = (val) => {
    data = data.filter(element => element.name[0] === val.toUpperCase());
}