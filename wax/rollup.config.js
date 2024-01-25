import typescript from '@rollup/plugin-typescript'
import cleanup from 'rollup-plugin-cleanup'
import dts from 'rollup-plugin-dts'
import pkg from './package.json'

const external = Object.keys(pkg.dependencies)

/** @type {import('rollup').RollupOptions} */
export default [
    {
        input: 'src/index.ts',
        output: {
            file: pkg.main,
            format: 'cjs',
            sourcemap: true,
            exports: 'named',
        },
        inlineDynamicImports: true,
        plugins: [typescript({target: 'es6'}), cleanup({extensions: ['js', 'ts']})],
        external,
    },
    {
        input: 'src/index.ts',
        output: {
            file: pkg.module,
            format: 'esm',
            sourcemap: true,
        },
        inlineDynamicImports: true,
        plugins: [typescript({target: 'es2020'}), cleanup({extensions: ['js', 'ts']})],
        external,
    },
    {
        input: 'src/index.ts',
        output: {file: pkg.types, format: 'esm'},
        plugins: [dts()],
    },
]
