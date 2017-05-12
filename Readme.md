## gulp-dotnet-cli-v1

A fork of the [gulp-dotnet-cli](https://github.com/Janus-vistaprint/gulp-dotnet-cli) [gulp](https://github.com/gulpjs/gulp) plugin for the dotnet cli, updated specifically for  v1.0.0-preview2-1-3177. Unfortunately, while the original plugin works wonderfully for csproj-based dotnet core projects, it does not work with older project.json solutions. For those of us that are unfortunately forced to continue to use project.json, this should help alleviate automated building issues. 

You can run `dotnet action --help` to get help on a specific action ex. `dotnet build --help`, or view our [Api docs](docs/index.md) 

## Usage

You must have the [dotnet cli](http://dot.net) installed and on your path.

First, install gulp-dotnet-cli-v1 

`npm install --save-dev gulp-dotnet-cli-v1`

Then add it to your gulpfile.js

```javascript

let {restore, build, test, pack, publish} = require('gulp-dotnet-cli-v1');
let buildNumber = process.env.BUILD_NUMBER || '0';
let configuration = process.env.BUILD_CONFIGURATION || 'Release';
let gulp = require('gulp');

//restore nuget packages
gulp.task('restore', ()=>{
    return gulp.src('**/*.csproj', {read: false})
            .pipe(restore());
});

//compile
gulp.task('build', ['restore'], ()=>{
                    //this could be **/*.sln if you wanted to build solutions
    return gulp.src('**/*.csproj', {read: false})
        .pipe(build({configuration: configuration, versionSuffix: buildNumber}));
});

//run unit tests
gulp.task('test', ['build'], ()=>{
    return gulp.src('**/*test*.csproj', {read: false})
        .pipe(test())
});

//compile and publish an application to the local filesystem
gulp.task('publish', ['test'], ()=>{
    return gulp.src('src/TestWebProject.csproj', {read: false})
        .pipe(publish({configuration: configuration, versionSuffix: buildNumber}));
});

//convert a project to a nuget package
gulp.task('pack', ['build'], ()=>{
    return gulp.src('**/TestLibrary.csproj', {read: false})
        .pipe(pack({
            output: path.join(process.cwd(), 'nupkgs') , 
            version: version
        }));
});

//push nuget packages to a server
gulp.task('push', ['pack'], ()=>{
    return gulp.src('nupkgs/*.nupkg', {read: false})
        .pipe(push({
            apiKey: process.env.NUGET_API_KEY, 
            source: 'https://myget.org/f/myfeedurl'
        }));
});

```