import typescript from '@rollup/plugin-typescript'
import cleanup from 'rollup-plugin-cleanup'
import dts from 'rollup-plugin-dts'
import resolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser';

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
        plugins: [typescript({target: 'es2020'}), cleanup({extensions: ['js', 'ts']})],
        external,
    },
    {
        input: 'src/index.ts',
        output: {file: pkg.types, format: 'esm'},
        plugins: [dts()],
    },
    {
        input: 'src/index.ts',
        output: {
            file: pkg.unpkg, // Output path for the IIFE bundle
            format: 'iife',
            name: 'WharfKitStarter', // Global variable name for your library
            sourcemap: true,
        },
        plugins: [
            typescript({target: 'es5'}), // Target ES5 for broader compatibility
            resolve({browser: true}),
            commonjs(),
            json(),
            terser(), // Minify the output
        ],
    }
]
