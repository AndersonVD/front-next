/* eslint-disable @next/next/no-img-element */
"use client";

import axios from "axios";
import { useEffect, useState } from "react";

type CardContend = {
  id: number;
  title: String;
  // price: String | null; TODO:1 Reativar os itens extrar quando criar o ternário
  // time_ago: String | null;
  image: String;
  link: String;
};

function ApiResults() {
  const [data, setData] = useState<CardContend[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:8000/meli");
        setData(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    // Cria o componente a ser utilizado para o card.
    <div className="flex-auto  justify-center">
      {data.map((item) => (
        <>
          <br />
          <div className="flex justify-center">
            <a
              href={item.link as string}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:rounded-none md:rounded-l-lg"
                src={item.image as string}
                alt="Imagem do conteúdo"
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>
                {/* <p className="font-normal text-gray-700 dark:text-gray-400">
                  R$ {item.price}.00
                </p>   TODO:1 */}
              </div>
            </a>
          </div>
        </>
      ))}
    </div>
  );
}

export default function MyPage() {
  return (
    <div>
      {/* Other components or JSX */}
      <ApiResults />
      {/* Other components or JSX */}
    </div>
  );
}
