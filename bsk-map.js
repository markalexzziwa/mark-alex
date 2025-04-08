const schoolLocation = {
    lat: -0.3486426,
    lng: 31.7350027
};
const mapOptions = {
    zoom: 15,
    center: schoolLocation
};
function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);
    const marker = new google.maps.Marker({
        position: schoolLocation,
        map: map,
        title: 'School Location'
    });
}