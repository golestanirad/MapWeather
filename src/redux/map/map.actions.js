/// project files
import {mapActionTypes} from './map.action.types';


export const mapCenter = (lat,lng) => ({
    type: mapActionTypes.MAP_CENTER,
    payload: {lat,lng}
})