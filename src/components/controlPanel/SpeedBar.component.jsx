
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateArray } from "../../states/actions";

export default function SpeedBar({ setConfig }) {
  const dispatch = useDispatch();

  return (
    <>
      <h3>Change Speed and Array Size </h3>
      <div id="speedBar">
        <></>
      </div>
    </>
  );
}
