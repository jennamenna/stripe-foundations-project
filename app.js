function purchaseProduct(event) {
  event.preventDefault();
  console.log(event);
  alert('hello world');
}

function openProductModal(title, description) {
console.log(title)

  $('#purchaseProductModal').modal('show')
  let productTitle=document.querySelector('#productItemTitle')
  productTitle.innerHTML=title
}