const { test, expect } = require('@playwright/test');
const { RealizarBusqueda } = require('../pages/realizar-busqueda');
const { VerificarBusqueda } = require('../pages/verificar-busqueda');

test('Realizar y verificar busqueda de cruseros', async ({ page }) => {
  const realizarBusqueda = new RealizarBusqueda(page);
  const verificarBusqueda = new VerificarBusqueda(page);

  await realizarBusqueda.goto();
  await realizarBusqueda.login();
  await verificarBusqueda.confirmarBusqueda();
});
