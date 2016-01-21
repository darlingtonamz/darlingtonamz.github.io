$('.btn').on('click', function(event){
    //event.preventDefault();
    var check = $('#checkBox').prop;

    if (check) {
      $('#pName').text($('#inputEmail').val());
      $('#pImg').html('<img src="'+ $('#profile-img').attr('src') +'"/>');
        $('#loginContainer').hide(400);
        $('#todoContainer').removeClass('hidden');
    };
    return false;
});

$(function() {
  $('#datetimepickerStart').datetimepicker();
  $('#datetimepickerEnd').datetimepicker();
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

function toggleIt(){
  if ($('.inpHolder').is(':visible')){
    $('.inpHolder').hide(400);
    $('#addBut').show(400);
  }else{
    $('.inpHolder').show(400);
    $('#addBut').hide(400);
  }
}

$('#addBut, #cancel').on('click', function(){
  toggleIt();
});
var todo = [];
/*var date;
$('#yts').on('click', function(){  
  date = getEpoch($('#datetimepicker').val());
  console.log('val: '+$('#datetimepicker').val()+' | now: '+$.now()+' | '+date);
});*/
function addTodo(){
  //console.log('todo');
  var title = $('#title').val();
  var start = getEpoch($('#datetimepickerStart').val());
  var end = getEpoch($('#datetimepickerEnd').val());
  //console.log(start+' : '+end);
  if (start >= end){
    alert('Invalid range: End datte is less than Start date');
    return;
  }
  
  if(inRange(start)){
    console.log(true);
    alert('A todo within your range already exist');
    return;
  }
  
  var mTodo = {
    'title': title,
    'start': start,
    'end'  : end
  };
  
  todo.push(mTodo);
  var now = $.now() / 1000;
  var row = $('<div>', {class:'row'});
  var top = $('<div>', {class:'hold space top'}).text(title);
  var bottom = $('<div>', {class:'hold al-right'});
  var bleft = $('<div>', {class:'col-xs-6 green'}).text($('#datetimepickerStart').val());
  var bright = $('<div>', {class:'col-xs-6 red'}).text($('#datetimepickerEnd').val());
  bottom.append(bleft, bright);
  row.append(top, bottom);
  
  if(start > now)
    $('#yts').append(row);
  else if(start <= now && end > now)
    $('#inprog').append(row);
  else
    $('#complete').append(row);
  
  clear();
}

$('#add').on('click', function(){
  addTodo();
});

function inRange(s){
  var inR = false;
  var i = 0;
  while(i < todo.length){
    var e = todo[i];
    if((e.start <= s) && (e.end >= s)){
      console.log(s+' | '+e.start+' | '+e.end);
      inR = true;
      break;
    }
    i++;
  }
  return inR;
}

function clear(){
  $('#title, #datetimepickerStart, #datetimepickerEnd').val('');
}