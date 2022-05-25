import { useDispatch,useSelector } from 'react-redux';
import { getAllRecyclerMarkers } from '../services/map/map-services';
import { actionGetAllMarkers } from '../store/map/action';
import {getToken} from "../store/user/selector"

let promise;
export const useAllMarkers = () => {
  const dispatch = useDispatch();
  const token = useSelector(getToken)
  
  if (!promise) {
    promise = getAllRecyclerMarkers(token).then(res =>
      dispatch(actionGetAllMarkers(res.data))
    );
  }
};
