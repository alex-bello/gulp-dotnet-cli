module.exports = (value) => {

    let args = [];

    if(!value){
        return args;
    }

    if (value.output) {
        args = args.concat(['--output', value.output]);
    }

    if (value.buildBasePath) {
        args = args.concat(['--build-base-path', value.output]);
    }

    if (value.framework) {
        args = args.concat(['--framework', value.framework]);
    }

    if (value.runtime) {
        args = args.concat(['--runtime', value.runtime]);
    }

    if (value.configuration) {
        args = args.concat(['--configuration', value.configuration]);
    }

    if (value.versionSuffix) {
        args = args.concat(['--version-suffix', value.versionSuffix]);
    }

    if (value.buildProfile) {
        args = args.concat(['--version-suffix']);
    }

    if (value.noIncremental) {
        args = args.concat(['--no-incremental']);
    }
    
    if (value.noDepenencies) {
        args = args.concat(['--no-dependencies']);
    }

    return args;
    
};