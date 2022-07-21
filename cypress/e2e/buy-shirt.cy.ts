
import {
  AddressStepPage,
  LoginPage,
  MenuContentPage,
  PaymentStepPage,
  ProductsListPage,
  ShippingStepPage,
  ShoppingCartPage,
} from "../page/index";

const menuContentPage = new MenuContentPage();
const productsListPage = new ProductsListPage();
const shoppingCartPage = new ShoppingCartPage();
const loginPage = new LoginPage();
const addressStepPage = new AddressStepPage();
const shippingStepPage = new ShippingStepPage();
const paymentStepPage = new PaymentStepPage();

<<<<<<< Updated upstream
=======
describe("Try to buy a t-shirt", () => {
  let addressStepPage: AddressStepPage;
  let loginPage: LoginPage;
  let menuContentPage: MenuContentPage;
  let paymentStepPage: PaymentStepPage;
  let productsListPage: ProductsListPage;
  let shippingStepPage: ShippingStepPage;
  let shoppingCartPage: ShoppingCartPage;

  before(()=> {
    menuContentPage = new MenuContentPage();
    productsListPage = new ProductsListPage();
    shoppingCartPage = new ShoppingCartPage();
    loginPage = new LoginPage();
    addressStepPage = new AddressStepPage();
    shippingStepPage = new ShippingStepPage();
    paymentStepPage = new PaymentStepPage();
    menuContentPage.visitMenuContentPage();
  });
>>>>>>> Stashed changes

describe("Buy a t-shirt", () => {
  it("then should be bought a t-shirt", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    productsListPage.addTShirtToCart();
    shoppingCartPage.goToCartPage();
    shoppingCartPage.goToCheckoutPage();
    loginPage.login("aperdomobo@gmail.com", "WorkshopProtractor");
    addressStepPage.goToShippingStep();
    shippingStepPage.acceptTermsAndConditions();
    shippingStepPage.goToPaymentStep();
    paymentStepPage.selectPaymentMethod();
    paymentStepPage.confirmOrder();

    paymentStepPage.getOrderLabel().should("have.text", "Your order on My Store is complete."); ;
  });
});
