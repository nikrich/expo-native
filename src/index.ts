import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoNative.web.ts
// and on native platforms to ExpoNative.ts
import ExpoNativeModule from './ExpoNativeModule';
import ExpoNativeView from './ExpoNativeView';
import { ChangeEventPayload, ExpoNativeViewProps } from './ExpoNative.types';

// Get the native constant value.
export const PI = ExpoNativeModule.PI;

export function hello(): string {
  return ExpoNativeModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoNativeModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoNativeModule ?? NativeModulesProxy.ExpoNative);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoNativeView, ExpoNativeViewProps, ChangeEventPayload };
