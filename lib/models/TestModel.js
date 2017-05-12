const Joi = require('joi');

class TestModel {

    constructor() {
        this.parentProcessId = Joi.string().description('Used by IDEs to specify their process ID. Test will exit if the parent process does');
        this.port = Joi.number().description('Used by IDEs to specify a port number to listen for a connection');
        this.configuration = Joi.string().description('Configuration under which to build');
        this.output = Joi.string().description('Directory in which to find the binaries to be run');
        this.buildBasePath = Joi.string().description('Directory in which to find temporary outputs');
        this.framework = Joi.string().description('Looks for test binaries for a specific framework');
        this.runtime = Joi.string().description('Look for test binaries for a for the specified runtime');
        this.noBuild = Joi.boolean().description('Do not build project before testing');
    }
}

module.exports = TestModel;