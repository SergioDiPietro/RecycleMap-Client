import { createSelector } from 'reselect';
import { getUserId } from '../user/selector';

export const getMarker = (state, { markerId }) => getMarkers(state)[markerId];
export const getMarkers = state => state.mapReducer.markers;
export const getMarkersIds = state => state.mapReducer.markersIds;
export const getCityValue = state => state.mapReducer.cityValue;
export const getWasteTypeValue = state => state.mapReducer.wasteTypeValue;
export const getFilterWasteType = state => state.mapReducer.filterWasteType;
export const getIsEditingMarker = state => state.mapReducer.isEditingMarker;
export const getMarkerToEdit = state => state.mapReducer.markerToEdit;

export const getMarkersByUserId = createSelector(
  [getMarkers, getUserId],
  (markers, userId) => {
    return Object.values(markers).filter(marker => userId === marker.UserId);
  }
);

export const getMarkersByWasteType = createSelector(
  [getMarkers, getFilterWasteType],
  (markers, filterWasteType) => {
    if (filterWasteType === '') {
      return Object.values(markers);
    } else {
      return Object.values(markers).filter(
        marker => filterWasteType === marker.wasteType
      );
    }
  }
);
