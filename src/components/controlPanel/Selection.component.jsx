import React from "react";
import { updateAlgorithm } from "../../states/actions";
import { useDispatch } from "react-redux";

const sortingType = [
  { sortType: "bubbleSort", name: "Bubble Sort" },
  { sortType: "quickSort", name: "Quick Sort" },
  { sortType: "mergeSort", name: "Merge Sort" },
];

/*
dispatch algorithm to store upon selecting an algorithm
*/

export default function Selection({ config, setConfig }) {
  const dispatch = useDispatch();
  return (
    <>
      {sortingType.map((el) => (
        <h3
          id={el.sortType}
          onClick={() => dispatch(updateAlgorithm(el.sortType))}
        >
          {el.name}
        </h3>
      ))}
    </>
  );
}
