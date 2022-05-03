'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductsSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.string('codigobarras', 80).notNullable();
      table.string('descripcion', 5000);
      table.string('categoria', 300).notNullable();
      table.string('marca', 300).notNullable();
      table.integer('cont');
      table.string('unidad', 80).notNullable();
      table.string('origen', 80);
      table.string('modelo', 80);
      table.integer('msrp');
      table.integer('ieps');
      table.integer('a%');
      table.integer('aa%');
      table.integer('aaa%');
      table.integer('pzacaja');
      table.integer('precioa');
      table.integer('precioaa');
      table.integer('precioaaa');
      table.string('descripcioncomercial', 5000);
      table.string('img', 5000);
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductsSchema
