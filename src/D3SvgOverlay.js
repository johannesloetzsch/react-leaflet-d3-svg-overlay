import { MapLayer } from 'react-leaflet';
import './Leaflet.D3SvgOverlay/L.D3SvgOverlay.js';

export default class ReactLeaflet_D3SvgOverlay extends MapLayer {
  createLeafletElement(props) {
    const { data, drawCallback } = this.props;
    return L.d3SvgOverlay(function(sel, proj) {
      drawCallback(sel, proj, data);
    });
  }

  componentDidMount() {
    const { layerContainer, map } = this.props.leaflet || this.context;
    this.leafletElement.addTo(layerContainer);
    this.leafletElement.addTo(map);
  }

  componentWillUnmount() {
    const { layerContainer, map } = this.props.leaflet || this.context;
    map.removeLayer(this.leafletElement);
    layerContainer.removeLayer(this.leafletElement);
  }

  componentDidUpdate(prevProps, prevState) {
    this.componentWillUnmount();
    this.leafletElement = this.createLeafletElement(this.props);
    this.componentDidMount();
  }
}
