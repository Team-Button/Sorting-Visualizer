import React from "react";
import { updateAlgorithm } from "../../states/actions";
import { useDispatch } from "react-redux";

const sortingType = [
  { sortType: "BUBBLE_SORT", name: "Bubble Sort" },
  { sortType: "QUICK_SORT", name: "Quick Sort" },
  { sortType: "MERGE_SORT", name: "Merge Sort" },
  { sortType: "INSERTION_SORT", name: "Insertion Sort" },
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
