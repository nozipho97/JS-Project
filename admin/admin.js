let products = JSON.parse(localStorage.getItem(".products "))
  ? JSON.parse(localStorage.getItem("#.products"))
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
          </tr>
        `;
  });
}
tableDisplay();

//function Adding
function validateForm() {
  let title = document.getElementById("title").value;
  let id = document.getElementById("id").value;
  let isbn = document.getElementById("isnb").value;
  let price = document.getElementById("price").value;
}
function showData(){
  var bookList;
  if (localStorage.getItem("bookList") == null){
    bookList =[];
  }
  else{
    bookList = JSON.parse(localStorage.getItem("bookList"))
  }
  var html = "";

  bookList.forEach(function (element,index)
  {
    html += "<tr>";
    html += "<td>" + element.number + "</td>";
    html += "<td>" + element.name + "</td";
    html += "<td>" + element.title + "/td";
    html += "<td>" + element.price + "/td";
    html += `<td><button onclick="deleteData('+index+')"
    class"btn btn-dark">Delete</button>`
  });

}
