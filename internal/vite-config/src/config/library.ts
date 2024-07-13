import type { ConfigEnv, UserConfig } from 'vite';

import type { DefineLibraryOptions } from '../typing';

import { readPackageJSON } from '@vben/node-utils';

import { defineConfig, mergeConfig } from 'vite';

import { loadLibraryPlugins } from '../plugins';
import { getCommonConfig } from './common';

function defineLibraryConfig(userConfigPromise: DefineLibraryOptions) {
  return defineConfig(async (config: ConfigEnv) => {
    const options = await userConfigPromise?.(config);
    const { command, mode } = config;
    const root = process.cwd();
    const { library = {}, vite = {} } = options || {};
    const isBuild = command === 'build';

    const plugins = await loadLibraryPlugins({
      dts: false,
      injectLibCss: true,
      injectMetadata: true,
      isBuild,
      mode,
      ...library,
    });

    const { dependencies = {}, peerDependencies = {} } =
      await readPackageJSON(root);

    const externalPackages = [
      ...Object.keys(dependencies),
      ...Object.keys(peerDependencies),
    ];

    const packageConfig: UserConfig = {
      build: {
        lib: {
          entry: 'src/index.ts',
          fileName: () => 'index.mjs',
          formats: ['es'],
        },
        rollupOptions: {
          external: (id) => {
            return externalPackages.some(
              (pkg) => id === pkg || id.startsWith(`${pkg}/`),
            );
          },
        },
      },
      plugins,
    };
    const commonConfig = await getCommonConfig();
    const mergedConfig = mergeConfig(commonConfig, packageConfig);
    return mergeConfig(mergedConfig, vite);
  });
}

export { defineLibraryConfig };
