var posts=["2025/05/24/hello-world/","2025/05/24/Mysql/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };