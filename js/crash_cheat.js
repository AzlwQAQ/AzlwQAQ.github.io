var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/joke.ico");
        document.title = 'o(￣ε￣*)大変だ!';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/favicon.ico");
        document.title = ' ( ๑•̀ㅂ•́) ✧被发现了～';
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
//(ノω<。)ノ))☆.。  ヾ(´･ω･｀)ﾉ     o(￣ε￣*)       ( *￣▽￣)   (*￣︿￣)     (ﾟДﾟ*)ﾉ    (〃＞目＜)    ( ｀д′)