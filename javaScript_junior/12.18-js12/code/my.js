/*
* 作者： 李某华
* 时间：2019-12-17 10:44:28
* 功能：封装兼容性函数
* 注意事项：请勿在引入当前类库的页面 使用my标识符
* */

/*
* 目录：
*   getWinSize()：获取屏幕宽高.无参数，返回一个对象，width属性获取屏幕的宽度，height属性获取屏幕的高度
*   getID(eleIDName)：通过ID获取元素，参数是元素的ID名  返回获取的元素
*   getEleToWin(ele)：1个参数，元素节点 获取元素距离屏幕边缘的位置 返回一个对象 包含left和top
*   getWinScroll()：没有参数，获取浏览器滚动条的位置，返回一个对象，包含top和left属性
*   setWinScroll(n,m): 设置浏览器滚动条位置，两个参数，第一个是横向滚动条，第二个是竖向滚动条，如果值传递一个，代表横向
*   getDocSize()：无参数，获取文档的宽高，返回一个对象，包含width和height属性
* */
+function (w) {
    w.my = {};

    /*
    * getWinSize()
    *   无参数
    *   返回一个对象，width属性获取屏幕的宽度，height属性获取屏幕的高度
    * */
    my.getWinSize = function () {
        var w = document.documentElement.clientWidth||document.body.clientWidth;
        var h = document.documentElement.clientHeight||document.body.clientHeight;;
        return {
            width:w,
            height:h
        }
    }


    /*
    * getID(eleIDName)
    *   功能：获取标签通过id
    *   参数是元素的ID名  返回获取的元素
    * */
    my.getID = function (eleIDName) {
        return document.getElementById(eleIDName);
    }

    /*
    * getEleToWin(ele)
    *   1个参数，元素节点
    *   功能 获取元素距离屏幕边缘的位置
    *   返回一个对象 包含left和top
    *
    * */
    my.getEleToWin = function (ele) {
        var l = 0,t = 0;
        var oNewCon = ele;
        while(oNewCon){
            // 因为offsetLeft获取的是元素距离定位父级边框内侧的长度，所以，如果不是oCon，那么就要获取边框
            if (oNewCon == ele){
                l += oNewCon.offsetLeft;
                t += oNewCon.offsetTop;
                oNewCon = oNewCon.offsetParent;
            }else{
                l += oNewCon.offsetLeft + oNewCon.clientLeft;
                t += oNewCon.offsetTop + oNewCon.clientTop;
                oNewCon = oNewCon.offsetParent;
            }
        }
        return {left:l,top:t};
    };


    /*
    * getWinScroll()
    *   没有参数，获取浏览器滚动条的位置，返回一个对象，包含top和left属性
    *
    * */
    my.getWinScroll = function () {
        var h = document.documentElement;
        var top = window.pageYOffset || h.scrollTop || document.body.scrollTop;
        var left = window.pageXOffset || h.scrollLeft || document.body.scrollLeft;
        return {
            top:top,
            left:left
        }
    }


    /*
    * setWinScroll(n,m): 设置浏览器滚动条位置，
    *   两个参数，第一个是横向滚动条，第二个是竖向滚动条，如果值传递一个，代表横向
    * */
    my.setWinScroll = function (n,m) {
        if (typeof m != "undefined" && typeof m =="number") {
            document.documentElement.scrollTop = m;
            document.body.scrollTop =m
        }
        if (typeof n != "undefined" && typeof n =="number") {
            document.documentElement.scrollLeft = n;
            document.body.scrollLeft = n;
        }
    };

    /*
    * getDocSize()
    *   无参数，获取文档的宽高，返回一个对象，包含width和height属性
    *
    * */
    my.getDocSize = function () {
        return {
            height:document.documentElement.offsetHeight || document.body.offsetHeight,
            width:document.documentElement.offsetWidth || document.body.offsetWidth
        }
    }

}(window);

