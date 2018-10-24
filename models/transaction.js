/**
 * transaction model module.
 * @module transaction
 */

/* Dependencies */
const bcrypt = require('bcrypt');
const ObjectID = require('mongodb').ObjectID;
const db = require('../db');
const constants = require('../db_config');