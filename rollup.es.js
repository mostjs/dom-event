import buble from 'rollup-plugin-buble';

export default {
  entry: 'src/index.js',
  dest: 'dist/mostDomEvent.es.js',
  sourceMap: true,
  plugins: [buble()]
}
