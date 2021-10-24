import React from 'react';
import Layout from './src/components/Layout';
import '@fontsource/rubik';
import '@fontsource/fira-mono';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
