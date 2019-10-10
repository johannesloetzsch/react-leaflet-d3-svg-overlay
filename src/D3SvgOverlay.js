import { MapLayer } from 'react-leaflet';
import 'leaflet-d3-svg-overlay';

export default class D3SvgOverlay extends MapLayer {
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
