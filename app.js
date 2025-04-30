import { countries } from './countries.js'

const countries2 = document.querySelector(".countries")

countries.forEach((item) => {
    const div = document.createElement("div")
    div.innerHTML = `<div class="country-card">
                        <h2>${item.country}</h2> 
                        <hr> Capital: ${item.capital } 
                        <br>Poblacion: ${item.population }`
    countries2.appendChild(div)

})


