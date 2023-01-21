var get_current_time = document.getElementById('get_current_time');
var get_current = document.getElementById('get_current');
setInterval(time, 100);
setInterval(get_ap, 100);

function time() {
  var d = new Date();
  var m = d.getMinutes();
  var h = d.getHours();
  // Hours
  if (h >= 12) {
    h -= 12;
  } else if(h >= 12 && h <= 12) {
    h = "0" + h - 12;
  }
  if (h <= 12) {
    h = "0" + h;
  }
  // Minutes
  if (m <= 9) {
    m = "0" + m;
  } else if (m == 0) {
    m = "00"
  }
  get_current_time.textContent = h + ":" + m;
}

function get_ap() {
  var d = new Date();
  var hours = d.getHours();
  if (hours >= 12) {
    get_current.textContent = "PM";
  } else {
    get_current.textContent = "AM";
  }
}

function enterkey() {
	if (window.event.keyCode == 13) {
    	newElement();
    }
}

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("t-input").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("오늘 할 일을 작성하세요.");
  } else {
    document.getElementById("t-todo-list").appendChild(li);
  }
  document.getElementById("t-input").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);