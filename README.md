# nodejsdemo

Node.js application demo



## Run

```bash
HOST=127.0.0.1 PORT=3000 node app.js
```



## Deploy

```bash
sudo cp nginx.conf /etc/nginx/sites-enabled/

sudo nginx -t
sudo nginx -s reload

sudo /etc/init.d/nginx stop
sudo /etc/init.d/nginx start
sudo /etc/init.d/nginx restart
```



## Reference

- [web-server](https://docs.nginx.com/nginx/admin-guide/web-server/)
- [nodejs-guide](https://nodejs.org/en/docs/guides/getting-started-guide/)
