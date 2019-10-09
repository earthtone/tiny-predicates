import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: './main.js',
  plugins: [
    resolve({
      mainFields: ['main', 'module']
    }),
    commonjs()
  ],
  output: [
    { file: 'dist/index.esm.js', format: 'esm', name: 'tiny-predicates' },
    { file: 'dist/index.umd.js', format: 'umd', name: 'tiny-predicates' },
    { file: 'dist/index.unpkg.js', format: 'iife', name: 'Predicate' }
  ]
}
