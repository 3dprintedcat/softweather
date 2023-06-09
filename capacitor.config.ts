import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.softweather.app',
  appName: 'softweather',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
