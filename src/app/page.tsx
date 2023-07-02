"use client";

import ApiResults from "./services/api_provider";
import SearchBar from "./components/searchbar";
import { useState } from "react";
import { CardContend } from "./types/card";
import { loadPosts } from "./services/api_provider1";

export default function Home() {
  const [busca, setBusca] = useState<String | null>(null);
  const [plataforma, setPlataforma] = useState<String | null>(null);
  const [data, setData] = useState<CardContend[]>([]);

  const getBusca = async (busca: String, plataforma: String) => {
    const response = await fetch(
      `http://localhost:8000/${plataforma}?busca=${busca}`
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
      <body className="content-center">
        <div className="place-content-center">
          <div>
            <SearchBar getBusca={getBusca} />
            {(data && <ApiResults data={data} />) || (
              <h1 className="text-red-500 text-xl">Carregando...</h1>
            )}
          </div>
        </div>
      </body>
    </main>
  );
}
