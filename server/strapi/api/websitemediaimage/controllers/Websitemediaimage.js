'use strict';

/**
 * Websitemediaimage.js controller
 *
 * @description: A set of functions called "actions" for managing `Websitemediaimage`.
 */

module.exports = {

  /**
   * Retrieve websitemediaimage records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.websitemediaimage.search(ctx.query);
    } else {
      return strapi.services.websitemediaimage.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a websitemediaimage record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.websitemediaimage.fetch(ctx.params);
  },

  /**
   * Count websitemediaimage records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.websitemediaimage.count(ctx.query);
  },

  /**
   * Create a/an websitemediaimage record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.websitemediaimage.add(ctx.request.body);
  },

  /**
   * Update a/an websitemediaimage record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.websitemediaimage.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an websitemediaimage record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.websitemediaimage.remove(ctx.params);
  },

  /**
   * Add relation to a/an websitemediaimage record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.websitemediaimage.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an websitemediaimage record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.websitemediaimage.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an websitemediaimage record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.websitemediaimage.removeRelation(ctx.params, ctx.request.body);
  }
};
