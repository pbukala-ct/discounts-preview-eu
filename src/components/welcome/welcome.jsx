import { useRouteMatch, Link as RouterLink } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { useApplicationContext } from '@commercetools-frontend/application-shell-connectors';


const Welcome = () => {
  const match = useRouteMatch();
  const intl = useIntl();

  // const environment = ApplicationRuntimeEnvironment;
  // const previewHost = process.env.PREVIEW_HOST;
  // console.log("******** PREVIEW_HOST: " + previewHost);

  const previewHost = useApplicationContext(
    (context) => context.environment.previewHost
  );
  console.log("******** PREVIEW_HOST (previewHost): " + previewHost);

  return (
    <iframe
      frameBorder={0}
      loading={'lazy'}
      width={'100%'}
      height={'100%'}
 
      //src="https://discounts-previewer.netlify.app"
      src={previewHost}
    ></iframe>
  );
};

Welcome.displayName = 'Welcome';

export default Welcome;
