/** @type {import('next').NextConfig} */

// Si en production
const productionMode = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // cette option permet de générer un build static dans "out/"
  basePath: productionMode ? '/alarm-app' : '',
  assetPrefix: productionMode ? '/alarm-app/' : '',
  images: { unoptimized: true }, // désactivation de l'optimisation (car uniquement CSR, pas fonctionnel avec Github Page)
  reactCompiler: true,
};

export default nextConfig;
