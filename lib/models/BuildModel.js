const Joi = require('joi');

class BuildModel {
    
    constructor() {
        this.output = Joi.string().description('Output directory in which to place built artifacts');
        this.buildBasePath = Joi.string().description('Directory in which to place temporary outputs');
        this.framework = Joi.string().description('Compile a specific framework');
        this.runtime = Joi.string().description('Produce runtime-specific assets for the specified runtime');
        this.configuration = Joi.string().description('Configuration under which to build');
        this.versionSuffix = Joi.boolean().description('Defines what `*` should be replaced with in version field in project.json');
        this.buildProfile = Joi.boolean().description('Set this flag to print the incremental safety checks that prevent incremental compilation');
        this.noIncremental = Joi.boolean().description('Set this flag to turn off incremental build');
        this.noDepenencies = Joi.boolean().description('Set this flag to ignore project to project references and only build the root project');
    }
}

module.exports = BuildModel;