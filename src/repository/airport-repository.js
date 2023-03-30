const CrudRespository = require('./curd-repository');
const { Airport } = require('../models/index');
class AirportRespository extends CrudRespository {
    constructor() {
        super(Airport);
    }
}

module.exports = AirportRespository;