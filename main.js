var guest_list = [];
var guest_name = document.getElementById("name1");

function submit() {
    guest_list.push(guest_name);
    document.getElementById("display_names").innerHTML = guest_list;
}

function show() {
    document.getElementById("p1").innerHTML = guest_list;
}

function sorting() {
    guest_list.sort;
    document.getElementById("sorted_list").innerHTML = guest_list;
}

function search() {
    var s = document.getElementById("s1").value
    var found = 0;
    var i;
    for(i=0, i<guest_list.length, i++) {
        if (s == guest_list[i]) {
            found = found + 1;
        }
    }

    document.getElementById("p2").innerHTML = "name_found" + found + "time/s";
}