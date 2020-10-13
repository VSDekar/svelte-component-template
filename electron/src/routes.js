import Error from './Error.svelte';
import Home from './Home.svelte';
import { Component } from 'svelte-component';

export const routes = [
  {
    path: '/',
    component: Home,
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
