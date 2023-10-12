app.get("/static", (req, res) => { 
    res.render("static"); 
}); 
  
// Route to display dynamic src images 
app.get("/dynamic", (req, res) => { 
    imageList = []; 
    imageList.push({ src: "icons/flask.png", name: "flask" }); 
    imageList.push({ src: "icons/javascript.png", name: "javascript" }); 
    imageList.push({ src: "icons/react.png", name: "react" }); 
    res.render("dynamic", { imageList: imageList }); 
});