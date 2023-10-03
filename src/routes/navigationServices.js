import {
    createNavigationContainerRef,
    CommonActions,
} from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

function navigate(name, params) {
    if (navigationRef.isReady()) {
        navigationRef.navigate(name, params);
    }
}

function push(...args) {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(StackActions.push(...args));
    }
}

function navigateReset(name, params) {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(
            CommonActions.reset({
                index: 1,
                routes: [{ name, params }],
            }),
        );
    }
}

function back() {
    if (navigationRef.isReady()) {
        navigationRef.goBack();
    }
}

export default {
    navigate,
    push,
    navigateReset,
    back,
};