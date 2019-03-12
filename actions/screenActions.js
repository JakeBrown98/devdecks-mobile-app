import {
    ENABLE_SCROLL,
    DISABLE_SCROLL,
} from './types';

export const enableScrolling = () => {
    return { type: ENABLE_SCROLL };
};

export const disableScrolling = () => {
    return { type: DISABLE_SCROLL };
};
