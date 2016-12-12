import OriginData from './components/OriginData.vue'
import EditRow from './components/EditRow.vue'

module.exports = [
	{
		path: '/', 
		component: OriginData
	},
	{
		path: '/test/edit/:row_index', 
		name: "edit", 
		component: EditRow
	},
]