// slide show images start
function changeImage()
{
    var img = document.getElementById("img");
    img.src = images[x];
    x++;

    if(x >= images.length){
        x = 0;
    } 

    setTimeout("changeImage()", 500);
}

var images = ["images/demo/img1.jpg","images/demo/img2.jpg","images/demo/img4.jpeg","images/demo/img1.jpg"];
x = 0;
setTimeout("changeImage()", 1000);
// slide show images end

// var images_data=["images/demo/img1.jpg","images/demo/img2.jpg","images/demo/img4.jpeg","images/demo/img1.jpg"];



// section services start
var images_data=["images/demo/img1.jpg","images/demo/img2.jpg","images/demo/img4.jpeg"];
var h2_data=["Indonectetus facilis","Indonectetus facilis","Indonectetus facilis"];
var p_data=["Nullamlacus dui ipsum conseque loborttis non euisque morbi penas dapibulum orna.","Nullamlacus dui ipsum conseque loborttis non euisque morbi penas dapibulum orna.","Nullamlacus dui ipsum conseque loborttis non euisque morbi penas dapibulum orna."];
for(var i=0;i<images_data.length;i++){

    var article=document.createElement("article");
    article.setAttribute("class","one_third");
    if (i==images_data.length-1){
        article.setAttribute("class","one_third lastbox");
    }
    var figure=document.createElement("figure");
    article.appendChild(figure);
    var image=document.createElement("img");
    image.src=images_data[i];
    image.style.height="180px";
    image.style.width="290px";
    figure.appendChild(image);
    var figure_caption=document.createElement("figcaption");
    figure.appendChild(figure_caption);
    var h2=document.createElement("h2");
    h2.textContent=h2_data[i];
    figure_caption.appendChild(h2);
    var p=document.createElement("p");
    p.textContent=p_data[i];
    figure_caption.appendChild(p);
    var footer=document.createElement("footer");
    footer.setAttribute("class","more");

    var a=document.createElement("a");
    a.setAttribute("href","#");
    a.textContent="Read more";
    figure_caption.appendChild(footer);
    footer.appendChild(a);
    document.getElementById("services").appendChild(article);
}
// services ending


// nav bar start
var div1=document.createElement("div");
div1.setAttribute("id","hgroup");
var h1_ele=document.createElement("h1");
var a_ele=document.createElement("a");
a_ele.textContent="BASIC88";
h1_ele.appendChild(a_ele)
a_ele.setAttribute("href","#");
var h2_ele=document.createElement("h2");
h2_ele.textContent="Templates basic88";
div1.appendChild(h1_ele);
div1.appendChild(h2_ele);
var nav_ele=document.createElement("nav");
var ul_ele=document.createElement("ul");

nav_data=["HOME","ABOUT","SERVICES","BLOG","CONTACT US"]


for(var i=0;i<5;i++){
  var li=document.createElement("li");
  var a_ele2=document.createElement("a");
  a_ele2.setAttribute("href","#");
  a_ele2.textContent=nav_data[i];
  if (i==4){
      li.setAttribute("class","last");
  }

  li.appendChild(a_ele2);
  ul_ele.appendChild(li);

}
nav_ele.appendChild(ul_ele);
var k =document.getElementById("header");
k.appendChild(div1);
k.appendChild(nav_ele);
// nav bar ending


var article2=document.createElement("article");
var figure2=document.createElement("figure");
article2.appendChild(figure2);
var image2=document.createElement("img");
image2.src="images/demo/img2.jpg";
image2.style.height="250px";
image2.style.width="450px";
figure2.appendChild(image2);
var figure_caption2=document.createElement("figcaption");
figure2.appendChild(figure_caption2);
var h22=document.createElement("h2");
h22.textContent="Indonectetus facilis leo nibh";
figure_caption2.appendChild(h22);
var p2=document.createElement("p");
p2.textContent="This is a W3C standards compliant free HTML5 website template from OS Templates. This template is distributed using a website template licence.";
var p3=document.createElement("p");
p3.textContent="This is a W3C standards compliant free HTML5 website template from OS Templates. This template is distributed using a website template licence.";
figure_caption2.appendChild(p2);
figure_caption2.appendChild(p3);
var footer2=document.createElement("footer");
footer2.setAttribute("class","more");

var a2=document.createElement("a");
a2.setAttribute("href","#");
a2.textContent="Read more";
figure_caption2.appendChild(footer2);
footer2.appendChild(a2);
document.getElementById("intro").appendChild(article2);

// nav bar code ending

// footer code starting
for(let i=0;i<4;i++){
    var section_ele=document.createElement("section");
    section_ele.setAttribute("class","one_quarter");
    if(i==3){
      section_ele.setAttribute("class","one_quarter lastbox");
    }
    var h2_ele2=document.createElement("h2");
    h2.setAttribute("class","title");
    h2_ele2.textContent="text link";
    section_ele.appendChild(h2_ele2);

    var nav_ele2=document.createElement("nav");
    var ul_ele2=document.createElement("ul");

    for(var j=0;j<5;j++){
        var li_ele2=document.createElement("li");
        var a_ele3=document.createElement("a");
        a_ele3.setAttribute("href","#");
        a_ele3.textContent="Lorem ipsum dolor sit";
        if (j==4){
            li_ele2.setAttribute("class","last");
        }

        li_ele2.appendChild(a_ele3);
        ul_ele2.appendChild(li_ele2);

      }
      nav_ele2.appendChild(ul_ele2);
      section_ele.appendChild(nav_ele2);
      var k2=document.getElementById("footer");
      k2.appendChild(section_ele);

  }
//   footer code ending