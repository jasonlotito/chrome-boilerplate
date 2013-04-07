(function(a){if(window.filepicker){return}var b=a.createElement("script");b.type="text/javascript";b.async=!0;b.src=("https:"===a.location.protocol?"https:":"https:")+"//api.filepicker.io/v1/filepicker.js";var c=a.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c);var d={};d._queue=[];var e="pick,pickMultiple,pickAndStore,read,write,writeUrl,export,convert,store,storeUrl,remove,stat,setKey,constructWidget,makeDropPane".split(",");var f=function(a,b){return function(){b.push([a,arguments])}};for(var g=0;g<e.length;g++){d[e[g]]=f(e[g],d._queue)}window.filepicker=d})(document);

filepicker.setKey('AjT3Ms44nTPuEShOhyQtgz');
chrome.tabs.captureVisibleTab(function(dataUrl){
    //document.write(dataUrl)
    var img = dataUrl.split('base64,', 2);
    console.log(img);
    filepicker.store(img[1], {mimetype: 'image/jpeg', base64decode: true}, function(FPFile){
        $.get('http://json.local:8000/asset/upload', {url:FPFile.url}, function(){
            console.log('success');
        });
        document.write('<a href="'+FPFile.url+'" target="_blank">See image here</a>')
    });
});