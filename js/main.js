function hideScroll() {


    document.getElementsByClassName('content')[0].style = "overflow-y:hidden; height:unset;";
    var hContent = document.getElementsByClassName('content')[0].offsetHeight;
    var hHeader = document.getElementsByClassName('headFloat')[0].offsetHeight;
    var hFooter = document.getElementsByClassName('footer')[0].offsetHeight;
   
    sum = hContent + hFooter + hHeader;
    var sumlitle = hContent + hFooter ;
  
    
    var str = "height:" + sumlitle + "px";
    var str2 = "height:" + sum + "px";
    document.getElementsByClassName('navFloat')[0].style = str2;
    document.getElementsByClassName('right')[0].style = str;

}