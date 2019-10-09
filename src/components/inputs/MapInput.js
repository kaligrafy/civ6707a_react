import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
  accessToken: process.env.MAPBOX_ACCESS_TOKEN
});

class MapInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      coordinates: [-73.6, 45.5]
    };

    this.defaultCenter = [-73.4, 45.7];

  }

  componentDidMount() {
    
  }

  render() {

    return (
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: '20rem',
          width: '100vw'
        }}
        center={this.state.coordinates.length > 0 ? this.state.coordinates : this.defaultCenter}
      >
        <Layer type="circle" id="marker">
          {this.state.coordinates.length > 0 && <Feature coordinates={this.state.coordinates} />}
        </Layer>
      </Map>
    );

  }

}

export default MapInput;
