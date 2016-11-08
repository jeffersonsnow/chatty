// 'use strict';

angular.module('chattyApp')
  .factory('messageService', function ( $http ) {
    return {
      getMessages: function () {
        return $http.get('http://localhost:8989');
      },
      // addMessage: function(message) {
      //   return $http({
      //     method: 'POST',
      //     url: 'http://localhost:8989',
      //     data: message,
      //   }).then(function(res) {
      //
      //   });
      // }
      addMessage: function ( message ) {
        console.log(message);
        return $http.post('http://localhost:8989', { message: message });
      }
    };
  });
