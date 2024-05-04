
const foodList=
[
    {
    "id":1,
    "name":"chicken",
    "price":4000,
    "rate":4.3 ,
    "image":"../images/main/food1.png",
    "star_icon":"../images/main/star.png"
    
    },
    {
    "id":2,
    "name":"soup",
    "price":2000,
    "rate":4.6 ,
    "image":"../images/main/food2.png",
    "star_icon":"../images/main/star.png"
    
    
    }
    ,
    {
    "id":3,
    "name":"pizza",
    "price":5000,
    "rate":3.5 ,
    "image":"../images/main/food7.png",
    "star_icon":"../images/main/star.png"
    
    
    },
    {
    "id":4,
    "name":"pizza",
    "price":5000,
    "rate":3.5 ,
    "image":"../images/main/food5.png",
    "star_icon":"../images/main/star.png"
    
    },
    {
    "id":5,
    "name":"spaghetti",
    "price":5000,
    "rate":3.5 ,
    "image":"../images/main/food6.png",
    "star_icon":"../images/main/star.png"
    
    },
    {
    "id":6,
    "name":"salad",
    "price":5000,
    "rate":3.5 ,
    "image":"../images/main/food8.png",
    "star_icon":"../images/main/star.png"
    
    },
    {
    "id":7,
    "name":"pizza",
    "price":5000,
    "rate":3.5 ,
    "image":"../images/main/food9.png",
    "star_icon":"../images/main/star.png"
    
    },
    
    {
    "id":8,
    "name":"salad",
    "price":5000,
    "rate":3.5 ,
    "image":"../images/main/food11.png",
    "star_icon":"../images/main/star.png"
    
    }
    
    
    
    ]
    
let cardsection=document.querySelector('.card-section');
// get and set values menu food container

let menubox=document.querySelector('.menu-box');

    


menubox.innerHTML='';

// loop thro all data
foodList.forEach((product)=>

{
// add image to box
let boxdiv=document.createElement("div");

boxdiv.className='box';
boxdiv.dataset.id=product.id;

// add btn div

let addBtndiv=document.createElement('div');
let addBtnEle=document.createElement('h6');
addBtndiv.className='icon-cart';
addBtnEle.className='insert-cart';
let Btntxt=document.createTextNode('+');
addBtnEle.appendChild(Btntxt);
addBtndiv.appendChild(addBtnEle);
boxdiv.appendChild(addBtndiv);



// add image div
let imgdiv=document.createElement('div');
imgdiv.className='image-holder';
let imgele=document.createElement("img");
imgele.src=`${product.image}`;
let imageholder=document.createTextNode(imgele);
imgele.appendChild(imageholder);
imgdiv.appendChild(imgele);
boxdiv.appendChild(imgdiv);
menubox.appendChild(boxdiv);
console.log(boxdiv);
// add title to box 
let titleEle=document.createElement('h4');
let titletText=document.createTextNode(product.name);
titleEle.appendChild(titletText);
imgdiv.appendChild(imgele);
boxdiv.appendChild(titleEle);

// addpriceinfo

let pricediv=document.createElement('div');
pricediv.className='price-info';
let priceEle=document.createElement('h6');
let pricetxt=document.createTextNode(product.price+'RY');
priceEle.appendChild(pricetxt);
pricediv.appendChild(priceEle);


// addRate

let ratediv=document.createElement('div');
ratediv.className='rate'
let rateimg=document.createElement('img');
rateimg.src=`${product.star_icon}`;
rateimg.style.height='15px';
rateimg.style.width='15px';

let imagholda=document.createTextNode(rateimg);
rateimg.appendChild(imagholda);

let smalele=document.createElement('small');
let ratetxt=document.createTextNode(product.rate);
smalele.appendChild(ratetxt);
ratediv.appendChild(smalele);
ratediv.appendChild(rateimg);
pricediv.appendChild(ratediv);

boxdiv.appendChild(pricediv);


// add Button to cart




}


);


