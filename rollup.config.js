import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import { mergeDeepRight } from 'ramda';

const globalConfig = {
  plugins: [
    babel({
      exclude: './node_modules/**'
    }),
    nodeResolve()
  ],
  watch: {
    include: [
      './assets/**/*.js',
      './LootGenerator/**/*.js'
    ]
  }
};

let lootGeneratorConfig = {
  input: './LootGenerator/generateMagicItems.js',
  output: {
    file: './dist/generateMagicItems.js',
    format: 'cjs'
  }
};

const config = [
  lootGeneratorConfig
].map((c) => mergeDeepRight(c, globalConfig));

console.log(JSON.stringify(config))

export default config;
