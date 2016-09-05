import Map from "can/map/";
import route from "can/route/";
import 'can/map/define/';
import 'can/route/pushstate/';
import "./util/prefilter";

const AppViewModel = Map.extend({
  define: {
    message: {
      value: 'Books',
      serialize: false
    },
    title: {
      value: 'webapp-example',
      serialize: false
    },
  }
});

route('/:page', { page: 'book' });

export default AppViewModel;
