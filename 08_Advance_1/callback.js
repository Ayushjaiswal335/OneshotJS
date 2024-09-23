const fn = () => {
  console.log("nothing");
}


const callback = (arg,fn) => {
        console.log(arg);
        fn()
}


const loadScript = (src, callback) => {
        let sc = document.createElement("script");
        sc.src = src;
        sc.onload = callback("Ayush",fn); 
        document.head.append(sc);
}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-actionscript.min.js",callback)