
const container = document.getElementById('WoodCases');



////////////////////////////////////////DATA FETCHED FOR WOOD CASES SECTION//////////////////////////////////////////////
function GetWoodCasesDataFromServer(){

    fetch("http://localhost:3000/WoodCases")
    .then((res)=>res.json())
    .then((data)=>{
        CardList(data);
    })
    .catch((err)=>console.log(err))


}
GetWoodCasesDataFromServer();

function CardList(data){

    let CardData=data.map((el)=>Card(el.images,el.title,el.id)).join("");
    container.innerHTML += CardData;
    console.log(data);

}

function Card(images,title,id){

    let WDcase =`
     <div class="col-6 col-md-3">
    
      <a href=/Pages/description.html?id=${encodeURIComponent(id)} style="text-decoration:none;color:#243045"><img src="${images}" class="img-fluid rounded shadow-sm" alt="Walnut">
        <p class="mt-2 fw-medium">${title}</p>
       </a>
      </div>`;
      return WDcase;

}
// ///////////////////////////////////////DATA FETCHED FOR LEATHER CASES/////////////////////////////////////////////////
const LeatherContainer = document.getElementById('LeatherCases')

function GetLeathercaseDataFromServer(){
    fetch("http://localhost:3000/LeatherCases")
    .then((res)=>res.json())
    .then((data)=>{
        LeatherCardList(data)
    })
    .catch((err)=>console.log(err))

}
GetLeathercaseDataFromServer();
console.log(GetLeathercaseDataFromServer)

function LeatherCardList(data){

     let LeatherCardData= data.map((e)=>LeatherCard(e.images,e.title, e.id)).join("");
    LeatherContainer.innerHTML = LeatherCardData;
    console.log(data);
}

function LeatherCard(images,title,id){

    let LDcase=`
    <div class="col-6 col-md-3">
       <a href=/Pages/description.html?id=${encodeURIComponent(id)} style="text-decoration:none;color:#243045"><img src="${images}" class="img-fluid rounded shadow-sm" alt="Walnut">
        <p class="mt-2 fw-medium">${title}</p></a>
      </div>
    `
    return LDcase;
}
// ////////////////////////////////////////////////////////DATA FETCHED FOR MACBOOK SKINS///////////////////////////////////////////////////////

const MacBookCaseContainer = document.getElementById('caseContainer');

function GetMacBookCaseDataFromServer(){

    fetch("http://localhost:3000/MacBookCases")
    .then((res)=>res.json())
    .then((data)=>{
            MacBookCaseCardList(data)
    })
    .catch((err)=>console.log(err))
}
GetMacBookCaseDataFromServer();
console.log(GetMacBookCaseDataFromServer)

function MacBookCaseCardList(data){

    let MacBookCaseData = data.map((el)=>MacBookCaseCard(el.images, el.title, el.ratings, el.reviews, el.price, el.id)).join("");
    MacBookCaseContainer.innerHTML=MacBookCaseData;
    console.log(MacBookCaseData)
}
function MacBookCaseCard(images,title,ratings,price,reviews,id){

    let MacBookCaseHtml=`
    <div class="col-sm-6 col-md-4 mb-4">
        <div class="border p-3 h-100 position-relative">
        <a href=/Pages/description.html?id=${encodeURIComponent(id)} style="text-decoration:none;color:black;">  <img src="${images}" alt="${title}" class="img-fluid mb-3 rounded">
          <h6 class="mb-1">${title}</h6>
          <div class="text-warning mb-1">
            <p>⭐⭐⭐⭐⭐</p> <small class="text-muted">(${reviews})</small>
          </div>
          <p class="mb-0 fw-semibold"></a>
          $${price}
          </p>
        </div>
      </div>`;
      return MacBookCaseHtml;

}




/////////////////////////////////////////////////////////DATA FETCHED FOR MACBOOKSKIN/////////////////////////////////////////////////////////

const MacBookSkinContainer = document.getElementById('skinContainer')

function GetMacBookSkinDataFormServer(){
    fetch("http://localhost:3000/MacBookSkins")
    .then((res)=>res.json())
    .then((data)=>
    MAcBookSkinCardList(data))
    .catch((err)=>console.log(err))

}
GetMacBookSkinDataFormServer();

function MAcBookSkinCardList(data){

    let MacBookSkinData= data.map((el)=>MacBookSkinCard(el.images, el.title, el.ratings, el.reviews, el.price, el.id)).join("");

    MacBookSkinContainer.innerHTML= MacBookSkinData;

}

