const resource = [
    /* --- CSS --- */
    '/gitblog/assets/css/style.css',

    /* --- PWA --- */
    '/gitblog/app.js',
    '/gitblog/sw.js',

    /* --- HTML --- */
    '/gitblog/index.html',
    '/gitblog/404.html',

    
        '/gitblog/categories/',
    
        '/gitblog/tags/',
    
        '/gitblog/archives/',
    
        '/gitblog/about/',
    

    /* --- Favicons & compressed JS --- */
    
    
        '/gitblog/assets/img/favicons/android-chrome-192x192.png',
        '/gitblog/assets/img/favicons/android-chrome-512x512.png',
        '/gitblog/assets/img/favicons/apple-touch-icon.png',
        '/gitblog/assets/img/favicons/favicon-16x16.png',
        '/gitblog/assets/img/favicons/favicon-32x32.png',
        '/gitblog/assets/img/favicons/favicon.ico',
        '/gitblog/assets/img/favicons/mstile-150x150.png',
        '/gitblog/assets/js/dist/categories.min.js',
        '/gitblog/assets/js/dist/commons.min.js',
        '/gitblog/assets/js/dist/home.min.js',
        '/gitblog/assets/js/dist/misc.min.js',
        '/gitblog/assets/js/dist/page.min.js',
        '/gitblog/assets/js/dist/post.min.js',
        '/gitblog/assets/js/dist/pvreport.min.js'
];

/* The request url with below domain will be cached */
const allowedDomains = [
    

    'localhost:4000',

    
        'chirpy-img.netlify.app',
    

    'fonts.gstatic.com',
    'fonts.googleapis.com',
    'cdn.jsdelivr.net',
    'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
    
];

