let products = JSON.parse(localStorage.getItem("#products "))
  ? JSON.parse(localStorage.getItem("#products "))
  : [
      {
        id: 1,
        synopsis:
          "This book is all about Viola and her up bringing and tells us how she got to be the beautiful women we have grown to love.",
        tittle: "Finding Me ",
        Image: "./assets/images/top_selling_book1.webp",
        price: "260",
      },
      {
        id: 2,
        synopsis: "The history in greatest racehorse in America ",
        tittle: "Find your Truth",
        Image: "./assets/images/top_selling_book2.png",
        price: "R200",
      },
      {
        id: 3,
        synopsis:
          " It's a realization and attitude that we can enhance due to neuroplasticity—our ability to shape our neural makeup",
        tittle: "The Mind Of The Leader ",
        Image: "./assets/images/top_selling_book3.webp",
        price: "R450",
      },
      {
        id: 4,
        synopsis:
          "From the author of The Wish comes a poignant love story about risking everything for a dream—and whether it is possible to leave the past behind",
        tittle: "Dream Land",
        Image: "./assets/images/top_selling_book4.webp",
        price: "R200",
      },
    ];

function displayBook() {
  products.forEach((products) => {
    document.querySelector(".products").innerHTML += ` 
                        <div class="col-4"
                    <div class="card" style="width: 18rem;">
                    <img src="${products.Image}" class="card-img-top img-thumbnail" style="height: 15rem;" >
                    <div class="card-body" height="6rem";>
                    <h3 class="card-title">Tittle: ${products.tittle}</h3>
                    <p class="card-text">Synopsis:${products.synopsis}</p>
                    <p class="card-text">Price:${products.price}</p>
                    <a href="#checkout" class="btn btn-warning">Add to checkout</a>
                    </div>
                    </div>
                    </div>
                  `;
  });
}
displayBook();
