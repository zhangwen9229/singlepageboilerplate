import * as types from '@/store/mutation-types';

//触发sessionStorage共享
export const shareSessionStorage = ({commit}) => {
    commit(types.SHARESESSIONSTORAGE);
};

//显示/隐藏loading
export const ShowOrHideLoading = ({
    commit
}, payload) => {
    commit(types.ShOWORHIDELOADING, payload);
};

export const ShowHeader = ({
    commit
}, payload) => {
    commit(types.SHOWHEADER, payload);
};

export const ShowTabBar = ({
    commit
}, payload) => {
    commit(types.SHOWTABBAR, payload);
};
