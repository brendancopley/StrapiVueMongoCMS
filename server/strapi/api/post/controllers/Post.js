'use strict';

/**
 * Post.js controller
 *
 * @description: A set of functions called "actions" for managing `Post`.
 */

module.exports = {

  /**
   * Retrieve post records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.post.search(ctx.query);
    } else {
      return strapi.services.post.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a post record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.post.fetch(ctx.params);
  },

  /**
   * Count post records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.post.count(ctx.query);
  },

  /**
   * Create a/an post record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.post.add(ctx.request.body);
  },

  /**
   * Update a/an post record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.post.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an post record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.post.remove(ctx.params);
  },

  /**
   * Add relation to a/an post record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.post.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an post record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.post.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an post record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.post.removeRelation(ctx.params, ctx.request.body);
  }
};
