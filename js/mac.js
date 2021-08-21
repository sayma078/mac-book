const initialMemoryCost = document.getElementById('memory-price');
const initialStorageCost = document.getElementById('storage-price');
const initialDeliveryCharge = document.getElementById('delivery-price');
const total = document.getElementById('total');
const grandTotal = document.getElementById('grand-total');


document.getElementById('8GB-memory').addEventListener('click',function(){
    mackBook(0, initialMemoryCost);

})

document.getElementById('16GB-memory').addEventListener('click',function(){
    mackBook(180, initialMemoryCost);
})

document.getElementById('256GB-storage').addEventListener('click',function(){
    mackBook(0, initialStorageCost);

})

document.getElementById('512GB-storage').addEventListener('click',function(){
    mackBook(100, initialStorageCost);
})

document.getElementById('1TB-storage').addEventListener('click',function(){
    mackBook(180, initialStorageCost);
})

document.getElementById('free-delivery').addEventListener('click',function(){
    mackBook(0, initialDeliveryCharge);

})

document.getElementById('paid-delivery').addEventListener('click',function(){
    mackBook(20, initialDeliveryCharge);
})


function mackBook(price, initalCost){
    const initalPrice = price;
    initalCost.innerText = initalPrice;
    totalPrice();
}
function totalPrice(){
    const bestPrice = 1299;
    const extraMemoryCost = initialMemoryCost.innerText;
    const extraStorageCost = initialStorageCost.innerText;
    const deliveryCharge = initialDeliveryCharge.innerText;
    const totalPrice = bestPrice + parseInt(extraMemoryCost) + parseInt(extraStorageCost)+ parseInt(deliveryCharge);
    total.innerText = totalPrice;
}