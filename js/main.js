function hideScroll(){
    document.getElementsByClassName("content")[0].style="overflow-y: hidden; height:unset;"
    var hcontent = document.getElementsByClassName("content")[0].offsetHeight;
    var hHeader= document.getElementsByClassName('headFloat')[0].offsetHeight;
    var hFooter = document.getElementsByClassName('footer')[0].offsetHeight;


    var sum = parseFloat(hContent) + parseFloat(hHeader) +parseFloat(hFooter);
    var str= "height:" + hContent + "px";
    var str2="height:" + sum+"px";
    window.alert(str2);
    document.getElementsByClassName('navFloat')[0].style=str2;

}