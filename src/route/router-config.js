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

let graphs = ['test', 'test2']
let graphRoutes = []
for (let graphIndex in graphs) {
  graphRoutes.push({
    path: '/graph/' + graphs[graphIndex],
    name: graphs[graphIndex] + 'CallGraph',
    component: {
      template: '<div><call-graph rootName="' + graphs[graphIndex] + '"></call-graph></div>'
    }
  })
}

let otherRoutes = [
  {
    path: '/',
    name: 'home',
    component: Navigator
  }
]

export { netRoutes, otherRoutes, graphRoutes }
