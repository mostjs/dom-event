import buble from 'rollup-plugin-buble';

export default {
  entry: 'src/index.js',
  dest: 'dist/mostDomEvent.js',
  format: 'umd',
  moduleName: 'mostDomEvent',
  sourceMap: true,
  plugins: [buble()]
}
