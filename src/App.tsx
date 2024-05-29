import Map from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

function App() {
  return (
    <div className='App'>
      <Map
        initialViewState={{
          longitude: 2.154007,
          latitude: 41.390205,
          zoom: 5,
        }}
        style={{ width: 600, height: 400 }}
        mapStyle='https://demotiles.maplibre.org/style.json'
      />
    </div>
  );
}

export default App;
