"use client";

type BuscaProps = {
  getBusca: (busca: string, plataforma: String) => Promise<void>;
};

import { SetStateAction, useState, KeyboardEvent } from "react";
import { AiOutlineFileSearch } from "react-icons/ai";

export default function SearchBar({ getBusca }: BuscaProps) {
  // aqui vai os dados do JS
  const [busca, setBusca] = useState("");
  const [selectedRadio, setSelectedRadio] = useState("");

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      getBusca(busca, selectedRadio);
    }
  };

  const handleRadioChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelectedRadio(event.target.value);
  };

  return (
    <>
      <div className="flex justify-center">
        {/* crie um formulario que vai manar a busca digitada depois de apertar um bota */}

        <input
          className="font-serif text-2xl border-2 border-gray-300 bg-white h-10 px-8 pr-15 rounded-lg  focus:outline-none text-red-500 text-center"
          placeholder="Digite uma busca"
          type="text"
          onChange={(event) => setBusca(event.target.value)}
        />
        <button
          className="rounded-lg ml-3 w-32 h-10 bg-blue-600 font-bold text-white hover:bg-blue-700 transition duration-150 ease-out md:ease-in my-1"
          onClick={() => {
            getBusca(busca, selectedRadio);
          }}
          onKeyDown={() => handleKeyDown}
        >
          <div className="flex justify-center gap-2">
            <p className="font-bold text-gray-800 text-lg flex justify-center">
              Buscar
            </p>
            <AiOutlineFileSearch className=" text-base mt-2 flex text-gray-800" />
          </div>
        </button>
        <br />
        <div className="flex justify-center gap-y-5 gap-x-2">
          <input
            type="radio"
            value="g1"
            checked={selectedRadio === "g1"}
            onChange={handleRadioChange}
          />
          G1
          <input
            type="radio"
            value="meli"
            checked={selectedRadio === "meli"}
            onChange={handleRadioChange}
          />
          Mercado Livre
          <input
            type="radio"
            value="filmes"
            checked={selectedRadio === "filmes"}
            onChange={handleRadioChange}
          />
          Filmes
        </div>
      </div>
    </>
  );
}