function MacBookSkinCard(images,title,ratings,reviews,price,id){

    let MacBookSkinHTML= `
    <div class="col-sm-6 col-md-4 mb-4">
      <a href=/Pages/description.html?id=${encodeURIComponent(id)} style="text-decoration:none;color:black;">
        <div class="border p-3 h-100 position-relative">
          <img  src="${images}" alt="${title}" class="img-fluid mb-3 rounded">
          <h6 class="mb-1">${title}</h6>
          <div class="text-warning mb-1">
            <p>${ratings}</p> <small class="text-muted">(${reviews})</small>
          </div>
          <p class="mb-0 fw-semibold">
           $ ${price} 
          </p>
        </div>
      </a>
    </div>
    `
    return MacBookSkinHTML;
}
////////////////////////////////////////////////DATA FETCHED FOR MACAACCESSORIES//////////////////////////////////////////

const MacAccessoriesContainer = document.getElementById('AccessoriesContainer')

function GetMacAccessoriesDataFromServer(){

    fetch("http://localhost:3000/MacAccessories")
    .then((res)=>res.json())
    .then((data)=>{
        MacAccessoriesCardList(data)
    })
    .catch((err)=>console.log(err))
}

GetMacAccessoriesDataFromServer();
function MacAccessoriesCardList(data){

    let MacAccessoriesCardData = data.map((el)=>
        MacAccessoriesCard(el.images, el.title, el. ratings, el.reviews, el.price, el.id)).join("");
    MacAccessoriesContainer.innerHTML=MacAccessoriesCardData;

}

function MacAccessoriesCard(images,title,ratings,reviews,price,id){

    let MacAccessoriesHTML=`
    <div class="col-6 col-md-3">
      <div class="border">
        <a href=/Pages/description.html?id=${encodeURIComponent(id)} style="text-decoration:none;color:black;"><img src="${images}" alt="${title}" class="img-fluid">
        <div class="p-2">
          <p class="mb-1 fw-medium">${title}</p>
          <p class="mb-1 text-warning small">${ratings}<span class="text-muted">${reviews}</span></p>
          <p class="fw-semibold mb-0">$${price}</p></a>
        </div>
      </div>
    </div>
    `
return MacAccessoriesHTML;
}
// ////////////////////////////////////////////////DATA FETCHED FOR IPHONE CASES//////////////////////////////////////////////////////////////

const IphoneCaseContainer = document.getElementById('IphoneCaseContainer');

function GetIphoneCaseDataFromServer(){

    fetch("http://localhost:3000/IphoneCases")
    .then((res)=>res.json())
    .then((data)=>{
        IphoneCaseCardList(data)

    })
    .catch((err)=>console.log(err))
}

GetIphoneCaseDataFromServer();

function IphoneCaseCardList(data){

    let IPhoneCaseData= data.map((el)=>IphoneCaseCard(el.images, el.title, el.ratings, el.reviews, el.price, el.id)).join("");

    IphoneCaseContainer.innerHTML=IPhoneCaseData;
}

function IphoneCaseCard(images,title,ratings,reviews,price,id)
{
    let IphoneCaseHTML=`
     <div class="col-6 col-md-3">
      <div class="border">
        <a href=/Pages/description.html?id=${encodeURIComponent(id)} style="text-decoration:none;color:black;"><img src="${images}" alt="${title}" class="img-fluid">
        <div class="p-2">
          <p class="mb-1 fw-medium">${title}</p>
          <p class="mb-1 text-warning small">${ratings}<span class="text-muted">${reviews}</span></p>
          <p class="fw-semibold mb-0">$${price}</p></a>
        </div>
      </div>
    </div>
    `;
    return IphoneCaseHTML;
}

/////////////////////////////////////////////////////DATA FETCHED FOR IPAD SKIN //////////////////////////////////////////////////////////////

const IpadSkinContainer = document.getElementById('IpadSkinContainer');

function GetIpadSkinDataFromServer(){

    fetch("http://localhost:3000/IpadSkins")
    .then((res)=>res.json())
    .then((data)=>{
        IpadSkinCardList(data)
    })
    .catch((err)=>console.log(err))
}
GetIpadSkinDataFromServer();

function IpadSkinCardList(data){

    let IpadSkinData = data.map((el)=>IpadSkinCard(el.images, el.title, el.ratings, el.reviews, el.price, el.id)).join("")
    IpadSkinContainer.innerHTML+=IpadSkinData;

}


function IpadSkinCard(images,title,ratings,reviews,price,id){

    let IpadSkinHTML=`
    <div class="col-6 col-md-3">
      <div class="border">
        <a href=/Pages/description.html?id=${encodeURIComponent(id)} style="text-decoration:none;color:black;"><img src="${images}" alt="${title}" class="img-fluid">
        <div class="p-2">
          <p class="mb-1 fw-medium">${title}</p>
          <p class="mb-1 text-warning small">${ratings}<span class="text-muted">${reviews}</span></p>
          <p class="fw-semibold mb-0">$${price}</p></a>
        </div>
      </div>
    </div>
    `
    return IpadSkinHTML;
}