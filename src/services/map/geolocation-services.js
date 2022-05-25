import axios from 'axios';

const API_URL = 'https://api.maptiler.com/geocoding';
//Params
const KEY = process.env.REACT_APP_API_KEY;
const LANGUAGE = 'es';

const MINX = '-16.928689,';
const MINY = '27.980321,';

const MAXX = '-16.106431,';
const MAXY = '28.591623';

const getCoordinatesFromAddress = address => {
  return axios.get(
    `${API_URL}/${address}.json?bbox=${(MINX + MINY + MAXX + MAXY).split(',')}&language=${LANGUAGE}&key=${KEY}`
  );
};

export { getCoordinatesFromAddress };
