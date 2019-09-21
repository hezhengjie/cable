const path = require('path');
const buble = require('rollup-plugin-buble'); 
const typescript = require('rollup-plugin-typescript');
const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const resolveFile = function(filePath) {
  return path.join(__dirname, '..', filePath)
}

module.exports = [
  {
    input: resolveFile('src/index.ts'),
    output: {
      file: resolveFile('dist/index.js'),
      format: 'umd',
      name:'index'
    }, 
    plugins: [
      commonjs(),
      typescript(),
      buble(),
      babel({
        "presets": [
          ["env", {
            "modules": false
          }],
        ],
        "plugins": [
          "transform-object-rest-spread"
        ],
      }),
    ],
  },
]