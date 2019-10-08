import { MapLayer } from 'react-leaflet';
import 'leaflet-d3-svg-overlay';

export default class D3SvgOverlay extends MapLayer {

  createLeafletElement(props) {
    const { layerContainer, map } = this.props.leaflet || this.context;
    var { data, f } = this.props;

    var overlay = L.d3SvgOverlay(function(sel, proj) {
        f(sel, proj, data);
    });

    overlay.addTo(layerContainer);
    overlay.addTo(map);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

}
