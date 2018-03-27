var Audio ={
	audio : $("<audio>"),
	id:"songOut",
	folder:null,
	dir: null, 
	//isdoc: true, /* take this line out if you don't want to output the dir = * line*/
	addsong: function(file,output){
		if($("#"+ this.id).length === 0){ /* if the audio tag dosn't exist then make it */
			var el = this.audio;
			el.attr("controls"," ");
			el.attr("src",file);
			el.attr("id",this.id);
			$(output).append(el);
			this.dir = (file);
		}else{ /* otherwise change the Src attr*/
			$("#"+this.id).attr("src",file);
			console.log("#"+this.id);
		}
			console.log("dir = "+Audio.dir);	
	},
};
var folder = "../songs/";
var file = "click.mp3";
var id = "#" + Audio.id;
Audio.folder = folder;
Audio.dir = folder+file;
$(document).ready(function(){
	console.info("done loading");
	Audio.addsong(folder+file,"body");
})