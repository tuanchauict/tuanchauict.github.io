var app = angular.module("RepoStarApp", []);

app.controller("RepoContainer", function(){
    var repo = this;
    repo.form = {
        url: "",
        watch: true,
        star: true,
        folk: true
    };
    var baseUrl = "http://tuan-flask.herokuapp.com/service/star?url=";
    repo.image = "";
    repo.imageMd = "";

    repo.update = function(){
        if(repo.form.url.length > 0){
            repo.image = baseUrl + repo.form.url;
            if(repo.form.watch || repo.form.star || repo.form.folk){
                repo.image += "&type=";
                if(repo.form.watch){
                    repo.image += "watch|";
                }
                if(repo.form.star){
                    repo.image += "star|";
                }
                if(repo.form.folk){
                    repo.image += "folk";
                }
            }

            repo.imageMd = "![](" + repo.image + ")";
        }
        else{
            repo.image = "";
            repo.imageMd = "";
        }
    };

    repo.copy = function(){
        console.log(repo.image);
        ZeroClipboard.setData( "text/plain", repo.image );

    };
});

// ZeroClipboard.config( { swfPath: "repo/js/ZeroClipboard.swf" } );
// var client = new ZeroClipboard( document.getElementById("copy-btn") );