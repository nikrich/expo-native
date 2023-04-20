import * as React from 'react';

import { ExpoNativeViewProps } from './ExpoNative.types';

export default function ExpoNativeView(props: ExpoNativeViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
