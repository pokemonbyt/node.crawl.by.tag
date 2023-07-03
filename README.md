# API Crawl website's data by tag name CREATED BY NEMSY
####==============================
#### 1、Môi trường cài đặt

|Tên module|Phiên bản|
|---|---
|Node
|CentOS


#### 2、Các package cần dùng (Nếu đã đủ code, có thể bỏ qua để tới bước 3)

```npm init -y```
```npm install express```
```npm install axios```
```npm install cheerio```



Thiết lập trong nginx

    location / {
        proxy_set_header   X-Forwarded-For $remote_addr;
        proxy_set_header   Host $http_host;
        proxy_pass         http://192.168.43.31:3000;
    }


#### 3, Các bước deploy lên aapanel
- Cài đặt node js
 ```sudo yum install nodejs```
 ```sudo yum install npm```
 ```sudo npm install pm2 -g```
- Vào thư mục chứa code, chạy 
```pm2 start app.js```

#### 4, Sử dụng
Thiết lập api: 
http://{IP}:{PORT}/html?url=https://vnexpress.net/&tag=h2


