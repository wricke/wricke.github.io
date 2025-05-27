var posts=["2025/05/26/File/","2025/05/26/FileTest/","2025/05/24/Mysql/","2025/05/24/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };