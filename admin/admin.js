let products = JSON.parse(localStorage.getItem("#products "))
  ? JSON.parse(localStorage.getItem("#products "))
  : [
      {
        id: 1,
        tittle: "Finding me",
        isnb: "9780063037335",
        price:"R450"
      },
      {
        id: 2,
        synopsis: "The history in greatest racehorse in America ",
        tittle: "Find your Truth",
        price: "R200",
      },
      {
        id: 3,
        synopsis:
          " It's a realization and attitude that we can enhance due to neuroplasticity—our ability to shape our neural makeup",
        tittle: "The Mind Of The Leader ",
        price: "R450",
      },
      {
        id: 4,
        synopsis:
          "From the author of The Wish comes a poignant love story about risking everything for a dream—and whether it is possible to leave the past behind",
        tittle: "Dream Land",
        price: "R200",
      },
    ];

    async function  tableDisplay(){products.forEach((products)=> {
        document.querySelector("#table-content").innerHTML+=
        `
          <tr>
            <th scope="row">${products.id}</th>
            <td>${products.tittle}</td>
            <td>${products.isnb}</td>
            <td>${products.price}</td>
            <td></td>
          </tr>`
     })
     }
     tableDisplay();
    
    
    
    
    
    
    
    