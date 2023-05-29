import { getShoppingCart } from "../utilities/fakedb";

const cartProducts = async () => {
   const loadedProducts = await fetch('products.json')
   const productList = await loadedProducts.json();
   //    console.log(productList);

   // if cart data has in database, you have to use async await method

   // step - 1

   const storedCart = getShoppingCart()
   // console.log(storedCart);

   const savedCart = [];
   for (const id in storedCart) {
      const addedProduct = productList.find(pd => pd.id === id);
      if(addedProduct){
         const quantity = storedCart[id];
         addedProduct.quantity = quantity;
         savedCart.push(addedProduct);
      }
   }

   return savedCart;
}

export default cartProducts;