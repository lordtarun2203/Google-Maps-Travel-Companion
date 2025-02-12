import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY, // Updated API key
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com", // Host is the same
        },
      }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

