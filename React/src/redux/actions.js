import * as ACTION from './const';

export const aSendLogin = (user, pass) => ({
    type: ACTION.SEND_LOGIN,
    user,
    pass
});

export const aSendLogout = () => ({
    type: ACTION.SEND_LOGOUT
});

export const aShowPurchase = (item) => ({
    type: ACTION.SHOW_PURCHASE,
});

export const aShowHome = (clean) => ({
    type: ACTION.SHOW_HOME,
    clean
});

export const aPurchase = () => ({
    type: ACTION.PURCHASE,
});

export const aShowItem = (item) => ({
    type: ACTION.SHOW_ITEM,
    item
});

export const aFilterItems = (filter) => ({
    type: ACTION.FILTER_ITEMS,
    filter
});

export const aChangeQuantityItem = (item, amount) => ({
    type: ACTION.CHANGE_QUANTITY_ITEM,
    item,
    amount
});

export const aAddPurchaseItem = (item) => ({
    type: ACTION.ADD_PURCHASE_ITEM,
    item
});

export const aRemovePurchaseItem = (item) => ({
    type: ACTION.REMOVE_PURCHASE_ITEM,
    item
});