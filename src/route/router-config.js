import OriginData from '../components/NetDiagnose/OriginData.vue'
import EditRow from '../components/NetDiagnose/EditRow.vue'
import Navigator from '../components/Home/Navigator.vue'
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
    path: '/graph/test/',
    name: 'test_service',
    component: {
      template: '<div><call-graph rootName="' + 'test' + '"></call-graph></div>'
    }
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
