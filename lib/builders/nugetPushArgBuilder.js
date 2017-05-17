module.exports = (value) => {
    let args = [];
    if(!value){
        return args;
    }

    if (value.apiKey) {
        args = args.concat(['-ApiKey', value.apiKey]);
    }
    
    if (value.configFile) {
        args = args.concat(['-ConfigFile', value.configFile]);
    }

    if (value.disableBuffering) {
        args = args.concat(['-DisableBuffering']);
    }

    if (value.forceEnglishOutput) {
        args = args.concat(['-ForceEnglishOutput']);
    }

    if (value.nonInteractive) {
        args = args.concat(['-NonInteractive']);
    }

    if (value.noSymbols) {
        args = args.concat(['-NoSymbols']);
    }

    if (value.source) {
        args = args.concat(['-Source', value.source]);
    }

    if (value.symbolSource) {
        args = args.concat(['-SymbolSource', value.symbolSource]);
    }

    if (value.symbolApiKey) {
        args = args.concat(['-SymbolApiKey', value.symbolApiKey]);
    }

    if (value.timeout) {
        args = args.concat(['-Timeout', value.timeout]);
    }
    
    if (value.verbosity) {
        args = args.concat(['-Verbosity', value.verbosity]);
    }

    return args;
};