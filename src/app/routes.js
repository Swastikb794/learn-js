// src/app/routes.js
import HomePage from "./index/page";
import ProductsPage from "./products/page";
import CartPage from "./cart/page";
import CheckoutPage from "./checkout/page";
import AccountPage from "./account/page";

export default {
  "/": HomePage,
  "/products": ProductsPage,
  "/cart": CartPage,
  "/checkout": CheckoutPage,
  "/account": AccountPage,
};
