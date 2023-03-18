import '@/styles/globals.css'
import React from 'react';
import { AppProps } from "next/app";
import { app } from 'firebase_config'

import {
  initializeAuth,
  indexedDBLocalPersistence,
  connectAuthEmulator,
  inMemoryPersistence,
} from 'firebase/auth';

import { FirebaseAppProvider, AuthProvider, DatabaseProvider } from 'reactfire';

import configuration from '~/configuration';
import { getDatabase } from 'firebase/database';

function App(props: AppProps) {
  const { Component, pageProps } = props;

  const database = getDatabase(app)

  // we initialize the firebase app
  // using the configuration that we defined above

  // make sure we're not using IndexedDB when SSR
  // as it is only supported on browser environments
  const persistence = typeof window !== 'undefined'
    ? indexedDBLocalPersistence
    : inMemoryPersistence;

  const auth = initializeAuth(app, { persistence });

  // prevent emulator from being
  // called multiple times on page navigations
  if (
      configuration.emulator &&
      !("emulator" in auth.config)
  ) {
    // we can get the host by
    // combining the local emulator host with the Auth port
    const host = getAuthEmulatorHost();
    connectAuthEmulator(auth, host);
  }

  return (
    <FirebaseAppProvider firebaseApp={app} firebaseConfig={configuration.firebase}>
      <AuthProvider sdk={auth}>
        <DatabaseProvider sdk={database}>
          <Component {...pageProps} />
        </DatabaseProvider>
      </AuthProvider>
    </FirebaseAppProvider>
  );
}

export default App;

function getAuthEmulatorHost() {
  const host = process.env.NEXT_PUBLIC_FIREBASE_EMULATOR_HOST;
  const port = process.env.NEXT_PUBLIC_FIREBASE_AUTH_EMULATOR_PORT;

  return ["http://", host, ":", port].join("");
}