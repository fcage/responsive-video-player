var gia = function(gia, $){

	gia.videoPlayer = function(videoObj, container, videoelement, videoRatioW, videoRationH){
		
			//Note: the following lines can be added as desired to hide the play button centered on the player
			// 			jwplayer(videoelement).getPlugin("display").hide();
			// 			jwplayer(videoelement).getPlugin("display").show();
		
			var vp = {
				'videoObj': videoObj,
				'container': container,
				'videoelement': videoelement,
				'origW': 940
			}
			
			//funciton initializes the jwplayer
			vp.player = jwplayer(videoelement).setup({
				'modes': [
	                        { type: 'html5' },
	                        { type: 'flash', src: 'http://static.guim.co.uk/flash/jwplayer/jwplayer-5.10.swf' }
	                    ],
		        'file': videoObj['file'],
				'image': videoObj['image'],
				"controlbar.idlehide": true,
				events: {
					onBeforePlay: function(){
						$('.' + vp.videoelement + '-content').fadeOut(100);
					},
					onReady: function(){

					},
					onPause: function(){

					},
					onComplete: function(){
						$('.' + vp.videoelement + '-content').fadeIn(100);
					}
				}
				
		    });
			
			//resizes the player to fit to the containing div
			vp.resizePlayer = function(){
				var w = $('#' + vp.container).width()
				jwplayer(vp.videoelement).resize(w,w * videoRationH/videoRatioW);
			}

			//resize the player once document has finished rendering
			//useful to account for width added from scrollbars added to window after video initialzied
			$(window).resize(function(){
				vp.resizePlayer()
			})
			
			//set the initial width when player is written to page so it doesn't jump around so bad
			vp.resizePlayer()
			
			
			return vp;			
		}


	return gia;
	
}(gia || {}, jQuery);