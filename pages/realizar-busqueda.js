const { BASE_URL } = require('../config/globalConfig');

class RealizarBusqueda {
  constructor(page) {
    this.page = page;
    this.todosDestinos = 'div[data-nom="todos los destinos"]';
    this.destinoAmerica = 'div.top10[data-nom="Caribe"]';
    this.todasFechas = 'div[data-nom="todas las fechas"]';
    this.botonLogin = '#ingresar';
    this.fecha = 'div#calendar_2025 div[data-nom="Nov. 2025"][data-id="202511"]';
    this.todosPuertos = 'div[data-nom="todos los puertos"]';
    this.puerto = 'div.top10[data-nom="Miami"]';
    this.todasCampañas = 'div[data-nom="todas las compañías"]';
    this.campaña = 'div.top10[data-nom="Azamara"]';
    this.botonBuscar = 'div#bt_recherche';
    this.cerrarVentana = '#auto_ferme_ports';
    this.cerrrarCalendario = page.locator('#auto_ferme_dates').nth(4);

  }

  async goto() {
    await this.page.goto(`${BASE_URL}/c-1-carnival`);
  }

  async login() {
    await this.page.click(this.todosDestinos);
    await this.page.click(this.destinoAmerica);
    await this.page.click(this.todasFechas);
    await this.page.click(this.fecha);
    await this.cerrrarCalendario.click();
    await this.page.click(this.todosPuertos);
    await this.page.click(this.puerto);
    await this.page.click(this.cerrarVentana);
    await this.page.click(this.todasCampañas);
    await this.page.click(this.campaña);
    await this.page.click(this.botonBuscar);


  }
}

module.exports = { RealizarBusqueda };
