import { useState, useRef, useEffect } from "react";
import React from "react";
import Blocks from "./Blocks";
import AddSettings from "./AddSettings";
import { setTimeout } from "timers-promises";

const worker = new Worker("./workers/worker.js");

export interface IState {
  blocks: {
    height: number;
    key: number;
    color: string;
  }[];
}

function Home() {
  const [blocks, setBlocks] = useState<IState["blocks"]>([
    {
      height: 116,
      key: 0,
      color: "black",
    },
    {
      height: 22,
      key: 1,
      color: "black",
    },
    {
      height: 45,
      key: 2,
      color: "black",
    },
    {
      height: 92,
      key: 3,
      color: "black",
    },
    {
      height: 18,
      key: 4,
      color: "black",
    },
    {
      height: 112,
      key: 5,
      color: "black",
    },
    {
      height: 54,
      key: 6,
      color: "black",
    },
    {
      height: 6,
      key: 7,
      color: "black",
    },
    {
      height: 190,
      key: 8,
      color: "black",
    },
    {
      height: 48,
      key: 9,
      color: "black",
    },
    {
      height: 164,
      key: 10,
      color: "black",
    },
    {
      height: 107,
      key: 11,
      color: "black",
    },
    {
      height: 62,
      key: 12,
      color: "black",
    },
    {
      height: 93,
      key: 13,
      color: "black",
    },
    {
      height: 100,
      key: 14,
      color: "black",
    },
    {
      height: 179,
      key: 15,
      color: "black",
    },
    {
      height: 138,
      key: 16,
      color: "black",
    },
    {
      height: 84,
      key: 17,
      color: "black",
    },
    {
      height: 33,
      key: 18,
      color: "black",
    },
    {
      height: 166,
      key: 19,
      color: "black",
    },
    {
      height: 31,
      key: 20,
      color: "black",
    },
    {
      height: 186,
      key: 21,
      color: "black",
    },
    {
      height: 104,
      key: 22,
      color: "black",
    },
    {
      height: 74,
      key: 23,
      color: "black",
    },
    {
      height: 135,
      key: 24,
      color: "black",
    },
    {
      height: 157,
      key: 25,
      color: "black",
    },
    {
      height: 17,
      key: 26,
      color: "black",
    },
    {
      height: 183,
      key: 27,
      color: "black",
    },
    {
      height: 63,
      key: 28,
      color: "black",
    },
    {
      height: 133,
      key: 29,
      color: "black",
    },
    {
      height: 145,
      key: 30,
      color: "black",
    },
    {
      height: 51,
      key: 31,
      color: "black",
    },
    {
      height: 193,
      key: 32,
      color: "black",
    },
    {
      height: 78,
      key: 33,
      color: "black",
    },
    {
      height: 167,
      key: 34,
      color: "black",
    },
    {
      height: 160,
      key: 35,
      color: "black",
    },
    {
      height: 181,
      key: 36,
      color: "black",
    },
    {
      height: 129,
      key: 37,
      color: "black",
    },
    {
      height: 165,
      key: 38,
      color: "black",
    },
    {
      height: 65,
      key: 39,
      color: "black",
    },
    {
      height: 108,
      key: 40,
      color: "black",
    },
    {
      height: 116,
      key: 41,
      color: "black",
    },
    {
      height: 186,
      key: 42,
      color: "black",
    },
    {
      height: 124,
      key: 43,
      color: "black",
    },
    {
      height: 116,
      key: 44,
      color: "black",
    },
    {
      height: 82,
      key: 45,
      color: "black",
    },
    {
      height: 50,
      key: 46,
      color: "black",
    },
    {
      height: 100,
      key: 47,
      color: "black",
    },
    {
      height: 184,
      key: 48,
      color: "black",
    },
    {
      height: 12,
      key: 49,
      color: "black",
    },
  ]);
  const [inProgress, setInProgress] = useState(false);

  const inputSpeedValue = useRef<HTMLInputElement | null>(null);
  const algoValue = useRef<HTMLSelectElement | null>(null);

  const newBlocks = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentInput = e.target.value;

    const blockNumber = currentInput && parseInt(currentInput);
    const maxHeight = 200;
    const BlocksHeight = [];
    for (let i = 0; i < blockNumber; i++) {
      BlocksHeight.push({
        height: Math.floor(Math.random() * maxHeight),
        key: i,
        color: "black",
      });
    }
    setBlocks(BlocksHeight);
  };

  const startSorting = (): void => {
    callSorting(
      algoValue.current && algoValue.current.value,
      inputSpeedValue.current && inputSpeedValue.current.value
    );
  };

  const bubbleSort = async (speed: number) => {
    setInProgress(true);
    console.log("dick");

    worker.postMessage("test");

    const sortedBlocks = [...blocks];
    //Outer pass
    for (let i = 0; i < sortedBlocks.length; i++) {
      //Inner pass
      for (let j = 0; j < sortedBlocks.length - i - 1; j++) {
        //Value comparison using ascending order

        if (sortedBlocks[j + 1].height < sortedBlocks[j].height) {
          //Swapping
          sortedBlocks[j].color = "purple";

          [sortedBlocks[j + 1], sortedBlocks[j]] = [
            sortedBlocks[j],
            sortedBlocks[j + 1],
          ];

          setBlocks(sortedBlocks);
          await setTimeout(speed);
        }
      }
    }
    setInProgress(false);
  };

  const insertionSort = async (speed: number) => {
    setInProgress(true);
    const sortedBlocks = [...blocks];

    //Start from the second element.
    for (let i = 1; i < sortedBlocks.length; i++) {
      //Go through the elements behind it.
      for (let j = i - 1; j > -1; j--) {
        //value comparison using ascending order.
        if (sortedBlocks[j + 1].height < sortedBlocks[j].height) {
          sortedBlocks[j].color = "purple";

          //swap
          [sortedBlocks[j + 1], sortedBlocks[j]] = [
            sortedBlocks[j],
            sortedBlocks[j + 1],
          ];

          setBlocks(sortedBlocks);
          await setTimeout(speed);
        }
      }
    }
    setInProgress(false);
  };

  const selectionSort = async (speed: number) => {
    setInProgress(true);
    let min;
    const sortedBlocks = [...blocks];

    //start passes.
    for (let i = 0; i < sortedBlocks.length; i++) {
      //index of the smallest element to be the ith element.
      min = i;

      //Check through the rest of the sortedBlocksay for a lesser element
      for (let j = i + 1; j < sortedBlocks.length; j++) {
        if (sortedBlocks[j].height < sortedBlocks[min].height) {
          min = j;
        }
      }

      //compare the indexes
      if (min !== i) {
        //swap

        sortedBlocks[i].color = "purple";
        [sortedBlocks[i], sortedBlocks[min]] = [
          sortedBlocks[min],
          sortedBlocks[i],
        ];

        setBlocks(sortedBlocks);
        await setTimeout(speed);
      }
    }

    setInProgress(false);
  };

  const callSorting = (func: string | null, speed: string | null) => {
    console.log(func);

    for (let i = 0; i < 2; i++) {
      switch (func) {
        case "bubbleSort":
          speed && bubbleSort(520 - parseInt(speed));
          break;
        case "insertionSort":
          speed && insertionSort(520 - parseInt(speed));
          break;
        case "selectionSort":
          speed && selectionSort(520 - parseInt(speed));
          break;
      }
    }
  };

  const renderBlocks = (): JSX.Element[] => {
    return blocks.map((block) => {
      return <Blocks key={block.key} block={block} />;
    });
  };

  return (
    <section className="container mx-auto">
      <div>
        <h1 className="text-5xl text-center font-bold">Sorting visualizer</h1>
        <section className="flex items-end justify-center gap-1 mt-5 min-h-[200px]">
          {renderBlocks()}
        </section>
        <section>
          <AddSettings
            inputSpeedValue={inputSpeedValue}
            algoValue={algoValue}
            newBlocks={newBlocks}
            startSorting={startSorting}
            inProgress={inProgress}
          />
        </section>
      </div>
    </section>
  );
}

export default Home;
