require('dotenv').config();
const { mkdirSync, writeFileSync} = require('fs');
const { isBooleanObject } = require('util/types');
const targetPash = './src/environments/environment.ts';
const envFileContents =`
export const environment = {
    mapbox_key:"${process.env['MAPBOX_KEY']}"
};
`;
mkdirSync('./src/environments', {recursive:true});
writeFileSync(targetPash, envFileContents);
writeFileSync('./src/environments/environment.development.ts',envFileContents);