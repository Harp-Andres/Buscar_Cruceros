const { expect } = require('@playwright/test');
class VerificarBusqueda {
  constructor(page) {
    this.page = page;
    this.cruceroBuscado = page.locator('//div[@id="listeCroisieres"]//span[normalize-space(text())="Azamara Onward"]');
    this.itinerario = page.locator('//div[contains(@class,"itineraire")]');
  }

  async confirmarBusqueda() {
    await expect(this.cruceroBuscado).toBeVisible();
    await expect(this.itinerario).toBeVisible();

    const textContent = await this.itinerario.textContent();
    const expectedCountries = ['Estados Unidos', 'Puerto Rico', 'Canadá', 'Países Bajos', 'Antigua y Barbuda'];
    const found = expectedCountries.filter(country => textContent.includes(country));

    expect(found.length).toBeGreaterThanOrEqual(6);

  }
}

module.exports = { VerificarBusqueda };
