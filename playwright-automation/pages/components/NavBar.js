class NavBar {
  constructor(page) {
    this.page = page;

    this.navbar = page.locator("//nav[contains(@class, 'navbar')]");

    this.cartIcon = this.navbar.locator("[data-test='nav-cart']");

    this.cartBadge = this.navbar.locator("[data-test='cart-quantity']");
  }

  async getCartQuantity() {
    return Number(await this.cartBadge.innerText());
  }
}

export default NavBar;
