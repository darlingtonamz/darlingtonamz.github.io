$(function() {
  $('#datetimepickerStart').datetimepicker();
  $('#datetimepickerEnd').datetimepicker();
});

$(document).keypress(function(e) {
    if(e.which == 13 && $('.inpHolder').is(':visible')) {
        alert('You pressed enter!');
    }
});

var date;
$('#yts').on('click', function(){  
  date = getEpoch($('#datetimepicker').val());
  console.log('val: '+$('#datetimepicker').val()+' | now: '+$.now()+' | '+date);
});

function getEpoch(d){
  var split = d.split('/');
  var third = split[2];
  split.pop();
  var thirdSplit = third.split(' ');
  split.push(thirdSplit[0]);
  var last = thirdSplit[1].split(':');
  split.push(last[0],last[1]);
  split[0] -= 1970;
  split[1] -= 1;
  split[2] -= 1;
  //y,m,d,h,m
  var calc = [31556926,2629743,86400,3600,60];
  var out = 0;
  var i = 0;
  while(i < split.length){
    out += split[i] * calc[i];
    i++;
  }
  console.log(out);
  return out;
}
