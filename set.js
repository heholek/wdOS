$(document).ready(function(){
  const remote = require('electron').remote;
  const {ipcRenderer} = require('electron');
  var exec = require('child_process').exec;
  var fs = require('fs');
  const {shell} = require('electron');
  const wd_homedir = require('os').homedir();
  var wd_home = wd_homedir + '/Documents/wdOS/';
  var file = fs.readFileSync(wd_home + 'Core/set.json');
  var set = JSON.parse(file);
  $("#k option[value=" + set.kioske + "]").prop('selected', true);
  $("#w").val(set.width);
  $("#h").val(set.height);
  $("#f option[value=" + set.frame + "]").prop('selected', true);
  $("#submit").click(function(){
    var con = '{"kioske": ';
    con += $("#k").val();
    con += ', "height": ';
    con += Math.max($("#h").val(), 400);
    con += ', "width": ';
    con += Math.max($("#w").val(), 600);
    con += ', "frame": ';
    con += $("#f").val();
    con += '}';
    //con = JSON.stringify(con);
	   fs.writeFileSync(wd_home + 'Core/set.json', con);
	    alert("Status: Saved \n Note: Restart WebDektop to see your changes.");
  });
});
