
import {
  AddressStepPage,
  LoginPage,
  MenuContentPage,
  PaymentStepPage,
  ProductsListPage,
  ShippingStepPage,
  ShoppingCartPage,
} from "../page/index";


describe("Buy a t-shirt", () => {
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

  it("try to buy a T-shirt", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    productsListPage.addTShirtToCart();
    productsListPage.goToCheckPage();
    shoppingCartPage.goToCheckoutPage();
    loginPage.login("aperdomobo@gmail.com", "WorkshopProtractor");
    addressStepPage.goToShippingStep();
    shippingStepPage.acceptTermsAndConditions();
    shippingStepPage.goToPaymentStep();
    paymentStepPage.selectPaymentMethod();
    paymentStepPage.confirmOrder();
    paymentStepPage.getOrderLabel().should("have.text", "Your order on My Store is complete.");
  });
});

