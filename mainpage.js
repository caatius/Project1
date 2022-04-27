<<<<<<< HEAD
// And here's code to access the JSON file and create the items for the page
function displayResult(buttonPressed) {
    document.getElementById("content container").innerHTML = "";
    fetch(`https://raw.githubusercontent.com/caatius/corgis/main/${buttonPressed}.json`)
    .then(response => response.json())
    .then(productsArray => renderAllProducts(productsArray))

    function renderAllProducts(productsArray) {
        productsArray.forEach(product => renderOneProduct(product))
}


const findDiv = document.getElementById("content container");

function renderOneProduct(product) {
    const newElement = document.createElement("div")
    newElement.className = "content-item"
    newElement.setAttribute("onclick", "showOnMap();"); //"onclick","showOnMap(${product.name})"
    newElement.innerHTML = `
                <span class="item-name">${product.name}</span>
                <span class="item-description">${product.description}</span>
                <span class="item-misc">${product.misc}</span>
                <span class="item-address">${product.info}</span>
                <span class="item-price">Price:${product.price}</span>
                <span class="item-url">${product.url}</span>
                </div>
    `
    findDiv.appendChild(newElement)        
}}

const findMap = document.getElementById("googleMap");

function showOnMap(product) {

    const mapMarker =  new google.maps.Marker({ 
        position: {lat:`${product.lat}`, lng:`${product.lng}`},
        map:map,
        title: `${product.name}`,    
        })
    
    findMap.appendChild(mapMarker)
}
    
=======
// And here's code to access the JSON file and create the items for the page
function displayResult(buttonPressed) {
    document.getElementById("content container").innerHTML = "";
    fetch(`https://raw.githubusercontent.com/caatius/corgis/main/${buttonPressed}.json`)
    .then(response => response.json())
    .then(productsArray => renderAllProducts(productsArray))

    function renderAllProducts(productsArray) {
        productsArray.forEach(product => renderOneProduct(product))
}


const findDiv = document.getElementById("content container");

function renderOneProduct(product) {
    const newElement = document.createElement("div")
    newElement.className = "content-item"
    newElement.setAttribute("onclick", "showOnMap();"); //"onclick","showOnMap(${product.name})"
    newElement.innerHTML = `
                <span class="item-name">${product.name}</span>
                <span class="item-description">${product.description}</span>
                <span class="item-address">${product.info}</span>
                </div>
    `
    findDiv.appendChild(newElement)        
}}

const findMap = document.getElementById("googleMap");

function showOnMap(product) {

    const mapMarker =  new google.maps.Marker({ 
        position: {lat:`${product.lat}`, lng:`${product.lng}`},
        map:map,
        title: `${product.name}`,    
        })
    
    findMap.appendChild(mapMarker)
}
    
>>>>>>> 550bbd906bbbd5ac418600d87a59503b3ef23b87
    