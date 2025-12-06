let map = L.map('map').setView([51.289842, 4.174357], 16);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 16,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.marker([51.289842, 4.174357]).addTo(map);
marker.bindPopup("<b>Bpost Postpunt</b><br>Dorpstraat 23, 9130 Kieldrecht").openPopup();