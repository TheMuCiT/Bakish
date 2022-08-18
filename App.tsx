import Amplify from 'aws-amplify';
import {Linking} from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';

import {StripeProvider} from '@stripe/stripe-react-native';

import config from './src/aws-exports';
import AuthContextProvider from './src/contexts/AuthContext';

import Navigation from './src/navigation';

import Client from './src/apollo/Client';
import {STRIPE_PRODUCT_KEY} from './src/config';

import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';

const urlOpener = async (url: string, redirectUrl: string) => {
  await InAppBrowser.isAvailable();
  const response = await InAppBrowser.openAuth(url, redirectUrl, {
    showTitle: false,
    enableUrlBarHiding: true,
    enableDefaultShare: false,
    ephemeralWebSession: false,
  });

  if (response.type === 'success') {
    Linking.openURL(response.url);
  }
};

const updatedConfig = {
  ...config,
  oauth: {
    ...config.oauth,
    urlOpener,
  },
};

Amplify.configure(updatedConfig);

const App = () => {
  dayjs.extend(relativeTime);
  return (
    <AuthContextProvider>
      <StripeProvider publishableKey={STRIPE_PRODUCT_KEY}>
        <Client>
          <Navigation />
        </Client>
      </StripeProvider>
    </AuthContextProvider>
  );
};

export default App;
