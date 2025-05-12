// rollup.config.js
import postcss from 'rollup-plugin-postcss';
import postcssImport from 'postcss-import';
import postcssNested from 'postcss-nested';
import postcssCustomProperties from 'postcss-custom-properties';

export default {
  input: 'src/index.css',
  output: {
    file: 'dist/index.css',
    format: 'es'
  },
  plugins: [
    postcss({
      extract: true,
      minimize: true,
      plugins: [
        postcssImport(),
        postcssNested(),
        postcssCustomProperties({ preserve: false })
      ]
    })
  ]
};
