import * as shared from '../scripts/shared'
import routeList from './routes.js'

export default {
  data() {
    return {
      title: 'InitialSetup',
      icon: 'info',
      pages: [],
      routes: []
    }
  },
  mounted() {
    this.pages = routeList.menuPages;
    this.routes = routeList.raw;
  },
  computed: {
    locationSet: function () {
      return shared.coords.source !== 'not set';
    },
    notificationDone: function(){
        return false;
    }
  },
  methods: {}
}
