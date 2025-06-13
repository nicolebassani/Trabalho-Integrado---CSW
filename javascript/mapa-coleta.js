// JS MAPA PONTOS DE COLETA - RECICLADOR //

document.addEventListener('DOMContentLoaded', function() {
    const centerLat = -20.3159; 
    const centerLng = -40.3128;
    const initialZoom = 12;

    const map = L.map('map').setView([centerLat, centerLng], initialZoom);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const pontosDeDescarte = [
        {
            title: 'Ponto de Descarte 1',
            address: 'Av. Luciano das Neves, 2100, Centro, Vila Velha - ES',
            position: { lat: -20.3341, lng: -40.3069 } 
        },
        {
            title: 'Ponto de Descarte 2',
            address: 'Av. Nossa Senhora da Penha, 570, Praia do Canto, Vitória - ES',
            position: { lat: -20.2977, lng: -40.2917 } 
        }
    ];

    pontosDeDescarte.forEach((ponto, index) => {
    
        const marker = L.marker([ponto.position.lat, ponto.position.lng]).addTo(map);

        marker.bindPopup(`<b>${ponto.title}</b><br>${ponto.address}`);
    });

    if (pontosDeDescarte.length > 0) {
        const latLngs = pontosDeDescarte.map(ponto => L.latLng(ponto.position.lat, ponto.position.lng));
        const bounds = L.latLngBounds(latLngs);
        map.fitBounds(bounds);
    }
});