import angular from 'angular';
import 'angular-ui-router';

import config from './config';

import AddController from './controllers/add.controller';
import ListController from './controllers/list.controller';
import SingleController from './controllers/single.controller';
import EditController from './controllers/edit.controller';


import WhiskeyService from './services/whiskey.service';

angular
  .module('app', ['ui.router'])
  .constant('PARSE', {
    URL: 'https://api.parse.com/1/',
    CONFIG: {
      headers: {
        'X-Parse-Application-Id': '1WqmwsuCOapLp7nM9GHtZB0iaMNmHVEqhHyk81H4',
        'X-Parse-REST-API-Key': 'YLFTGZbX1g6qPd3xzhVAPMdZ6EfEqUfSwDEpgz6w'
      }
    }
  })
  .config(config)
  .controller('AddController', AddController)
  .controller('ListController', ListController)
  .controller('SingleController', SingleController)
  .controller('EditController', EditController)
  .service('WhiskeyService', WhiskeyService)
;