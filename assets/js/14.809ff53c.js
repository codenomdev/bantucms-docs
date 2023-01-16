(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{288:function(n,e,t){"use strict";t.r(e);var a=t(10),o=Object(a.a)({},(function(){var n=this,e=n._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"server-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#server-configuration"}},[n._v("#")]),n._v(" Server Configuration")]),n._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#nginx"}},[n._v("Nginx")])])])]),e("p"),n._v(" "),e("h2",{attrs:{id:"nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[n._v("#")]),n._v(" Nginx")]),n._v(" "),e("p",[n._v("If you are deploying your application to a server that is running Nginx, you may use the following configuration file as a starting point for configuring your web server. Most likely, this file will need to be customized depending on your server's configuration.")]),n._v(" "),e("p",[n._v("Please ensure, like the configuration below, your web server directs all requests to your application's "),e("code",[n._v("public/index.php")]),n._v(" file. You should never attempt to move the "),e("code",[n._v("index.php")]),n._v(" file to your project's root, as serving the application from the project root will expose many sensitive configuration files to the public Internet:")]),n._v(" "),e("div",{staticClass:"language-ini extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ini"}},[e("code",[n._v('server {\n    listen 80;\n    listen [::]:80;\n    server_name example.com;\n    root /srv/example.com/public;\n \n    add_header X-Frame-Options "SAMEORIGIN";\n    add_header X-Content-Type-Options "nosniff";\n \n    index index.php;\n \n    charset utf-8;\n \n    location / {\n        try_files $uri $uri/ /index.php?$query_string;\n    }\n \n    '),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[n._v("location")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("=")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[n._v("/favicon.ico { access_log off; log_not_found off; }")]),n._v("\n    "),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[n._v("location")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("=")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[n._v("/robots.txt  { access_log off; log_not_found off; }")]),n._v("\n \n    error_page 404 /index.php;\n \n    location ~ \\.php$ {\n        fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;\n        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;\n        include fastcgi_params;\n    }\n \n    location ~ /\\.(?!well-known).* {\n        deny all;\n    }\n}\n")])])])])}),[],!1,null,null,null);e.default=o.exports}}]);