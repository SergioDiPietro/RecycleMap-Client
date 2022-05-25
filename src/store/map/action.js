export const ACTION_GET_ALL_MARKERS = '@GET_ALL_MARKERS';
export const ACTION_ADD_NEW_MARKER = '@ADD_NEW_MARKER';
export const ACTION_MODIFY_MARKER = '@MODIFY_MARKER';
export const ACTION_DELETE_MARKER = '@DELETE_MARKER';
export const ACTION_SET_CITY_VALUE = '@SET_CITY_VALUE';
export const ACTION_SET_WASTE_TYPE_VALUE = '@SET_WASTE_TYPE_VALUE';
export const ACTION_IS_EDITING_MARKER = '@IS_EDITING_MARKER';
export const ACTION_SET_MARKER_TO_EDIT = '@SET_MARKER_TO_EDIT';
export const ACTION_SET_FILTER_WASTE_TYPE = '@SET_FILTER_WASTE_TYPE';

export const actionGetAllMarkers = markers => {
  return {
    type: ACTION_GET_ALL_MARKERS,
    payload: markers,
  };
};

export const actionAddNewMarker = marker => {
  return {
    type: ACTION_ADD_NEW_MARKER,
    payload: marker,
  };
};

export const actionModifyMarker = marker => {
  return {
    type: ACTION_MODIFY_MARKER,
    payload: marker,
  };
};

export const actionDeleteMarker = marker => {
  return {
    type: ACTION_DELETE_MARKER,
    payload: marker,
  };
};

export const actionSetCityValue = city => {
  return {
    type: ACTION_SET_CITY_VALUE,
    payload: city,
  };
};

export const actionSetWasteTypeValue = wasteType => {
  return {
    type: ACTION_SET_WASTE_TYPE_VALUE,
    payload: wasteType,
  };
};

export const actionEditingMarker = () => {
  return {
    type: ACTION_IS_EDITING_MARKER,
  };
};

export const actionSetMarkerToEdit = marker => {
  return {
    type: ACTION_SET_MARKER_TO_EDIT,
    payload: marker,
  };
};

export const actionSetFilterWasteType = filterWasteType => {
  return {
    type: ACTION_SET_FILTER_WASTE_TYPE,
    payload: filterWasteType,
  };
};
