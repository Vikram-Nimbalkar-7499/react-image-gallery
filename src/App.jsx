
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./component/Card";
import Buttons from "./component/Buttons";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await axios.get(
          `https://picsum.photos/v2/list?page=${index}&limit=10`
        );

        setUserData(response.data);
      } catch (err) {
        setError("Failed to load images. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [index]);

  return (
    <div className="min-h-screen bg-black p-6 text-white lg:p-10">
      <h1 className="mb-6 text-3xl font-bold">My Gallery</h1>

      {loading ? (
        <p className="py-20 text-center text-gray-400">
          Loading images...
        </p>
      ) : error ? (
        <p className="py-20 text-center text-red-400">{error}</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-4">
          {userData.map((elem) => (
            <Card key={elem.id} elem={elem} />
          ))}
        </div>
      )}

      <Buttons
        index={index}
        setIndex={setIndex}
        loading={loading}
      />
    </div>
  );
};

export default App;
