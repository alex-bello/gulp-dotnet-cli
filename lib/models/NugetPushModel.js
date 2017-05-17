const Joi = require('joi');

class NugetPushModel {
  
    constructor() {

        this.apiKey = Joi.string().description('The API key for the server.');
        this.configFile = Joi.string().description('The NuGet configuration file to apply. If not specified, %AppData%\NuGet\NuGet.Config is used.');
        this.disableBuffering = Joi.boolean().description('Disable buffering when pushing to an HTTP(S) server to decrease memory usage.');
        this.forceEnglishOutput = Joi.boolean().description(' Forces the application to run using an invariant, English-based culture.');
        this.nonInteractive = Joi.boolean().description('Suppresses prompts for user input or confirmations.');
        this.noSymbols = Joi.boolean().description('If a symbols package exists, it will not be pushed to a symbols server.');
        this.source = Joi.string().description('Specifies the server URL');
        this.symbolSource = Joi.string().description('Specifies the symbol server URL. If not specified, nuget.smbsrc.net is used when pushing to nuget.org');
        this.symbolApiKey = Joi.string().description('(3.5+) Specifies the API key for the URL specified in -SymbolSource.');
        this.timeout = Joi.number().integer().description('Specifies the timeout for pushing to a server in seconds. Defaults to 300 seconds (5 minutes)');
        this.verbosity = Joi.string().only('normal', 'quiet', 'detailed').description('Specifies the amount of detail displayed in the output: normal, quiet, detailed (2.5+).');

    }
}

module.exports = NugetPushModel;