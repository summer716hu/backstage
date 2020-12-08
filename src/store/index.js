import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import menu from './modules/menu'//菜单管理
import role from './modules/role'//角色管理
import manger from './modules/manger'//管理员管理
import classify from './modules/classify'//商品分类页
import spec from './modules/spec'//商品规格页
export default new Vuex.Store({
        modules:{
            menu,
            role,
            manger,
            classify,
            spec,
        }
})