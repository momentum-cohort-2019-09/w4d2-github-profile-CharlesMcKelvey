class Filtered {
    constructor(container, search, category) {
        console.log(container)
        this.container = container
        this.search = search
        this.category = category
    }

    // parseToHTML(data, keys) {

    // }

    lookUp(container) {
        console.log(container)
        console.log(this.container)
        fetch(`https://swapi.co/api/${this.category}/?search=${this.search}`)
            .then(response => response.json())
            .then(function (data) {
                let results = data.results
                console.log({ results })
                for (let result of results) {
                    // The result is the first in the array. Could be only 1 but we will get through all of them
                    console.log(result)
                    console.log({ container })
                    // data = data.result
                    console.log(data)

                    let keys = Object.keys(result)
                    // container.innerHTML = parseToHTML(data, keys)
                    // Thought I could use a function outside of this but turns out I can't. Just slapped the code here now.
                    let templateLiteral = ``
                    // Start it off
                    templateLiteral += `<article class="info-article>`
                    for (let key of keys) {
                        // Checkers 
                        if (key === "name") {
                            templateLiteral += `<h2 class="info">${key}: ${data.key}</h2>`
                        } else if (key instanceof Array) {
                            let length = key.length
                            templateLiteral += `There are ${length} ${key}. I haven't figured out how to grab the titles of these yet.`
                        } else {
                            // General Info
                            templateLiteral += `<p class="info">${key}: ${data.key}</p>`
                        }
                    }
                    // End it
                    templateLiteral += `<article>`
                    console.log({ container })
                    this.container.innerHTML = templateLiteral
                }
            })
    }
}

function templateFilms(films) {
    return `<article class="info-article">
                <h2>${films.title}</h2>
                <h3>${films.release_date}</h3>
                <h3>${films.director}</h3>
                <h4>${films.producer}</h4>
                <p>${films.opening_crawl}</p>
            </article>`
}

function templatePerson(person) {
    return `<article class="info-article">
                <h2 class="general-title">General Info for ${person.name}</h2>
                <ul class="info-list">
                    <li>Birth Year: ${person.birth_year}</li>
                    <li>Hair Color: ${person.hair_color}</li>
                    <li>Skin Color: ${person.skin_color}</li>
                    <li>Eye Color: ${person.eye_color}</li>
                    <li>Gender: ${person.gender}</li>
                    <li>Mass: ${person.mass}</li>
                    <li>Height: ${person.height}</li>
                </ul>
                <h2 class="films">Films with ${person.name}</h2>
                <ul class="info-list">
                </ul>
            </article>`
}

function templateStarship(starship) {
    console.log(starship)
    return `<article class="info-article">
                <h2 class="general-title">General Info for ${starship.name}</h2>
                <p class="info">Manufacturer: ${starship.manufacturer}</p>
                <p class="info">Model: ${starship.model}</p>
                <p class="info">Crew Amount: ${starship.crew}</p>
                <p class="info">Passengers Amount: ${starship.passengers}</p>
                <p class="info">Length of ${starship.name}: ${starship.length}</p>
                <p class="info">How Much Life Support Avaiable: ${starship.consumables}</p>
            </article>
    `
}

function templateVehicle(vehicle) {
    console.log(vehicle)
    return `<article class="info-article">
                <h2 class="general-title">General Info for ${vehicle.name}</h2>
                <p class="info">Manufacturer: ${vehicle.manufacturer}</p>
                <p class="info">Model: ${vehicle.model}</p>
                <p class="info">Crew Amount: ${vehicle.crew}</p>
                <p class="info">Passengers Amount: ${vehicle.passengers}</p>
                <p class="info">Length of ${vehicle.name}: ${vehicle.length}</p>
                <p class="info">How Much Life Support Avaiable: ${vehicle.consumables}</p>
            </article>`
}

function templateSpecies(species) {
    console.log(species)
    return `<article class="info-article">
                <h2 class="general-title">General Info for ${species.name}</h2>
                <p class="info">Classification: ${species.classification}</p>
                <p class="info">Designation: ${species.designation}</p>
                <p class="info">Average Height: ${species.average_height}</p>
                <p class="info">Average Lifespan: ${species.average_lifespan}</p>
                <p class="info">Eye Color: ${species.eye_colors}</p>
                <p class="info">Hair Colors: ${species.hair_colors}</p>
                <p class="info">Skin Colors: ${species.skin_colors}</p>
                <p class="info">Language: ${species.language}</p>
            </article>`
}

function templatePlanets(planet) {
    console.log(planet)
    return `<article class="info-article">
                <h2 class="general-title">General Info for ${planet.name}</h2>
                <p class="info">Diameter: ${planet.diameter}</p>
                <p class="info">Rotation Period: ${planet.rotation_period}</p>
                <p class="info">Orbital Period: ${planet.orbital_period}</p>
                <p class="info">Gravity: ${planet.gravity}</p>
                <p class="info">Population: ${planet.population}</p>
                <p class="info">Climate: ${planet.climate}</p>
                <p class="info">Terrain: ${planet.terrain}</p>
                <p class="info">Surface Water: ${planet.surface_water}</p>
            </article>`
}

