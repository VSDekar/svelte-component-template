import Error from './Error.svelte';
import { Component } from 'svelte-component';

export const routes = [
  {
    path: '/',
    component: Component,
  },
  {
    path: '/component',
    component: Component,
  },
  {
    path: '*',
    component: Error,
  },
];
