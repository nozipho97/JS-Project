let books = [
    {   id:1,
        description:"",
        productName:"Finding Me ",
        Image: ""
    },
    {   id:2,
        description:"",
        productName:"Find your Truth ",
        Image: "/images/water 1.jpg"
    },
    {   id:3,
        description:"",
        productName:"The Mind Of The Leader ",
        Image: "/images/oil2.jpg"
    },
    {   id:4,
        description:"",
        productName:"Time ",
        Image: "/images/ren 1.jpg"
    },
    ]
    function diplayBook(){
        products.forEach((books)=>{
            document.querySelector(".container").innerHTML+=
            `<div class="container ">
              <div class="card" style="width: 18rem;">
            <img src="${books.Image}" class="card-img-top img-thumbnail" style="height: 25rem;" >
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
         <p class="card-text">text</p>
        <a href="#" class="btn btn-primary">Go to checkout</a>
      </div>
            </div>
          </div>`
        })
    }
    diplayBook();
    
    
    
    
    
    
    
    


























// let books = [];
// let selling = document.querySelector('.button');

// selling.addEventListener('click', (e) => {
//     e.preventDefault();
//     let tittle = document.querySelector('#tittle').value;
//     let author = document.querySelector('#author').value;
//     let synopsis = document.querySelector('#synopsis').value;

//     books.push(
//         {
//         tittle,
//         author,
//         synopsis
//         }
//     )
//     // console.log(people);

//     // Local Storage

//     localStorage.setItem('data', JSON.stringify(people));
// })

// // dIsplay
// display.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(JSON.parse(localStorage.getItem('data'))
//     );

// })














// let myBooks = {
//     tittle: 'Finding Me',
//     author: 'Viloa Davis',
//     Synopsis:'Finding Me is a deep reflection, a promise, and a love letter of sorts to self. My hope is that my story will inspire you to light up your own life with creative expression and rediscover who you were before the world put a label on you.'
// }