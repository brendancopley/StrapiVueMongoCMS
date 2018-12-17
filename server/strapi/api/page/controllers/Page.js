'use strict';

/**
 * Page.js controller
 *
 * @description: A set of functions called "actions" for managing `Page`.
 */

module.exports = {

  /**
   * Retrieve page records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.page.search(ctx.query);
    } else {
      return strapi.services.page.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a page record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.page.fetch(ctx.params);
  },

  /**
   * Count page records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.page.count(ctx.query);
  },

  /**
   * Create a/an page record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.page.add(ctx.request.body);
  },

  /**
   * Update a/an page record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.page.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an page record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.page.remove(ctx.params);
  },

  /**
   * Add relation to a/an page record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.page.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an page record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.page.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an page record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.page.removeRelation(ctx.params, ctx.request.body);
  }
};
