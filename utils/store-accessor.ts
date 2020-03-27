import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import mymodule from '~/store/mymodule'
/* eslint-disable import/no-mutable-exports */
let mymoduleStore: mymodule
/* eslint-disable import/no-mutable-exports */
function initialiseStores (store: Store<any>): void {
  mymoduleStore = getModule(mymodule, store)
}

export { initialiseStores, mymoduleStore }
