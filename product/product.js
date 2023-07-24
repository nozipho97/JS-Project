let books = JSON.parse(localStorage.getItem(".books"))
  ? JSON.parse(localStorage.getItem(".books"))
  : [
      {
        id: 1,
        synopsis:
          "This book is all about Viola and her up bringing and tells us how she got to be the beautiful women we have grown to love.",
        tittle: "Finding Me ",
        Image: "https://i.postimg.cc/4d6RTXqK/top-selling-book1.webp",
        price: 450,
      },
      {
        id: 2,
        synopsis: "The history in greatest racehorse in America ",
        tittle: "Find your Truth",
        Image: "https://i.postimg.cc/NFbh5pgB/top-selling-book2.png",
        price: 360,
      },
      {
        id: 3,
        synopsis:
          " It's a realization and attitude that we can enhance due to neuroplasticity—our ability to shape our neural makeup",
        tittle: "The Mind Of The Leader ",
        Image: "https://i.postimg.cc/gjGFzfbg/top-selling-book3.webp",
        price: 450,
      },
      {
        id: 4,
        synopsis:
          "From the author of The Wish comes a poignant love story about risking everything for a dream—and whether it is possible to leave the past behind",
        tittle: "Dream Land",
        Image: "https://i.postimg.cc/2jxNc8nM/top-selling-book4.webp",
        price: 200,
      },
      {
        id: 5,
        synopsis:
          "From the author of The Wish comes a poignant love story about risking everything for a dream—and whether it is possible to leave the past behind",
        tittle: "Then She Was Gone",
        Image: "https://i.postimg.cc/9FWCCqWc/books3.webp",
        price: 169,
      },
      {
        id: 6,
        synopsis:
          "From the author of The Wish comes a poignant love story about risking everything for a dream—and whether it is possible to leave the past behind",
        tittle: "The Wish",
        Image: "https://i.postimg.cc/y881X35L/books4.webp",
        price: 229,
      },
      {
        id: 7,
        synopsis:
          "From the author of The Wish comes a poignant love story about risking everything for a dream—and whether it is possible to leave the past behind",
        tittle: "Our Missing Hearts",
        Image: "https://i.postimg.cc/wBS9pfBr/books.webp",
        price: 189,
      },
      {
        id: 8,
        synopsis:
          "From the author of The Wish comes a poignant love story about risking everything for a dream—and whether it is possible to leave the past behind",
        tittle: "Horse",
        Image: "https://i.postimg.cc/0QDP2YMy/books2.webp",
        price: 279,
      },
      {
        id: 9,
        synopsis:
          "From the author of The Wish comes a poignant love story about risking everything for a dream—and whether it is possible to leave the past behind",
        tittle: "Our Poisened Land",
        Image: "https://i.postimg.cc/fRyCdZc6/download-1.jpg",
        price: 189,
      },
      {
        id: 10,
        synopsis:
          "From the author of The Wish comes a poignant love story about risking everything for a dream—and whether it is possible to leave the past behind",
        tittle: "November 9",
        Image: "https://i.postimg.cc/hPpMhhdL/download.jpg",
        price: 129,
      },
    ];

function displayBook() {
  books.forEach((books) => {
    document.querySelector("#books").innerHTML += ` 
                    <div class="card" style="width: 18rem; display:flex;">
                        <img src="${books.Image}"alt="Card image cap">
                    <div class="card-body">
                      <h5 class="card-title">Title:${books.tittle}</h5>
                      <p class="card-text">Synopsis:${books.synopsis}</p>
                      <p class="card-text">Price:R${books.price}</p>
                      <a href="#" class="btn btn-dark">More details</a>
                    </div>
                    </div>
                      `;
  });
}
displayBook();

let products_serialized = JSON.stringify(books);
// console.log(products_serialized );
localStorage.setItem("books", products_serialized);
// console.log(localStorage);

const cheapBooks = [200, 169, 189, 129];
console.log(cheapBooks);

//sorting
const sortByPrice = document.getElementById("sortByPrice");
sortByPrice.addEventListener("click", (e) => {
  e.preventDefault();

  console.log(books);
  books.sort((x, y) => {
    console.log(x.price);
  });
  // displayBook();
});

//filtering
const bestSelling=[];{
  id='1',tittle='Finding Me',price='450',synopsis='This book is all about Viola and her up bringing and tells us how she got to be the beautiful women we have grown to love.'
  id='1',tittle='Find Your Truth',price='360',synopsis='The history in greatest racehorse in America '
  id='1',tittle='The Mind oF The Leader',price='450',synopsis="It's a realization and attitude that we can enhance due to neuroplasticity—our ability to shape our neural makeup"
  id='1',tittle='Dream Land',price='200',synopsis='From the author of The Wish comes a poignant love story about risking everything for a dream—and whether it is possible to leave the past behind'
};
const topSelling=bestSelling.filter(bestSelling=>bestSelling.id,bestSelling.tittle,bestSelling.price,bestSelling.synopsis=== 'tittle');

