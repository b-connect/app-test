'use strict';

/**
 * @ngdoc service
 * @name bcApp.Cache
 * @description
 * # Cache
 * Service in the bcApp.
 */
angular.module('bcApp')
  .service('Cache', function ($localStorage) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return {
      setCache : function(id,data,expire) {
        $localStorage[id] = {
          date : new Date().getTime(),
          expire : (expire*100),
          data : data
        };
      },
      clearCache : function(id) {
        if ( !id ) {
          $localStorage = [] ;
        } else if ( $localStorage[id] ) {
          delete $localStorage[id] ;
        }
      },
      getCache : function(id) {
        if ( !$localStorage[id] ) {
          return false ;
        }
        else if ( $localStorage[id].expire === -1 ) {
          return $localStorage[id] ;
        }
        else if ( $localStorage[id].date > (new Date().getTime() - $localStorage[id].expire ) ) {
          console.log('Cached') ;
          return $localStorage[id] ;
        } else {
          //console.log($localStorage[id].date + " < " + )
          console.log('Expired') ;
          return false ;
        }
      }
    };
  });
