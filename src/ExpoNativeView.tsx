import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoNativeViewProps } from './ExpoNative.types';

const NativeView: React.ComponentType<ExpoNativeViewProps> =
  requireNativeViewManager('ExpoNative');

export default function ExpoNativeView(props: ExpoNativeViewProps) {
  return <NativeView {...props} />;
}
