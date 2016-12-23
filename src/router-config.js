import OriginData from './components/NetDiagnose/OriginData.vue'
import EditRow from './components/NetDiagnose/EditRow.vue'

/* module.exports = [
  {
    path: '/',
    component: OriginData
  },
  {
    path: '/test/edit/:row_index',
    name: 'edit',
    component: EditRow
  }
] */

let netRoutes = [
  {
    path: '/',
    name: 'diagnose',
    des: '网络记录',
    component: OriginData
  }
]

let otherRoutes = [
  {
    path: '/net/edit/:row_index',
    name: 'edit',
    component: EditRow
  }
]

export { netRoutes, otherRoutes }