document.addEventListener(('click'),(e)=>{
let target=e.target;
if (target.classList.contains('insert-cart')){
let targetindex=target.parentElement.parentElement.dataset.id;


addcartstoCart(targetindex);

 
}


});

let countNum=1;
 var alllistCarts=[];
const addcartstoCart=(targetindex)=>{
let indexCart=alllistCarts.findIndex((value)=>value.selectedid===targetindex);

if (alllistCarts.length <= 0){
    alllistCarts=[
        {
        selectedid:targetindex,
        qunatity:1
        }
    ]
    
}
// if product not in cart list
else if  (indexCart <0) {
    alllistCarts.push({
        selectedid:targetindex,
        qunatity:1
    }
    );

    
}
else {
    alllistCarts[indexCart].qunatity=alllistCarts[indexCart].qunatity + 1
    

}
addCartToPage();
addTolocalStorge(alllistCarts);

}


// set all data cars to  memory

const addTolocalStorge=(alllistCarts)=>{
    window.localStorage.setItem('items',JSON.stringify(alllistCarts));
}

// get all data cars from memory
const getCartsFromlocalStorge=()=>{
if ( window.localStorage.getItem(('items'))
){
    alllistCarts= JSON.parse(window.localStorage.getItem('items'));  
    addCartToPage();
}
}




let shopnumber=document.querySelector('.shopnumber');
let cartcontainer=document.querySelector('.cart-container');
let totelcount=document.querySelector('.totel-count');
let totelPrice=document.querySelector('.totelPrice');
let cartproducts=document.querySelector('.cart-products');
let shopingicon=document.querySelector('.icon-cart ');
let closeCart=document.getElementById('close-Cart');
let Totprice=document.querySelector('.Tot-price');
// displayShoping Cart
shopingicon.addEventListener(('click'),()=>{
cartproducts.classList.add('active');

});

// closing Cart
closeCart.addEventListener(('click'),()=>{

cartproducts.classList.remove('active');

});




const addCartToPage=()=>{
    let sumallquintity=0;
    let allprictot=0;
    if (alllistCarts.length > 0){
        cartcontainer.innerHTML='';
        shopnumber.innerHTML='';
        Totprice.innerHTML='';

        alllistCarts.forEach((cart)=>{
            let indexofproduct=foodList.findIndex((value)=>value.id==cart.selectedid);
            let indexofcarts=foodList[indexofproduct];
            // number of products  added in  cart
            let totprice=indexofcarts.price * cart.qunatity;
            sumallquintity=sumallquintity + cart.qunatity;
            // shopnumber.innerHTML=sumallquintity;
            // // totel of all products in the cart
             let allpricetotel= allprictot+(sumallquintity * indexofcarts.price)  ;
        
            
            // addimagetoCart

let divbox=document.createElement("div");
divbox.dataset.id=cart.selectedid;
divbox.className="box";
let divimage=document.createElement("div");
divimage.className='cart-image';
// divcart.dataset.id=cart.selectedid;
let imageele=document.createElement("img");
imageele.src=`${indexofcarts.image}`;
imageele.style.height='60px';
imageele.style.width='60px';

let imageData=document.createTextNode(imageele);

imageele.appendChild(imageData);

divimage.appendChild(imageele);
divbox.appendChild(divimage);

// firstPricev

let deleteEle=document.createElement("img");
deleteEle.src='../icons/delete.png'
deleteEle.className='deleteBtn';
deleteEle.style.background='#fff';
deleteEle.style.height='28px';
deleteEle.style.width='28px';
deleteEle.style.padding='6px';
deleteEle.style.borderRadius='10px';
let deleteTxt=document.createTextNode(deleteEle);
deleteEle.appendChild(deleteTxt);
divbox.appendChild(deleteEle);   

            let infodiv=document.createElement("div");
            infodiv.className="info";
            let infoele1=document.createElement("h4");
            let nametx=document.createTextNode(indexofcarts.name);
            infoele1.appendChild(nametx);
            infodiv.append(infoele1);
        
            let infoele2=document.createElement("h5");
            let nametx2=document.createTextNode(totprice);
            infoele2.appendChild(nametx2);
            infodiv.append(infoele2);
            divbox.appendChild(infodiv);
    
            cartcontainer.appendChild(divbox);

            // divbox.appendChild(totelPrice);




// add delete button  






// counter increasBtn
let divCounter=document.createElement("div");
divCounter.className='counter';
let descreasBtn=document.createElement("span");
descreasBtn.className='minus';
let descreasTxt=document.createTextNode('-');
descreasBtn.appendChild(descreasTxt);
divCounter.append(descreasBtn);

// number
let numberCounter=document.createElement("span");
numberCounter.className='counter-num';
let numberTxt=document.createTextNode(cart.qunatity);
numberCounter.appendChild(numberTxt);
divCounter.append(numberCounter);

// increamentBtn

let increasmentBtn=document.createElement("span");
increasmentBtn.className='plus';
let increasmenTxt=document.createTextNode('+');
increasmentBtn.appendChild(increasmenTxt);
divCounter.append(increasmentBtn);


// insert counter div  into box div
divbox.appendChild(divCounter);

shopnumber.innerHTML=sumallquintity;
Totprice.innerHTML=allpricetotel;





        })}

    }


