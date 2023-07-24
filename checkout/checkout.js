let checkOutList = 
   [
      {
        id: 1,
        tittle: "Finding me",
        isnb: "9780063037335",
        price:"R450"
      },
      {
        id: 2,
        tittle: "Finding your Truth",
        isnb: "9658423558003", 
        price: "R360",
      },
      {
        id: 3,
        tittle:"The Mind Of The Leader ",
        isnb: "9852364025822",
        price: "R450",
      },
      {
        id: 4,
        tittle:"Dream Land",
        isnb: "9852658532689",
        price: "R200",
      },
      {
        id: 5,
        tittle:"The Silent Patient",
        isnb: "9569877103258",
        price: "R169",
      },
      {
        id: 6,
        tittle:"Our Poisoned Land",
        isnb: "6254865999632",
        price: "R229",
      },
      {
        id: 7,
        tittle:"Elizabeth and Phillip",
        isnb: "9524699874236",
        price: "R299",
      },
      {
        id: 8,
        tittle:"Hunting Time",
        isnb: "6325987742330",
        price: "R275",
      },
      {
        id: 9,
        tittle:"Love on the brain",
        isnb: "66325698564855",
        price: "R189",
      },
      {
        id: 10,
        tittle:"November 9",
        isnb: "98546321589964",
        price: "R129",
      }
  ];
    
  let checkOut = JSON.parse(localStorage.getItem('checkOutList')) ?
  JSON.parse(localStorage.getItem('checkOutList')) : 
  JSON.parse( 
      localStorage.setItem("checkOutList", JSON.stringify(checkOutList))
  );
// function showCheckOut() {
//   if()
// }

function checkout() {
  checkOutList.forEach((checkOutList) => {
    document.querySelector(".books").innerHTML +=
      
    
          `<tr>
          <th scope="row">${checkOutList.id}</th>
          <td>${checkOutList.tittle}</td>
          <td>${checkOutList.isnb}</td>
          <td>${checkOutList.price}</td>
        </tr>
      `;
      tableDisplay();
  });
}



        
        
        
        

// const tsTittles = ([id1, id2, id3, id7]) => {
//   return ` <div class="tsTittles">
//               <div id="1">
//               <img src=${books.images}
//               </div>
//               <div id="2">
//               <img src=${books.images}
//               </div>
//               <div id="3">
//               <img src=${books.images}
//               </div>
//               <div id="7">
//               img src=${books.images}
//               </div>
//               </div>
//             </div>`
// }
// tableDisplay();