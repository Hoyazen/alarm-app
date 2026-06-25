/** @type {import('next').NextConfig} */

// Si en production
const productionMode = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // cette option permet de générer un build static dans "out/"
  basePath: productionMode ? '/alarm-app' : '',
  // assetPrefix: productionMode ? '/alarm-app/' : '',
  images: { unoptimized: true }, // désactivation de l'optimisation (car uniquement CSR, pas fonctionnel avec Github Page)
  reactCompiler: true,

  // ajout d'une variable d'environnement pour que les composants puissent s'adapter à l'environnement de production
  env: {
    NEXT_PUBLIC_BASE_PATH: productionMode ? '/alarm-app' : ''
  }
};

export default nextConfig;