// delete products from cart Page

document.addEventListener("click",(e)=>{
let target=e.target;
if (target.classList.contains('deleteBtn')){
let Deleteproduct=e.target.parentElement.dataset.id;
deleteFromCart(Deleteproduct);
}

});

// delete product from shoping cart
const deleteFromCart=(id)=>{
let deletIndexValue=alllistCarts.findIndex((value)=>value.selectedid==id);
alllistCarts.splice(deletIndexValue,1);
addCartToPage();

}

document.addEventListener("click",(e)=>{

if (e.target.classList.contains('minus') || e.target.classList.contains('plus')){
let postionindex=e.target.parentElement.parentElement.dataset.id;


let type="minus";
if (e.target.classList.contains('plus')){
type="plus";

}
changeQuaintity(postionindex,type);
}
});


const changeQuaintity=(postionindex,type)=>{
let quititypotion=alllistCarts.findIndex((value)=>value.selectedid==postionindex);

if (type=='plus'){
alllistCarts[quititypotion].qunatity=alllistCarts[quititypotion].qunatity +1;


}
else if (type=="minus"){
alllistCarts[quititypotion].qunatity=alllistCarts[quititypotion].qunatity -1;

}


else  {
    alert("bb");
    // alllistCarts.splice(quititypotion,1)
    // console.log(alllistCarts);
   
}

addCartToPage();
// getCartsFromlocalStorge();
// getCartsFromlocalStorge();


}


// tistemuns -------------funstions

let tistemunsboxs=document.querySelectorAll('.tistemuns-boxs .box-cart');
let tistemunsboxsList=Array.from(tistemunsboxs);
console.log(tistemunsboxsList);
let rightarrow=document.querySelector('.right-arrow');
let leftarrowBtn=document.querySelector('.left-arrow');

let currentSlidenumber=0;


for (let i=currentSlidenumber ;i<tistemunsboxsList.length;i++);


rightarrow.addEventListener(('click'),()=>{
    
    removeActive();
    tistemunsboxsList[currentSlidenumber].classList.add('active');
    currentSlidenumber++;

    
    });

 
    

function nextSlider(){

    currentSlidenumber++
}

function previusSlider(){
    currentSlidenumber--;
}



// remove avtive class form all list boxes 

function removeActive(){
    tistemunsboxs.forEach((card)=> card.classList.remove('active'));


}









// get all data form local storge 

getCartsFromlocalStorge();


// --------------------get data from joson file ------------------------------



