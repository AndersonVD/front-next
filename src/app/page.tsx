"use client";

import ApiResults from "./services/api_provider";
import SearchBar from "./components/searchbar";
import { useState } from "react";
import { CardContend } from "./types/card";

export default function Home() {
  const [busca, setBusca] = useState<String | null>(null);
  const [plataforma, setPlataforma] = useState<String | null>(null);
  const [data, setData] = useState<CardContend[]>([]);

  const getBusca = async (busca: String, plataforma: String) => {
    const response = await fetch(
      // `http://localhost:8000/${plataforma}?busca=${busca}`
      `https://porti-api.onrender.com/${plataforma}?busca=${busca}`
    );
    const data = await response.json();
    if (data !== null) {
      setData(data);
      setBusca(data);
    } else {
      setData([]);
    }
    setBusca(data);
  };

  return (
    <main>
      <div className="place-content-center">
        <div>
          <SearchBar getBusca={getBusca} />
          {data && <ApiResults data={data} />}
        </div>
      </div>
    </main>
  );
}
