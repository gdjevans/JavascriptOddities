class Product {
   // title = 'DEFAULT';
   // imageUrl;
   // description;
   // price;

   constructor(title, image, desc, price) {
      this.title = title;
      this.imageUrl = image;
      this.description = desc;
      this.price = price;
   }
}

class ProductItem {
   constructor(product) {
      this.product = product;
   }

   render() {
      const prodEl = document.createElement('li');
         prodEl.className = 'product-item';
         prodEl.innerHTML = `
            <div>
               <img src="${this.product.imageUrl}" alt="${this.product.title}" >
               <div class="product-item__content">
                  <h2>${this.product.title}</h2>
                  <h3>\$${this.product.price}</h3>
                  <p>${this.product.description}</p>
                  <button>Add to Cart</button>
               </div>
            </div>
         `;
      return prodEl;
   }
}

class ProductList {
   products = [
      new Product(
         'A pillow', 
         'https://simbasleep.com/cdn/shop/files/Hybrid_Pillow_Gallery_01.jpg?v=1752682205&width=980', 
         'A soft pillow', 
         19.99
      ),
      new Product(
         'A carpet', 
         'https://www.wilsonscarpets.com/cdn/shop/products/hazy-grey-meadow-saxony-carpet-lifestyle_600x600.jpg?v=1710511354',
         'A grey carpet which is modern and nice', 
         89.99
      )

      // {
      //    title: 'A pillow',
      //    imageUrl: 'https://simbasleep.com/cdn/shop/files/Hybrid_Pillow_Gallery_01.jpg?v=1752682205&width=980',
      //    price: 19.99,
      //    description: 'A soft pillow'
      // },
      // {
      //    title: 'A carpet',
      //    imageUrl: 'https://www.wilsonscarpets.com/cdn/shop/products/hazy-grey-meadow-saxony-carpet-lifestyle_600x600.jpg?v=1710511354',
      //    price: 89.99,
      //    description: 'A grey carpet which is modern and nice'
      // }
   ];

   constructor() {}

   render() {
      const renderHook = document.getElementById('app');
      const prodList = document.createElement('ul');
      prodList.className = 'product-list';
      for (const prod of this.products) {
         const productItem = new ProductItem(prod);
         const prodEl = productItem.render();
         prodList.append(prodEl);
      }
      renderHook.append(prodList);
   }
}


const productList = new ProductList();
productList.render();