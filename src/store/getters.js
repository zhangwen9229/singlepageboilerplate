/* ============
 * Vuex Getters
 * ============
 *
 * All the getters that can be used
 * inside the store
 */

import * as com from './modules/common/getter';
// Object     .keys(com)     .forEach(key => {         export {key}         from
// './modules/common/getter';     })

export {isShowLoading, showHeader,showTabBar}
from './modules/common/getter';

// export const isShowLoading = (state,getters) => {
// console.log("getters:",getters.rollSetInterval);     return
// state.common.isShowLoading; }