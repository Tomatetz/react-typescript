import * as React from "react";
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"
import {compose, withProps} from "recompose";

const Map = compose(withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBzORATTXFSojZ0dcNQKTDe61cofCwj' +
            'mlk&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{
        height: '100%'
    }}/>,
    containerElement: <div style={{
        height: '400px',
        width: '500px'
    }}/>,
    mapElement: <div style={{
            height: '100%'
        }}/>
}), withScriptjs, withGoogleMap)(props => (
    <GoogleMap
        defaultZoom={1}
        defaultCenter={{
        lat: 0,
        lng: 0
    }}>
        {props.isMarkerShown && (
            <React.Fragment>
                {props
                    .markers
                    .map((item, i) => {
                        return (<Marker key={i} position={item}/>)
                    })}
            </React.Fragment>
        )}
    </GoogleMap>
));
export default Map;