// And here's code to access the JSON file and create the items for the page
function displayResult(buttonPressed) {
    document.getElementById("content container").innerHTML = "";
    fetch(`https://raw.githubusercontent.com/caatius/Project1/master/db/${buttonPressed}.json`)
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
                <span id="${product.name}", class="item-name", data-value="{lat:${product.lat}, lng:${product.lng}}">${product.name}</span>
                <span class="item-description">${product.description}</span>
                <span class="item-misc">${product.misc}</span>
                <span class="item-address">${product.info}</span>
                <span class="item-price">Price level: ${product.price}</span>
                <a href="${product.url}" class="item-url">${product.url}</a>
                </div>
    `
    findDiv.appendChild(newElement)   
}}

const findMap = document.getElementById("googleMap");
const mapCoords = this.document.getElementById("item-name");
function setCoord() {
  this.document.dataset.value = coords;
}

function showOnMap() {
setCoords();
    var mapProp= {
        center: new google.maps.LatLng(65.0124,25.4682),
        zoom: 15,
        styles: [
      {
        "featureType": "poi",
        "stylers": [
          { "visibility": "off" }
        ]
      }
    ]
        };
        var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);



      new google.maps.Marker({ 
        position: coords,
        map: map,
        title: "Here! ^_^",    
        })

     // window.mapMarker; = mapMarker;
    //findMap.appendChild(mapMarker)
};
