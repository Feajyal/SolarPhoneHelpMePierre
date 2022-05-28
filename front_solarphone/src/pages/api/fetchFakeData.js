/* src/api/fetchFakeData.js */
/**
 * A complete Coordinate Pair consisting of a latitude and longitude
 * @typedef {Object} CoordinatePair
 * @property {number} longitude - longitude coordinate
 * @property {number} latitude - latitude coordinate
 */

/**
 * Generates a GeoJSON FeatureCollection of random points based on
 * the center coordinates passed in.
 * @param {CoordinatePair} centerCoordinates - the {@link CoordinatePair} for the map center
 * @return {results} GeoJSON FeatureCollection
 */
const fetchFakeData = centerCoordinates => {
    const newFeaturesList = [];
    
    const id = 1;
    const longitude = 6.1302236252126185;
    const latitude = 45.899390095661225;
    const battery = 80;
    const dispo = "disponible"
    newFeaturesList.push({
         type: 'Feature',
         geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
         },
         properties: {
            id,
             name: `Borne Numéro : #${id}`,
             description: `description de la borne ${dispo} et la batterie est de ${battery}%`,
         },
    })
    
    /*for (let i = 0; i < 20; i++) {
        const id = i;
        const { longitude, latitude } = getRandomCoordinate(centerCoordinates);
        newFeaturesList.push({
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [longitude, latitude],
            },
            properties: {
                id,
                name: `Random Point #${id}`,
                description: `description for Random Point #${id}`,
            },
        });
    }*/

    return Promise.resolve({
        type: 'FeatureCollection',
        features: newFeaturesList,
    });
};

/**
 * Generates a random point within 0.025 radius of map center coordinates.
 * @param {CoordinatePair} centerCoordinates - the {@link CoordinatePair} for the map center
 * @return {CoordinatePair} randomly generated coordinate pair
 */
const getRandomCoordinate = ({ longitude: centerLon, latitude: centerLat }) => {
    const r = 0.025 * Math.sqrt(Math.random());
    const theta = Math.random() * 2 * Math.PI;
    const latitude = centerLat + r * Math.cos(theta);
    const longitude = centerLon + r * Math.sin(theta);
    console.log("latitude :" + latitude + " longitude :" + longitude)
    return { longitude, latitude };
};

export default fetchFakeData;