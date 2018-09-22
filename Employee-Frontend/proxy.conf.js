const PROXY_CONFIG = [
{
  context : [
    "/api/*",
  ],
  target: "http://localhost:9898",
  secure: false,
  changeOrigin: true

}]

module.exports =  PROXY_CONFIG;

 
