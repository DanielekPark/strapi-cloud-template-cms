'use strict';

/**
 * tribe-member service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tribe-member.tribe-member');
