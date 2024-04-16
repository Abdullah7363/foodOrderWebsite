
let cardsection=document.querySelector('.card-section');


$(document).ready(function(){
    $('.ss').siblings().css({'color':'blue'});
});

console.log()
// let menucontainer=document.querySelector('.menu-container .card');
// let card=Array.from(document.querySelectorAll('.card'));


// let listmenu=document.querySelector('.list-menu');

// let listcart=document.querySelector('.listcart');
// console.log(listcart);

// const addToproductsContianer=()=>{

//     listmenu.innerHTML='';
//     productsArr.forEach((product)=>{
//         if (productsArr.length>0){
//             let newitem=document.createElement("div");
//             newitem.classList.add('item');
//             // create new dataAttripute and assin it to id if the product
//             newitem.dataset.id=product.id;
//             // newitem.innerHTML=' <h3>${product.}</h3>' ;
//             // get  the title from json file to main page 
//             let tit=document.createElement("h3");
//             let tittext=document.createTextNode(product.name);
//             tit.appendChild(tittext);
//             newitem.appendChild(tit);


//             let price=document.createElement("div");
//             let pricetxt=document.createTextNode(product.price);
//             price.appendChild(pricetxt);
//             newitem.appendChild(price);


//             let cartbtn=document.createElement("div");
//             cartbtn.classList.add('add-cart');
//             let text=document.createTextNode("add");
//             cartbtn.appendChild(text);
//             newitem.appendChild(cartbtn);
//             listmenu.appendChild(newitem);


//         }


//     });
//     console.log(listmenu);


// }

// addToproductsContianer();


// document.addEventListener("click",(e)=>{

// let target=e.target;
// if (target.classList.contains('add-cart')){
// let targetId=target.parentElement.dataset.id;
// addtoCart(targetId);

// }


// });


// let carts=[];
// const addtoCart=(cardId)=>{
//     let positionofId=carts.findIndex((value)=>value.targetId==cardId);
//     if (carts.length<=0){
//         carts=[
//             {
//                 targetId:cardId,
//                 qaintity:1

//             }

//         ]


//     }
//     // if there is no items in the card
//     else if (positionofId <0){
//         carts.push(
//             {
//                 targetId:cardId,
//                 qaintity:1
    
    
//             }
           
//         )

//     }
//     else {
//         carts[positionofId].qaintity+=1;
    
//     }

    // addcartTopage();

// }


// let totel=0;
// const addcartTopage=()=>{
// listcart.innerHTML='';
// if (carts.length > 0){
// carts.forEach((cart)=> { 
  
// let indexofproduct=productsArr.findIndex((value)=>value.id==cart.targetId);
// let infocart=[indexofproduct];
// totel=totel + cart.quitity;



// // add titte
// let cartdiv=document.createElement("div");
// cartdiv.classList.add('item');
// let tittlehtml=document.createElement("h3");
// tittlehtml.classList.add('title');
// let titeltext=document.createTextNode(infocart.name);
// tittlehtml.appendChild(titeltext);
// cartdiv.appendChild(tittlehtml);
// // add price
// let pricspan=document.createElement("h2");
// pricspan.classList.add('price');
// let pricetext=document.createTextNode(infocart.price);
// pricspan.appendChild(pricetext);
// cartdiv.appendChild(pricspan);

// // add quitity
// let divquaintity=document.createElement('div');
// divquaintity.classList.add('qunNumber')
// let quaintityspan=document.createElement("h2");
// let quaintityText=document.createTextNode(cart.qaintity);
// quaintityspan.appendChild(quaintityText);
// divquaintity.appendChild(quaintityspan);
// // add minus
// let minusbtn=document.createElement("span");
// minusbtn.classList.add('minus');
// let minustex=document.createTextNode("-");
// minusbtn.appendChild(minustex);
// minusbtn.style.marginLeft='6px';
// divquaintity.appendChild(minusbtn);


// add plus bttom 
// let plusbtn=document.createElement("span");
// plusbtn.classList.add('addbtn');
// let plustext=document.createTextNode("+");
// plusbtn.appendChild(plustext);
// divquaintity.appendChild(plusbtn);
// cartdiv.appendChild(divquaintity);
// // add all new elements to the card container
// listcart.appendChild(cartdiv);
//         });

//     }
// // update quantity value 
// // shopnuber.innerHTML=totel;




// }

// update quantity value 
// shopnuber.innerHTML=totel;




// }

