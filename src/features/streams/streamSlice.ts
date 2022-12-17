import {
  createSlice,
  SliceCaseReducers,
} from '@reduxjs/toolkit';

import { RootState } from '../../app/store';

interface StreamState {
	title: string;
	description: string | undefined;
	streamKey: string;
	venue: string;
	created: Date | null;
}
const initialState: StreamState = {
	title: "",
	description: undefined,
	streamKey: "",
	venue: "",
	created: null,
};
const streamSlice = createSlice<StreamState, SliceCaseReducers<StreamState>, "stream">({
	name: "stream",
	initialState,
	reducers: {
		setStream: (state, action) => {
			const { title, description, streamKey, venue, created } = action.payload;
            const date = new Date(created)
            console.log("Date in store:", date)
			state.title =  title;
            state.description =  description;
            state.streamKey= streamKey;
            state.venue= venue;
            state.created= date;
		}
	},
});

export const { setStream } = streamSlice.actions;

export default streamSlice.reducer;

export const selectStream = (state: RootState) => state.stream;
