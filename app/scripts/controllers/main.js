	'use strict';

	/**
	 * @ngdoc function
	 * @name mytagAppApp.controller:MainCtrl
	 * @description
	 * # MainCtrl
	 * Controller of the mytagAppApp
	 */
	angular.module('mytagAppApp')
	  .controller('MainCtrl', function ($scope) {
	    this.awesomeThings = [
	      'HTML5 Boilerplate',
	      'AngularJS',
	      'Karma'
	    ];
	    var drag;
	    //Drag and drop code
	    angular.element('.draggable-handler').mousedown(function(e){
	    	//alert(this);
			  drag = this;
			  angular.element(drag).addClass('dragging');
			  angular.element(drag).css('left', e.clientX-this.offsetWidth/2);
			  angular.element(drag).css('top', e.clientY-this.offsetHeight/2 - 10);
			  angular.element(this).on('mousemove', function(e){    
			    angular.element(drag).css('left', e.clientX-this.offsetWidth/2);
			    angular.element(drag).css('top', e.clientY-this.offsetHeight/2 - 10);
			    window.getSelection().removeAllRanges();
			  })
			})

			angular.element('.draggable-handler').mouseleave(stopDragging)
			angular.element('.draggable-handler').mouseup(stopDragging)

			function stopDragging(){
			  drag = this;
			  angular.element(drag).removeClass('dragging')
			  angular.element(this).off('mousemove')
			}

	    


	  });
