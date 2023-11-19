import { edenTreaty } from '@elysiajs/eden'
import type { TElysiaApp } from '../../be/src/main';

export const apiClient = edenTreaty<TElysiaApp>('/').e.api;
