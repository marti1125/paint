function randomUUID() { 
	var s = [], itoh = '0123456789ABCDEF';
	for (var i = 0; i <36; i++) s[i] = Math.floor(Math.random()*0x10);
	s[14] = 4;
	s[19] = (s[19] & 0x3) | 0x8;
	for (var i = 0; i <36; i++) s[i] = itoh[s[i]];
	s[8] = s[13] = s[18] = s[23] = '_';
	return s.join(''); 
}

$(document).on('ready',function(){
	var myBoard = new DrawingBoard.Board('board');
	//myBoard.addControl('Download');
	
	$(".drawing-board-control-save-button").click(function(){
		var randomImage = randomUUID();
		var cnv = document.getElementById("drawing-board-id");
		cnv.toBlob(function (blob) {		
		
			var pic = navigator.getDeviceStorage("pictures");
			var request = pic.delete("abc.png");
			
			request.onsuccess = function () {
				saveAndSend(blob);
			}

			function saveAndSend(blob) {				
				var storage = navigator.getDeviceStorage("pictures");
				var request = storage.addNamed(blob, "image-"+randomImage+".png");

				request.onsuccess = function () {
					alert('the image has saved successfully')						
				}
				
				request.onerror = function () {
					alert('can not save the image')
				}
				
			}					
		
		}); 		
		
	});
	
});