function getCheckedRadio(radios) {
    for (let radio of radios) {
        if (radio.checked) {
            return radio.value
        }
    }
}
// Grabbing Greedo first as a placeholder for styling purposes
fetch('https://swapi.co/api/people/15/')
    .then(function (response) {
        // Changing the format so we can access it with dot notation. 
        // This is a specific request tho so it isn't as weird to work with. 
        return response.json()
    })
    .then(function (data) {
        // Okay, got the info in the proper format for me to work with 
        // I logged this initially cause idk what this actually is at first. 
        console.log(data)
        // Grab that container, we need to play around 
        const main = document.querySelector('#container')
        // Throw in the html you would like with the proper keys. 
        main.innerHTML = `
        <article class="info-article">
            <h2 class="general-title">General Info for ${data.name}</h2>
            <ul class="info-list">
                <li>Birth Year: ${data.birth_year}</li>
                <li>Hair Color: ${data.hair_color}</li>
                <li>Skin Color: ${data.skin_color}</li>
                <li>Eye Color: ${data.eye_color}</li>
                <li>Gender: ${data.gender}</li>
                <li>Mass: ${data.mass}</li>
                <li>Height: ${data.height}</li>
            </ul>
        </article>
        <p>Greedo is more of a placeholder for styling purposes.</p>
        `
        // If there isn't proper documentation handy, much like a company document(?), you could use the Object.keys(--Object you want to get the keys from--) 
        // Here ya go: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
    })
    .catch(function (error) {
        // This is incase things go wrong. I wanna know what is going on. And maybe do specific stuff. I'm lazy here 
        console.log(error)
    })

// Do your searches  ---------------------------------------------------------------
document.querySelector('#search-button').addEventListener('click', function (event) {
    let searchValue = document.querySelector('#search-site').value
    let main = document.querySelector('#container')
    // Grab the radio values to apply to the category where people is currently
    let radios = document.querySelectorAll('.radios')
    // This specficially grabs the checked radio. 
    let radioValue = getCheckedRadio(radios)
    // Throw in the search query and the type of filtration they would like. 
    // For class edition ---------------------------------------
    let result = new Filtered(main, searchValue, radioValue)
    result.lookUp()

    // For functional edition ------------------------------------------
    // fetch(`https://swapi.co/api/${radioValue}/?search=${searchValue}`)
    //     .then(response => response.json())
    //     .then(function (data) {
    //         data = data.results[0]
    //         if (radioValue === "people") {
    //             console.log(data)
    //             main.innerHTML = templatePerson(data)
    //         } else if (radioValue === "films") {
    //             console.log(data)
    //             main.innerHTML = templateFilms(data)
    //         } else if (radioValue === "starships") {
    //             console.log(data)
    //             main.innerHTML = templateStarship(data)
    //         } else if (radioValue === "vehicles") {
    //             console.log(data)
    //             main.innerHTML = templateVehicle(data)
    //         } else if (radioValue === "species") {
    //             console.log(data)
    //             main.innerHTML = templateSpecies(data)
    //         } else if (radioValue === "planets") {
    //             console.log(data)
    //             main.innerHTML = templatePlanets(data)
    //         } else {
    //             main.innerHTML = templateError()
    //         }

    //     })

    // For just do it -----------------------------------------------
    // fetch(`https://swapi.co/api/${radioValue}/?search=${searchValue}`)
    //     .then(response => response.json())
    //     .then(function (data) {
    //         let results = data.results
    //         console.log({ results })
    //         for (let result of results) {
    //             // The result is the first in the array. Could be only 1 but we will get through all of them
    //             console.log({ result })
    //             console.log({ container })
    //             // data = data.result
    //             console.log({ data })
    //             // Grabbing this iteration. 
    //             let keys = Object.keys(result)
    //             console.log({ keys })
    //             // container.innerHTML = parseToHTML(data, keys)
    //             // Thought I could use a function outside of this but turns out I can't. Just slapped the code here now.
    //             let templateLiteral = ``
    //             // Start it off
    //             templateLiteral += `<article class="info-article>`
    //             for (let key of keys) {
    //                 console.log({ key })
    //                 console.log({ result })
    //                 // Checkers 
    //                 if (key === "name") {
    //                     key = key.split('_')
    //                     templateLiteral += `<h2 class="info">${key}: ${result[key]}</h2>`
    //                 } else if (key instanceof Array) {
    //                     let length = key.length
    //                     templateLiteral += `There are ${length} ${key}. I haven't figured out how to grab the titles of these yet.`
    //                 } else {
    //                     // General Info
    //                     templateLiteral += `<p class="info">${key}: ${result[key]}</p>`
    //                 }
    //             }
    //             // End it
    //             templateLiteral += `<article>`
    //             console.log(templateLiteral)
    //             main.innerHTML = templateLiteral
    //         }
    //     })


})

