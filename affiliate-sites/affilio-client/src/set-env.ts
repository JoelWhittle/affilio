const fs = require('fs');
const dotenv = require('dotenv');

console.log('Starting to read environment variables');

const dotenvConfig = process.env;

console.log('Environment Variables:', dotenvConfig);

const targetPath = './src/environments/environment.ts';
const targetPath2 = './src/environments/environment.prod.ts';

console.log(`API_KEY: ${dotenvConfig["API_KEY"]}`);
console.log(`API_BASE_URL: ${dotenvConfig["API_BASE_URL"]}`);
const envConfigFile = `export const environment = {
  production: false,
  apiKey: '${dotenvConfig["API_KEY"]}',
  apiBaseUrl: '${dotenvConfig["API_BASE_URL"]}'
};`;

fs.writeFileSync(targetPath, envConfigFile);
fs.writeFileSync(targetPath2, envConfigFile);

console.log(`Output generated at ${targetPath}`);
console.log(`Output generated at ${targetPath2}`);





