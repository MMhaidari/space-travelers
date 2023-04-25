import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMissions } from "../redux/mission/missionSlice";

const Mission = () => {
  const dispatch = useDispatch();
  dispatch(getMissions());
  const books = useSelector((store) => store.mission);
  return <div>mission page</div>;
};

export default Mission;