// document.addEventListener("click",(e)=>{
//     if (e.target.classList=="addbtn"){
//         console.log(e.target.parentElement);

//     }
// });








// add image dynamic to the page 
// let myimg=document.querySelector('.main-image');
// let imgadata=document.createElement('img');
// imgadata.src=productsArr[1].image;
// myimg.appendChild(imgadata);






















// let products=[];
// const initapp =()=>{
// fetch("jeson.json").then(response => response.json())
// .then(data => {
// products=data;
// console.log(products);

//     })
// }

// initapp();




// let myrequst=new XMLHttpRequest();
// myrequst.open("GET","https://catfact.ninja/fact",true);
// myrequst.send();

// myrequst.onreadystatechange=function(){
//     if (this.readyState==4 && this.status===200 ){
//         console.log(this.responseText);

//     }
// }





// promise


// let mypromis=new Promise((resolvem,rej)=> {
//     let conection=false;
//     if (conection ){
//         resolvem("is good");
//     }
//     else {
//         rej("nosssss");
//     }

// }).then((s)=>console.log(s)).catch((err)=>err)
// ;


// let leftarrow=document.querySelector('.left-arrow');
// let rightarrow=document.querySelector('.right-arrow');
// let cardbox=document.querySelector('.card-box '); 


// leftarrow.addEventListener("click",()=>{
//     if (!cardbox.classList.contains("active")){
//         cardbox.classList.remove('active');



//     }




// })



// fetch data from jeson file 
// async function getallproducts(){

//     try {
//         let alldata=await fetch("./jeson.json");
//         listfoodItems= await alldata.json();
//         console.log(listfoodItems);

//     }
//     catch(why) {
//     console.log(why)
//     }

//     finally {
//         console.log("allgood")
//     }



// }

// getallproducts();






const allfoodlist=[
    {
    "id":1,
    "name":"pizza",
    "price":4000,
    "rate":4.3 ,
    "image":"images/main/food1.png"
    },
    {
    "id":2,
    "name":"passta",
    "price":2000,
    "rate":4.6 ,
    "image":"images/main/food1.png"

    }
    ,
    {
    "id":3,
    "name":"burgger",
    "price":5000,
    "rate":3.5 ,
    "image":"images/main/food2.png"

    }
 ]



let totelsumprice=document.querySelector('.tot-price');
let testing=document.getElementById('last');
testing.innerHTML='';
const showdata=function(){
allfoodlist.forEach(item => {
let card=document.createElement("div");
card.dataset.id=item.id;
card.className="item";
let price=document.createElement("h5");
let pricetxt=document.createTextNode(item.price);
price.appendChild(pricetxt);
let btn=document.createElement("h6");
btn.className="btn";
let btnetxt=document.createTextNode("add");
btn.appendChild(btnetxt);
let name=document.createTextNode(item.name);
card.appendChild(name);
card.appendChild(price);
card.append(btn);
testing.appendChild(card);
// addtocart(card.id);
});
}
document.addEventListener("click",(e)=>{
let targetbtn=e.target;
if (targetbtn.classList.contains('btn')){
let selectedid=targetbtn.parentElement.dataset.id;
addShopCart(selectedid);
    // let positionofId=carts.findIndex((value)=>value.selectedId==id_product);
}
});

let listOfCarts=[];

const addShopCart=(item_id)=>{
let positionofId=listOfCarts.findIndex((value)=>value.selectedid==item_id);

if (listOfCarts.length <= 0){
listOfCarts=[
    listOfCarts={
        selectedid:item_id,
        qunatity:1
        }
]

}
else if  (positionofId <0) {
    listOfCarts.push({
        selectedid:item_id,
        qunatity:1
    }
    )

}
else {
    listOfCarts[positionofId].qunatity+=1;
    console.log(listOfCarts);

}
addCartToPage();
}
let shopingcart=document.querySelector('.shoping-cart');

