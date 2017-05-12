const Joi = require('joi');

class PackModel {

    constructor() {
        this.output = Joi.string().description('Directory in which to place outputs');
        this.noBuild = Joi.boolean().description('Do not build project before packing');
        this.buildBasePath = Joi.string().description('Directory in which to place temporary build outputs');
        this.configuration = Joi.string().description('Configuration under which to build');
        this.versionSuffix = Joi.string().description('Defines what `*` should be replaced with in version field in project.json');
    }
}

module.exports = PackModel;