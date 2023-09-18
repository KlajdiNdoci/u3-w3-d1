export const GET_JOBS = "GET_JOBS";
export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";

export const addFavouriteAction = arr => ({ type: ADD_TO_FAVOURITE, payload: arr });
export const removeFavouriteAction = fav => ({ type: REMOVE_FROM_FAVOURITE, payload: fav });

export const searchJobsAction = query => {
  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
  const limit = "&limit=20";
  return async dispatch => {
    try {
      const response = await fetch(baseEndpoint + query + limit);
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: GET_JOBS, payload: data });
      } else {
        throw new Error("Error fetching results");
      }
    } catch (error) {
      throw error;
    }
  };
};

export const getJobsAction = params => {
  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  return async dispatch => {
    try {
      const response = await fetch(baseEndpoint + params.company);
      console.log(params);
      if (response.ok) {
        const { data } = await response.json();
        // setJobs(data);
        dispatch({ type: GET_JOBS, payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
