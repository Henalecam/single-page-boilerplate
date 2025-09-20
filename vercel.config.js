/** @type {import('@vercel/node').Config} */
module.exports = {
  buildCommand: 'npm run build',
  outputDirectory: 'dist/public',
  installCommand: 'npm install',
  devCommand: 'npm run dev',
  env: {
    NODE_ENV: 'production'
  }
};