import {
  ACTION_ADD_NEW_MARKER,
  ACTION_DELETE_MARKER,
  ACTION_GET_ALL_MARKERS,
  ACTION_MODIFY_MARKER,
  ACTION_SET_CITY_VALUE,
  ACTION_SET_WASTE_TYPE_VALUE,
  ACTION_IS_EDITING_MARKER,
  ACTION_SET_MARKER_TO_EDIT,
  ACTION_SET_FILTER_WASTE_TYPE,
} from './action';

const initialState = {
  markersIds: [],
  markers: {},
  cityValue: '',
  wasteTypeValue: '',
  isEditingMarker: false,
  markerToEdit: {},
  filterWasteType: '',
};

export const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_GET_ALL_MARKERS:
      return {
        ...state,
        markersIds: action.payload.map(marker => marker.id),
        markers: action.payload.reduce((acc, marker) => {
          return { ...acc, [marker.id]: marker };
        }, {}),
      };

    case ACTION_ADD_NEW_MARKER:
      const marker = action.payload;
      return {
        ...state,
        markers: { ...state.markers, [marker.id]: marker },
        markersIds: [...state.markersIds, marker.id],
      };

    case ACTION_MODIFY_MARKER:
      return {
        ...state,
        markers: {
          ...state.markers,
          [action.payload.id]: action.payload,
        },
      };

    case ACTION_DELETE_MARKER:
      const deleteMarker = action.payload;
      const markerIndex = state.markersIds.indexOf(deleteMarker.id);
      const { [deleteMarker.id]: markerRemove, ...markers } = state.markers;
      return {
        ...state,
        markers: markers,
        markersIds: [
          ...state.markersIds.slice(0, markerIndex),
          ...state.markersIds.slice(markerIndex + 1),
        ],
      };
    case ACTION_SET_CITY_VALUE:
      const city = action.payload;
      return {
        ...state,
        cityValue: city,
      };

    case ACTION_SET_WASTE_TYPE_VALUE:
      const wasteType = action.payload;
      return {
        ...state,
        wasteTypeValue: wasteType,
      };

    case ACTION_IS_EDITING_MARKER:
      return {
        ...state,
        isEditingMarker: !state.isEditingMarker,
      };

    case ACTION_SET_MARKER_TO_EDIT:
      return {
        ...state,
        markerToEdit: action.payload,
      };

      case ACTION_SET_FILTER_WASTE_TYPE:
        return {
          ...state,
          filterWasteType: action.payload,
        };
  

    default:
      return state;
  }
};
