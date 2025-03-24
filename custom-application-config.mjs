import { PERMISSIONS, entryPointUriPath } from './src/constants';

/**
 * @type {import('@commercetools-frontend/application-config').ConfigOptionsForCustomApplication}
 */
const config = {
  name: 'Discounts Preview Calculator',
  entryPointUriPath,
  cloudIdentifier: 'gcp-eu',
  env: {
    development: {
      initialProjectKey: 'retail-anz',
    },
    production: {
      applicationId: 'cm8n0meh40005un01x42yxf0r',
      url: 'https://discounts-preview-eu.vercel.app',
    },
  },
  headers: {
    csp: {
      'connect-src': [
        '${env:PREVIEW_HOST}',
      ],
      'frame-src': [
        '${env:PREVIEW_HOST}',
      ],
    }
  },
  additionalEnv: {
    previewHost: '${env:PREVIEW_HOST}',
  },
  oAuthScopes: {
    view: ['view_products'],
    manage: ['manage_products'],
  },
  icon: '${path:@commercetools-frontend/assets/application-icons/rocket.svg}',
  mainMenuLink: {
    defaultLabel: 'Welcome',
    labelAllLocales: [],
    permissions: [PERMISSIONS.View],
  },
  submenuLinks: [
    {
      uriPath: 'discounts',
      defaultLabel: 'Discounts Calculator',
      labelAllLocales: [],
      permissions: [PERMISSIONS.View],
    },
  ],
};

export default config;
