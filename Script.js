

// DOM FOR MACBOOK CASES SECTION ONLY
const MacBookCases =[
  {
    title:"Wood MacBook Case",
    images:"/Images/S1.webp",
    ratings:5,
    price:"$119.00"
  },
  {
    title:"Wood MacBook Case",
    images:"/Images/balck.jpg",
    ratings:5,
    price:"$119.00"
  },{
    title:"Wood MacBook Case",
    images:"/Images/muticolor.webp",
    ratings:"5",
    price:"$119.00"
  }
]

const container=document.getElementById("productContainer");

MacBookCases.forEach(({ title, images, ratings, price }) => {
  const cases = `
    <div class="col-sm-6 col-md-4 mb-4">
     <a href="" style="text-decoration:none;color:black;"> <div class="border p-3 h-100 position-relative">
        <img src="${images}" alt="${title}" class="hrver img-fluid mb-3 rounded">
        <h6 class="mb-1">${title}</h6>
        <div class="text-warning mb-1">
          <p>⭐⭐⭐⭐⭐</p> <small class="text-muted">(${ratings})</small>
        </div>
        <p class="mb-0 fw-semibold">
          $${price} USD
        </p>
      </div></a>
    </div>
  `;
  container.innerHTML += cases;
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// DOM FORM MACBOOK SKINS ONLY
const MacBookSkins =[
  {
   title:"Leather MacBook Skins",
    image:"/Images/balck.jpg",
    ratings:5,
    price:"$119.00"

  },
  {
   title:"Leather MacBook Skins",
    image:"/Images/S1.webp",
    ratings:5,
    price:"$119.00"

  }
]


const contain = document.getElementById("skinContainer");

MacBookSkins.forEach(({image,title,ratings,price})=>{

  const SkinHTML=`
   <div class="col-sm-6 col-md-4 mb-4">
     <a href="" style="text-decoration:none;color:black;"> <div class="border p-3 h-100 position-relative">
        <img src="${image}" alt="${title}" class="hrver img-fluid mb-3 rounded">
        <h6 class="mb-1">${title}</h6>
        <div class="text-warning mb-1">
          <p>⭐⭐⭐⭐⭐</p> <small class="text-muted">(${ratings})</small>
        </div>
        <p class="mb-0 fw-semibold">
          $${price} USD
        </p>
      </div></a>
    </div>
  `
  contain.innerHTML += SkinHTML;
})