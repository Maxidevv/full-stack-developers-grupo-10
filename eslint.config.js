import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  // Le decimos que carpetas ignorar
  {
    ignores: ['node_modules', 'dist', 'build'],
  },
  // Aplicamos la configuracion que unifica ESLint con Prettier
  eslintPluginPrettierRecommended,
];
