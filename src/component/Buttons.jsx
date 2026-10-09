
import React from "react";

const Buttons = ({ index, setIndex, loading }) => {
  return (
    <div className="flex items-center justify-center gap-6 p-6">
      <button
        className="rounded bg-amber-400 px-4 py-2 font-semibold text-black
                   active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={index === 1 || loading}
        onClick={() => setIndex((prev) => prev - 1)}
      >
        Prev
      </button>

      <h4>Page {index}</h4>

      <button
        className="rounded bg-amber-400 px-4 py-2 font-semibold text-black
                   active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={loading}
        onClick={() => setIndex((prev) => prev + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Buttons;
