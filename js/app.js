$(document).on('ready',function(){
	var myBoard = new DrawingBoard.Board('board');
	myBoard.addControl('Download');
	
	$(".drawing-board-control-download-button").click(function(){
		var cnv = document.getElementById("drawing-board-id");
		cnv.toBlob(function (blob) {		
		
			var sdcard = navigator.getDeviceStorage("pictures");
			var request = sdcard.delete("mycddddandddvas.png");
			
			request.onsuccess = function () {
				saveAndSend(blob);
			}

				function saveAndSend(blob) {				
					var storage = navigator.getDeviceStorage("pictures");
					var request = storage.addNamed(blob, "mycddddandddvas.png");

					request.onsuccess = function () {
						alert('save image succesful')						
					}
					
					request.onerror = function () {
						alert('can not save')
					}
					
				}
					
		
		}); 
		
		
	});
	
});
