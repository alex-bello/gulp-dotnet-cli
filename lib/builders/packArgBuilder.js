module.exports = (value) => {

    let args = [];

    if(!value){
        return args;
    }

    if (value.output) {
        args = args.concat(['--output', value.output]);
    }

    if (value.noBuild) {
        args = args.concat(['--no-build']);
    }

    if (value.buildBasePath) {
        args = args.concat(['--build-base-path', value.buildBasePath]);
    }

    if (value.configuration) {
        args = args.concat(['--configuration', value.configuration]);
    }

    if (value.versionSuffix) {
        args = args.concat(['--version-suffix', value.versionSuffix]);
    }

    if (value.serviceable) {
        args = args.concat(['--serviceable']);
    }

    return args;

};