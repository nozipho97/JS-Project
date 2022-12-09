let products = JSON.parse(localStorage.getItem("#products "))
  ? JSON.parse(localStorage.getItem("#products"))
  : [
      {
        id: 1,
        tittle: "Finding me",
        isnb: "9780063037335",
        price: "R450",
      },
      {
        id: 2,
        tittle: "Finding your Truth",
        isnb: "9658423558003",
        price: "R360",
      },
      {
        id: 3,
        tittle: "The Mind Of The Leader ",
        isnb: "9852364025822",
        price: "R450",
      },
      {
        id: 4,
        tittle: "Dream Land",
        isnb: "9852658532689",
        price: "R200",
      },
      {
        id: 5,
        tittle: "Then She was gone",
        isnb: "9569877103258",
        price: "R169",
      },
      {
        id: 6,
        tittle: "The Wish",
        isnb: "6254865999632",
        price: "R229",
      },
      {
        id: 7,
        tittle: "Our Missing Hearts",
        isnb: "9524699874236",
        price: "R299",
      },
      {
        id: 8,
        tittle: "Horse",
        isnb: "6325987742330",
        price: "R275",
      },
      {
        id: 9,
        tittle: "Our Poisened Land",
        isnb: "66325698564855",
        price: "R189",
      },
      {
        id: 10,
        tittle: "November 9",
        isnb: "98546321589964",
        price: "R129",
      },
    ];
const price = [450, 360, 450, 200, 169, 229, 299, 275, 189, 129];

async function tableDisplay() {
  products.forEach((products) => {
    document.querySelector("#table-data").innerHTML += `
          <tr>
            <th scope="row">${products.id}</th>
            <td>${products.tittle}</td>
            <td>${products.isnb}</td>
            <td>${products.price}</td>
            <td><i class="fa fa-pencil" aria-hidden="false"></i><button>Edit<button></td>
            <td><button>Del<button></td>
          </tr>
        `;
  });
  
}
tableDisplay();

//delete

output.addEventListener('click', (e) => {
  e.preventDefault();
  let id = document.getElementById('')
  let title = document.getElementById('')
  let price = document.getElementById('')
  let isnb = document.getElementById('')
  // push an object into an array
  products.push(
    {
      id,
      tittle,
      price,
      isnb
    }
  )
  // local storage
  localStorage.setItem('data', JSON.stringify(products));
})
tableDisplay();







// let form = [{ tittle: "Finding me", price: "R450" }, { tittle: "Finding Your Truth", price: "R360" }]
// form.sort((tittle, price) => tittle.price - tittle.price);

// console.log(form);
//   console.table(form);



// form();
// let sortButton = document.querySelector("#form");
// sortButton.addEventListener("click", (e) => {
//   form();
//   tableDisplay();
// });
// const deleteBtn = document.querySelector(".del");

//   let cheapBooks = [];
//   for (let i = 0; i < price.length; i++) {
//     if (price[i] <= 200) {
//       cheapBooks.push(price[i]);
//     }
//   }


// console.log(cheapBooks)
// //sorting
// function sort() {
// const formed = products.sort(function (tittle1,tittle2) {
//   if (tittle1.start > tittle2.start) {
//     return 1
//   } else {
//     return -1
//   }
// })
// //}
// console.log(formed);

// // // console.log(cheapBooks);
// // //delete
// function clear(id) {
//   document.querySelector(del)
//   let products = JSON.parse(localStorage.getItem(products))
//   products.splice(id, 1)
//   localStorage.setItem('products',JSON.stringify(books))
// };
// del();
