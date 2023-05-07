
document.addEventListener("DOMContentLoaded", function() {
    const orderButton = document.getElementById("order-now-btn");
  
    orderButton.addEventListener("click", function() {
      
      const xhr = new XMLHttpRequest();
  xhr.open("GET", "products.txt"); // modify the path to your text file
  xhr.onload = function() {
    if (xhr.status === 200) {
      const products = xhr.responseText.split("\n");
      const productList = document.createElement("ul");
      products.forEach(function(product) {
        const productData = product.split(",");
        const name = productData[0];
        const description = productData[1];
        const price = productData[2];
        const li = document.createElement("li");
        li.innerHTML = `<h3>${name}</h3><p>${description}</p><p>Price: ${price}</p>`;
        productList.appendChild(li);
      });
      document.body.appendChild(productList);
    }
  };
  xhr.send();
    });
  });
  


