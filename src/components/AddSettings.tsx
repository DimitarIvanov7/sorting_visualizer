import React, { LegacyRef } from "react";

interface PropTypes {
  inputSpeedValue: LegacyRef<HTMLInputElement>;
  newBlocks: (e: React.ChangeEvent<HTMLInputElement>) => void;
  algoValue: React.MutableRefObject<HTMLSelectElement>;
  startSorting: () => void;
  inProgress: boolean;
}

const AddSettings: React.FC<PropTypes> = ({
  inputSpeedValue,
  algoValue,
  newBlocks,
  startSorting,
  inProgress,
}) => {
  return (
    <div className="mt-10">
      <p className="text-4xl text-center">Select sorting algorithm</p>
      <div className="mx-auto mt-10 flex justify-center gap-10">
        <div className="flex flex-col">
          <label className="text-center mb-1" htmlFor="size">
            Size
          </label>
          <input
            className="border border-black"
            onChange={(e) => newBlocks(e)}
            type="range"
            min="10"
            max="100"
            id="size"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-center mb-1" htmlFor="speed">
            Speed
          </label>
          <input
            className="border border-black"
            type="range"
            ref={inputSpeedValue}
            min="20"
            max="520"
            id="speed"
          />
        </div>
        <select
          className="border border-black cursor-pointer"
          name="algo"
          id=""
          ref={algoValue}
        >
          <option value="bubbleSort" selected>
            Bubble Sort
          </option>
          <option value="insertionSort">Insertion Sort</option>
          <option value="selectionSort">Selection Sort</option>
        </select>
        <button
          onClick={() => {
            startSorting();
          }}
          disabled={inProgress}
          className="bg-slate-600 text-white px-3 py-1 rounded-sm text-2xl hover:bg-slate-900 transition ease delay-150"
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default AddSettings;
