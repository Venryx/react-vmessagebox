import {compose, createStore, StoreEnhancer, combineReducers} from "redux";
import {Action} from "./Action";

export class MessageBoxState {
	openBoxID: number;
	updateCallCount: number;
}

/*let rootReducer = combineReducers({	
});*/
function MessageBoxReducer(state = new MessageBoxState(), action: Action<any>) {
	if (action.type == "ACTMessageBoxShow") return {...state, openBoxID: action.payload.boxID};
	if (action.type == "ACTMessageBoxUpdate") return {...state, updateCallCount: (state.updateCallCount|0) + 1};
	return state;
}

const reduxDevToolsConfig = {
	maxAge: 70,
	trace: true,
};

export const store = createStore(
	MessageBoxReducer,
	{},
	compose(...[
		// disabled for now, as there doesn't seem to be an easy way of telling the dev-tools-extension that this library's store should NOT be the default store to display
		//window["__REDUX_DEVTOOLS_EXTENSION__"] && window["__REDUX_DEVTOOLS_EXTENSION__"](reduxDevToolsConfig),
	].filter(a=>a)) as StoreEnhancer<any>,
);