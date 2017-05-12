const Joi = require('joi');

class RestoreModel {

    constructor() {
        this.forceEnglish = Joi.bool().description('Forces the application to run using an invariant, English-based culture.');
        this.source = Joi.string().description('Specifies a NuGet package source to use during the restore.');
        this.packages = Joi.string().description('Directory to install packages in.');
        this.disableParallel = Joi.boolean().description('Disables restoring multiple projects in parallel.');
        this.fallbackSource = Joi.array().description('A list of packages sources to use as a fallback.');
        this.configfile = Joi.string().description('The NuGet configuration file to use.');
        this.noCache = Joi.boolean().description('Do not cache packages and http requests.');
        this.inferRuntimes = Joi.boolean().description('Temporary option to allow NuGet to infer RIDs for legacy repositories');
        this.verbosity = Joi.string().only('debug', 'verbose', 'information', 'minimal', 'warning', 'error').description('The verbosity of logging to use. Allowed values: Debug, Verbose, Information, Minimal, Warning, Error.');
        this.ignoreFailedSources = Joi.boolean().description('Treat package source failures as warnings.');
    }
}

module.exports = RestoreModel;