import axios from "axios";
import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from "./types";

//GET LEADS
export const getLeads = () => dispatch => {
  axios.get("/api/list/").then(res => {
    dispatch({
      type: GET_LEADS,
      payload: res.data
    });
  });
};

//DELETE LEAD
export const deleteLead = id => dispatch => {
  axios.delete(`/api/list/${id}`).then(res => {
    dispatch({
      type: DELETE_LEAD,
      payload: id
    });
  });
};

//ADD LEAD
export const addLead = lead => dispatch => {
  axios.post("/api/list/", lead).then(res => {
    dispatch({
      type: ADD_LEAD,
      payload: res.data
    });
  });
};
