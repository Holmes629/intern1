// ##### Header #####

var x = document.getElementById("list-id");
var x2 = document.getElementById("menu-id");
var x3 = document.getElementById("HeaderID");
var x4 = document.getElementById("searchID");
function MenuClick() {
    if (x.className=="list") {
        x.className = "listSelected";
        x2.innerHTML = '&#10006;';
    }
    else{
        x.className = 'list'
        x2.innerHTML = '&#9776;';
    }
}
function SearchClick() {
    if (x3.className=='Header') {
        x3.className = 'HeaderClick'; 
        x4.className = "searchBar" ;
    }
    else {
        x3.className = "Header";
        x4.className = "search-Bar";
    }
}

// ##### Devops.html #####

var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");
var h31 = document.getElementById("h31");
var h32 = document.getElementById("h32");
var h33 = document.getElementById("h33");
var h34 = document.getElementById("h34");

function funh31(){
    p2.className = "p2"
    p3.className = "p3"
    p4.className = "p4"
    h32.className = "h32"
    h33.className = "h33"
    h34.className = "h34"
    h31.className ="h31_selected";
    p1.className ="p1_selected";
}
function funh32(){
    p1.className = "p1"
    p3.className = "p3"
    p4.className = "p4"
    h31.className = "h31"
    h33.className = "h33"
    h34.className = "h34"
    h32.className ="h32_selected";
    p2.className ="p2_selected";
}
function funh33(){
    p2.className = "p2"
    p1.className = "p1"
    p4.className = "p4"
    h31.className = "h31"
    h32.className = "h32"
    h34.className = "h34"
    h33.className ="h33_selected";
    p3.className ="p3_selected";
}
function funh34(){
    p2.className = "p2"
    p3.className = "p3"
    p1.className = "p1"
    h31.className = "h31"
    h33.className = "h33"
    h32.className = "h32"
    h34.className ="h34_selected";
    p4.className ="p4_selected";
}












