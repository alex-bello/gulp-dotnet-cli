module.exports = (value) => {
    
    let args = [];

    if(!value){
        return args;
    }

    if (value.forceEnglish) {
        args = args.concat(['--force-english-output']);
    }

    if (value.source) {
        args = args.concat(['--source', value.source]);
    }

    if (value.packages) {
        args = args.concat(['--packages', value.packages]);
    }

    if (value.disableParallel) {
        args = args.concat(['--disable-parallel']);
    }
    
    /* ADD FALLBACKSOURCE HERE */

    if (value.configfile) {
        args = args.concat(['--configfile', value.configfile]);
    }

    if (value.noCache) {
        args = args.concat(['--no-cache']);
    }

    if (value.inferRuntimes) {
        args = args.concat(['--infer-runtimes']);
    }

    if (value.verbosity) {
        args = args.concat(['--verbosity', value.verbosity]);
    }

    if (value.noDepenencies) {
        args = args.concat(['--no-dependencies']);
    }

    if (value.ignoreFailedSources) {
        args = args.concat(['--ignore-failed-sources']);
    }

    return args;
};