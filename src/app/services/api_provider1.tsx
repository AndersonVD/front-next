import axios from "axios";

const testeData = [
  {
    id: 1,
    title: "Salgadinho de Milho Queijo Nacho Doritos Pacote 300g",
    price: "22",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_675263-MLU48286472961_112021-V.webp",
    link: "https://www.mercadolivre.com.br/salgadinho-de-milho-queijo-nacho-doritos-pacote-300g/p/MLB18407378?pdp_filters=category:MLB1403#searchVariation=MLB18407378&position=2&search_layout=stack&type=product&tracking_id=f9c11da6-ed45-4eba-ac56-0b35bf400c6b",
  },
  {
    id: 2,
    title: "Salgadinho de Milho Queijo Nacho Doritos Pacote 300g",
    price: "22",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_675263-MLU48286472961_112021-V.webp",
    link: "https://www.mercadolivre.com.br/salgadinho-de-milho-queijo-nacho-doritos-pacote-300g/p/MLB18407378?pdp_filters=category:MLB1403#searchVariation=MLB18407378&position=2&search_layout=stack&type=product&tracking_id=f9c11da6-ed45-4eba-ac56-0b35bf400c6b",
  },
  {
    id: 3,
    title: "Salgadinho de Milho Queijo Nacho Doritos Pacote 300g",
    price: "22",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_675263-MLU48286472961_112021-V.webp",
    link: "https://www.mercadolivre.com.br/salgadinho-de-milho-queijo-nacho-doritos-pacote-300g/p/MLB18407378?pdp_filters=category:MLB1403#searchVariation=MLB18407378&position=2&search_layout=stack&type=product&tracking_id=f9c11da6-ed45-4eba-ac56-0b35bf400c6b",
  },
  {
    id: 4,
    title: "Salgadinho de Milho Queijo Nacho Doritos Pacote 300g",
    price: "22",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_675263-MLU48286472961_112021-V.webp",
    link: "https://www.mercadolivre.com.br/salgadinho-de-milho-queijo-nacho-doritos-pacote-300g/p/MLB18407378?pdp_filters=category:MLB1403#searchVariation=MLB18407378&position=2&search_layout=stack&type=product&tracking_id=f9c11da6-ed45-4eba-ac56-0b35bf400c6b",
  },
  {
    id: 5,
    title: "Salgadinho de Milho Queijo Nacho Doritos Pacote 300g",
    price: "22",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_675263-MLU48286472961_112021-V.webp",
    link: "https://www.mercadolivre.com.br/salgadinho-de-milho-queijo-nacho-doritos-pacote-300g/p/MLB18407378?pdp_filters=category:MLB1403#searchVariation=MLB18407378&position=2&search_layout=stack&type=product&tracking_id=f9c11da6-ed45-4eba-ac56-0b35bf400c6b",
  },
];

export async function loadPosts(busca: string) {
  const response = await axios.get(`http://localhost:8000/meli?busca=${busca}`);
  console.log(response.data.json());
  return response.data.json();
}
