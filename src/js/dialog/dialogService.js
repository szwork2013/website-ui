angular.module('ui.website.dialog.service', [])
    .factory('DialogService', ['$document','$compile','$rootScope', function($document, $compile, $rootScope){
      return {
        alert: function(content, title){
          var walert = $document.find('walert');
          if(walert.length == 0){
            walert = angular.element('<walert title="'+title+'">'+content+'</walert>');
            $document.find('body').append(walert);

          }else{
            walert.html(content);
          }
          var scope = $rootScope.$new(false);
          if(!title){
            title = "警告";
          }
          scope.title = title;
          $compile(walert)(scope);
        },
        confirm: function(content, success, title){
          var wconfirm = $document.find('wconfirm');
          if(wconfirm.length == 0){
            wconfirm = angular.element('<wconfirm title="'+title+'" >'+content+'</wconfirm>');
            $document.find('body').append(wconfirm);

          }else{
            wconfirm.html(content);
            wconfirm.data('success', success);
          }
          var scope = $rootScope.$new(false);
          if(!title){
            title = "请确认";
          }
          scope.title = title;
          scope.ok = success;
          $compile(wconfirm)(scope);
        },
        prompt: function(option){
          var wprompt = $document.find('wprompt');
          if(!option){
            option = {};
            option.textType = "text";
          }

          if(!option.title){
            option.title = "请输入";
          }
          if(wprompt.length == 0){
            wprompt = angular.element('<wprompt title="'+option.title+'"><input type="'+option.textType+'" class="form-control" style="width: 70%; margin-left: 15%"/></wprompt>');
            $document.find('body').append(wprompt);
          }else{
            wprompt.html('<input type="'+option.textType+'" class="form-control" style="width: 70%; margin-left: 15%"/>');
          }
          var scope = $rootScope.$new(false);
//          if(!option.title){
//            option.title = "请输入";
//          }
//          scope.title = option.title;
//          scope.callback = option.callback;
          scope.option = option;
          scope.title = option.title;
          $compile(wprompt)(scope);
        }
      }
    }])