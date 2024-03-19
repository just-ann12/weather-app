import { configureStore } from '@reduxjs/toolkit';

// Stores
import userStore from './user-entity/reducer';
import weatherStore from './weather-entity/reducer';

export const store = configureStore({
	reducer: {
		userStore,
		weatherStore,
	},
});

// Global store type
export type StoreType = ReturnType<typeof store.getState>;
