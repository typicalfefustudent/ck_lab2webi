var count = 0;
document.getElementById("buto").onclick = function () 
{
    count ++;
    if (count % 2 == 0)
        {
            document.getElementById("demo").innerHTML="";
        }
        else
        {
            var img = document.createElement("img");
            img.src = "pics/butgif.gif";
            img.classList.add("fullscreen-gif");
            document.getElementById("demo").appendChild(img);
        }
}
