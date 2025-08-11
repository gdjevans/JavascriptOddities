const productList = {
   products: [
      {
         title: 'A pillow',
         imageUrl: 'https://simbasleep.com/cdn/shop/files/Hybrid_Pillow_Gallery_01.jpg?v=1752682205&width=980',
         price: 19.99,
         description: 'A soft pillow'
      },
      {
         title: 'A carpet',
         imageUrl: 'https://www.wilsonscarpets.com/cdn/shop/products/hazy-grey-meadow-saxony-carpet-lifestyle_600x600.jpg?v=1710511354',
         price: 89.99,
         description: 'A grey carpet which is modern and nice'
      }
   ],
   render() {
      const renderHook = document.getElementById('app');
      const prodList = document.createElement('ul');
      prodList.className = 'product-list';
      for (const prod of this.products) {
         const prodEl = document.createElement('li');
         prodEl.className = 'product-item';
         prodEl.innerHTML = `
            <div>
               <img src="${prod.imageUrl}" alt="${prod.title}" >
               <div class="product-item__content">
                  <h2>${prod.title}</h2>
                  <h3>\$${prod.price}</h3>
                  <p>${prod.description}</p>
                  <button>Add to Cart</button>
               </div>
            </div>
         `;
         prodList.append(prodEl);
      }
      renderHook.append(prodList);
   }
};

productList.render();