# Config

## Nginx

```nginx
server {
    listen 80 default_server;
    index index.html;
    root /var/www/site1;
    add_header Access-Control-Allow-Origin "*";
    add_header Access-Control-Allow-Methods "GET";
    location / {
        try_files $uri $uri/ /index.html ;
    }
}

server {
    listen 8080;
    index index.html;
    root /var/www/site2;
    location / {
        try_files $uri $uri/ /index.html ;
    }
}
```

## Apache2

```apache
0
```