var gulp = require('gulp');
var sass = require("gulp-sass");

gulp.task('chatwork', function() {
  
	var request = require('request');
	var room_id = '<ルームID>';
	var message = '<任意のメッセージ>';
	var api_key = '<API_KEY>';
 
	var options = {
		url: 'https://api.chatwork.com/v1/rooms/'+room_id+'/messages',
		headers: {'X-ChatWorkToken': api_key},
	    form: { body: message },
	    json: true
	};
 
	request.post(options, function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	       console.log(body);
	    }else{
	        console.log('error: '+ response.statusCode);
	    }
	});

});

gulp.task("sass", function() {
    gulp.src("sass/*scss")
        .pipe(sass())
        .pipe(gulp.dest("sass"));
});


gulp.task('watch', function(){
　var gaze_opt = {
    debounceDelay: 10000 // wait 10 sec after the last run
  };
  gulp.watch('sass/*.scss',gaze_opt,['chatwork','sass']);
});