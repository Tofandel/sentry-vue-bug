module.exports = {
  //preset: '@vue/cli-plugin-unit-jest',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(s(c|a)ss|css|jpg|png)$': '<rootDir>/tests/empty.js',
  },
  collectCoverage: true,
  coverageReporters: ['text', 'text-summary', 'cobertura'],
  collectCoverageFrom: ['src/**/*.{js,vue}'],
  transformIgnorePatterns: ['/node_modules/(?!(vue-tel-input-vuetify|v-snackbars|axios|vuetify/lib))'],
  setupFilesAfterEnv: [
    //'./tests/unit/setupEnv.js',
  ],
  //globalSetup: './tests/unit/setupGlobal.js',
};
