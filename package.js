// const FS = require('fs');
const Path = require('path');
const FSE = require('fs-extra');

function traverse(dir, callback) {
    FSE.readdirSync(dir).forEach( file => {
        const absolute = Path.join(dir, file);
        if (FSE.statSync(absolute).isDirectory()) return traverse(absolute, callback);
        else callback(absolute);
    });
}

const outDir = '../Questions/';
const files = [
    'src',
    'package.js',
    'package.json',
    'README.md',
    'tsconfig.json',
    'LICENSE',
    '.gitignore'
];

function stripAnswers(source)
{
    const t = new RegExp(/\/\*\*ANSWER_START\*\/[\s\S]+?\/\*\*ANSWER_END\*\//, 'g');
    return source.replace(t, '/**...*/');
}

files.forEach( file => FSE.copySync(file, outDir + file) );
traverse(outDir + 'src', srcFilePath => {
    const srcFile = FSE.readFileSync(srcFilePath, {encoding: 'utf8'});
    console.log(srcFilePath);
    FSE.writeFileSync(srcFilePath, stripAnswers(srcFile), {encoding: 'utf8'});
});
