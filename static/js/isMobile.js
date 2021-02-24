(function() {
    console.log("判断移动端");
    // 判断当前url
    let url = window.location.href;
    let pathname = window.location.pathname;
    console.log(pathname);
    let mobilerg = /\-mobile/;
    console.log(mobilerg.test(pathname));
    if (!mobilerg.test(pathname)) {
        // 访问的资源是pc端页面
        var sUserAgent = navigator.userAgent.toLowerCase();
        if (/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(sUserAgent)) {
            console.log("移动端");
            if (pathname === '/') {
                pathname = '/index';
            }
            //跳转移动端页面
            window.location.replace(`${pathname}-mobile`); //直接拼接字符串进入移动端页面
        } else {
            console.log("PC端");
            // 直接访问
        }
    } else {
        // 访问的资源是手机端页面
        var sUserAgent = navigator.userAgent.toLowerCase();
        if (/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(sUserAgent)) {
            console.log("移动端,入口正确");
            // 直接访问
        } else {
            console.log("PC端");
            pathname = pathname.replace(mobilerg, '');
            if (pathname === '/index') {
                pathname = '/';
            }
            //跳转pc端页面
            window.location.replace(`${pathname}`); //直接拼接字符串进入移动端页面
        }
    }

})();