Feature: Filtro de búsqueda de cruceros
  Scenario: Selección de filtros específicos y validación de resultado
    Given el usuario navega a la página "https://www.cruceros.co/c-1-carnival"
    When selecciona "Caribe" en el campo "Todos los destinos"
    And selecciona "Nov. 2025" en el campo "Todas las fechas"
    And selecciona "Miami" en el campo "Todos los puertos"
    And selecciona "Azamara" en el campo "Todas las compañías"
    And selecciona "Buscar"
    Then se debe mostrar el crucero "Azamara Onward"
    And el itinerario debe incluir los destinos:
      | Estados Unidos         |
      | Puerto Rico           |
      | Canadá                |
      | Países Bajos          |
      | Antigua y Barbuda     |