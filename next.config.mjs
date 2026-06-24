/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true }, // désactivation de l'optimisation (car uniquement CSR, pas fonctionnel avec Github Page)
  reactCompiler: true,
};

export default nextConfig;
