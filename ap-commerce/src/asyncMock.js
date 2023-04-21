const products = [
  {
    id: "1",
    name: "RTX4080",
    price: 1100,
    category: "GPU",
    img: "https://s3-sa-east-1.amazonaws.com/saasargentina/JYj5RHJbadwGguYxytmD/imagen",
    stock: 20,
    description:
      "Placa de Video MSI NVIDIA GeForce RTX 4080 Gaming X Trio 16GB GDDR6X",
  },

  {
    id: "2",
    name: "RTX4090",
    price: 1100,
    category: "GPU",
    img: "https://http2.mlstatic.com/D_NQ_NP_872358-MLA54271916473_032023-O.webp",
    stock: 20,
    description:
      "Placa de Video MSI NVIDIA GeForce RTX 4090 Gaming X Trio 16GB GDDR6X",
  },
  {
    id: "1",
    name: "RTX4070",
    price: 1100,
    category: "GPU",
    img: "https://http2.mlstatic.com/D_NQ_NP_988301-MLA53777341777_022023-O.webp",
    stock: 20,
    description:
      "Placa de Video MSI NVIDIA GeForce RTX 4070 Gaming X Trio 16GB GDDR6X",
  },
  {
    id: "1",
    name: "I9-13900K",
    price: 1100,
    category: "CPU",
    img: "https://hardcorecomputacion.com.ar/wp-content/uploads/2023/01/41rGgIVGb8L._AC_SY580_.jpg",
    stock: 20,
    description:
      "Placa de Video MSI NVIDIA GeForce RTX 4080 Gaming X Trio 16GB GDDR6X",
  },

  {
    id: "2",
    name: "I5-13600K",
    price: 1100,
    category: "CPU",
    img: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-intel-core-i513600k-scooler-s1700-box-0.jpg",
    stock: 20,
    description:
      "Placa de Video MSI NVIDIA GeForce RTX 4090 Gaming X Trio 16GB GDDR6X",
  },
  {
    id: "1",
    name: "ASUS ROG",
    price: 1100,
    category: "MB",
    img: "https://logg.api.cygnus.market/static/logg/Global/Motherboard%20ASUS%20ROG%20STRIX%20B550-XE%20GAMING%20WIFI%20AMD%20AM4/b4c92456f8bc44e9a246b08caa00dc0a.webp",
    stock: 20,
    description:
      "Placa de Video MSI NVIDIA GeForce RTX 4070 Gaming X Trio 16GB GDDR6X",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};
export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === category));
    }, 500);
  });
};
