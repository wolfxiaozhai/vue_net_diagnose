import OriginData from '../components/NetDiagnose/OriginData.vue'
import EditRow from '../components/NetDiagnose/EditRow.vue'
import Navigator from '../components/Home/Navigator.vue'
import CallTest from '../components/CallGraphs/CallTest.vue'

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
    path: '/net/',
    name: 'diagnose',
    component: OriginData
  },
  {
    path: '/net/edit/:row_index',
    name: 'edit',
    component: EditRow
  }
]

let graphRoutes = [
  {
    path: '/graph/test_service/',
    name: 'test_service',
    component: CallTest
  }
]

let otherRoutes = [
  {
    path: '/',
    name: 'home',
    component: Navigator
  }
]

export { netRoutes, otherRoutes, graphRoutes }
