
const section1 = document.getElementById("section_1");
const country = document.createElement("text");
const pop = document.createElement("text");
section1.append("country name: ", country, " ", " - population: ", pop);



const getCountryByName = (countryName) =>{

    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(response => response.json())
    .then(data => country.append(data[0].name.common));

    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(response => response.json())
    .then(data => pop.append(data[0].population));
}



// getCountryByName("germany");

const countriesNameList = document.querySelector("ul");

const getAllCountries = () => {
    
    // const n = data.length();
    // const countriesList = new Array(n);
    
    fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
        for (const country of data){
            const listItem = document.createElement("li");
            listItem.appendChild(document.createElement("strong")).textContent = country.name.common;
            listItem.append(` population of ${country.population}`)
            countriesNameList.appendChild(listItem);
        }
    });
}

getAllCountries();