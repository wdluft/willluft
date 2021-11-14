import React from 'react';
import Layout from './src/components/Layout';
import '@fontsource/rubik/variable.css';
import '@fontsource/fira-mono';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

// trigger deploy preview