let sumprice=document.querySelector('.sumprice');
const addCartToPage=()=>{
shopingcart.innerHTML='';
let sumallquintity=0;
let allprictot=0;
listOfCarts.forEach((cart)=>{
let indexofproduct=allfoodlist.findIndex((value)=>value.id==cart.selectedid);
let indexofcarts=allfoodlist[indexofproduct];
// number of products  added in  cart
let totprice=indexofcarts.price * cart.qunatity;
sumallquintity=sumallquintity + cart.qunatity;
totelsumprice.innerHTML=sumallquintity;
// totel of all products in the cart
allprictot=allprictot + (indexofcarts.price * cart.qunatity);
sumprice.innerHTML=allprictot;

let divcart=document.createElement("div");
divcart.className="cart-box";
divcart.dataset.id=cart.selectedid;
let nameEle=document.createElement("h3");
let nametxt=document.createTextNode(indexofcarts.name);
nameEle.appendChild(nametxt);
divcart.append(nameEle);

// add-pric
console.log(divcart);

let spanprice=document.createElement("span");
let pricetxt=document.createTextNode(totprice);
spanprice.style.margin="40px";
spanprice.appendChild(pricetxt);
nameEle.appendChild(spanprice);
// //addimage
// let imgEle=document.createElement("img");
// imgEle.src=""
// DelEle.style.margin="40px";
// let Deltxt=document.createTextNode(c);
// DelEle.appendChild(Deltxt);
// nameEle.append(DelEle);

// deletbtn
let DelEle=document.createElement("span");
DelEle.style.margin="40px";
let Deltxt=document.createTextNode(cart.qunatity);
DelEle.appendChild(Deltxt);
nameEle.append(DelEle);

// plustBtn
let plusEle=document.createElement("span");
plusEle.className="plus-btn";
plusEle.dataset.id=cart.qunatity;
plusEle.style.margin="40px";
let plustxt=document.createTextNode("+");
plusEle.appendChild(plustxt);
// minusbtn
let minusEle=document.createElement("span");
minusEle.className="remove-item";
minusEle.style.margin="20px";
let minustxt=document.createTextNode("-");
minusEle.appendChild(minustxt);
nameEle.append(minusEle);
nameEle.append(plusEle);





shopingcart.appendChild(divcart);


});


}


document.addEventListener("click",(e)=>{
    if (e.target.classList.contains('plus-btn')|| e.target.classList.contains('remove-item') ){
        // alert(e.target.parentElement.className);
        // totel=counter
    let product_id=e.target.parentElement.parentElement.dataset.id;
    // console.log(product_id);
let type="remove-item";
if (e.target.classList.contains('plus-btn')){
     type="plus-btn";
}
changeQuaintity(product_id,type);
}
    });


const changeQuaintity=(product_id,type)=>{
let quititypotion=listOfCarts.findIndex((value)=>value.selectedid==product_id);

if (type=='plus-btn'){
    listOfCarts[quititypotion].qunatity=listOfCarts[quititypotion].qunatity +1;

}
else if (type=="remove-item"){
    if (listOfCarts[quititypotion].qunatity!=0){
        listOfCarts[quititypotion].qunatity=listOfCarts[quititypotion].qunatity -1;


    }
    
     
    }

addCartToPage();

}




showdata();









// outsite------------------------

// wow = new WOW();
// wow.init();
// $(document).ready(function(e) {

// $('#video-icon').on('click',function(e){
// e.preventDefault();
// $('.video-popup').css('display','flex');
// $('.iframe-src').slideDown();
// });
// $('.video-popup').on('click',function(e){
// var $target = e.target.nodeName;
// var video_src = $(this).find('iframe').attr('src');
// if($target != 'IFRAME'){
// $('.video-popup').fadeOut();
// $('.iframe-src').slideUp();
// $('.video-popup iframe').attr('src'," ");
// $('.video-popup iframe').attr('src',video_src);
// }
// });

// $('.slider').bxSlider({
// pager: false
// });
// });

// $(window).on("scroll",function () {

// var bodyScroll = $(window).scrollTop(),
// navbar = $(".navbar");

// if(bodyScroll > 50){
// $('.navbar-logo img').attr('src','images/logo-black.png');
// navbar.addClass("nav-scroll");

// }else{
// $('.navbar-logo img').attr('src','images/logo.png');
// navbar.removeClass("nav-scroll");
// }

// });
// $(window).on("load",function (){
// var bodyScroll = $(window).scrollTop(),
// navbar = $(".navbar");

// if(bodyScroll > 50){
// $('.navbar-logo img').attr('src','images/logo-black.png');
// navbar.addClass("nav-scroll");
// }else{
// $('.navbar-logo img').attr('src','images/logo-white.png');
// navbar.removeClass("nav-scroll");
// }

// $.scrollIt({

// easing: 'swing',      // the easing function for animation
// scrollTime: 900,       // how long (in ms) the animation takes
// activeClass: 'active', // class given to the active nav element
// onPageChange: null,    // function(pageIndex) that is called when page is changed
// topOffset: -63
// });
// });












    
















