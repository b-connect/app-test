'use strict';

/* jshint camelcase: false */

/**
 * @ngdoc service
 * @name bcApp.Content
 * @description
 * # Content
 * Service in the bcApp.
 */
angular.module('bcApp')
  .service('Content', function ($http,Cache) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var service = {
      runnings : [],
      caseStudyUrl :'https://www.drupal.org/api-d7/node.json?type=casestudy&field_status=featured',
      isRunning : function(url) {
        return (service.runnings[url]);
      },
      getContent : function(cb) {
        var data = false ;

        if ( (data = Cache.getCache(service.caseStudyUrl)) ) {
          console.log('Cached') ;
          cb(data.data) ;
        }

        if ( service.isRunning(service.caseStudyUrl) ) {
          console.log('Already running. Wait please') ;
          return ;
        }

        service.runnings[service.caseStudyUrl] = true;

        return $http.get (service.caseStudyUrl).success(function(result){
          var data = result.list.slice(0,10) ;
          var c = data.length ;

          data.forEach(function(v,i){
            service.getImage(v.field_mainimage.file.id,function(url){
              c--;
              result.list[i].field_mainimage.file.url = url ;
              if ( c === 0 ) {
                Cache.setCache(service.caseStudyUrl,result,360);
                if ( service.runnings[service.caseStudyUrl] ) {
                  delete service.runnings[service.caseStudyUrl];
                }
                cb(result) ;
              }
            });
          });

        });
      },
      getImage  : function(id,cb){
        return $http.get ('https://www.drupal.org/api-d7/file/'+id+'.json').success(function(result){
          cb(result.url) ;
        });
      }
    };
    return service ;
  });
