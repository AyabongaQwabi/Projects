var imgIndex = 0;
$(document).ready(function()
{
        var imgUrl = "../images/dtown/" + images[0];
        console.log("setting to image at index " + imgIndex + " on array");
        $('#content p').html(captions[imgIndex]);
        $('#name').html(names[imgIndex]);
})

var names = ["McBrain", "Bling", "Pelo", "Pelo", "Kudu", "Kudu", "TFA"];
var images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg"];


var captions = ["Mc Bara from Durban . previuously part resided in Dutywa ." +
                "The great swag hero, voted by Elegance . A fashion enthusiat in Dtown ",
                "Bling Le'Dude Kalevra . one the most creative mccees of the age " +
                ". This Nmmu student has got the balls for the wrongs.", "Thee Pelo from the heights of Govan Mbeki Location." +
                "This female rapper is full of suprises ", " ", "KUDU Clothing ", " Time For Africa clothing brand by Granextito V I", "KUDU"];


$("#prev").click(function ()
{
    console.log('Inside Prev function..');

    console.log("imgIndex :" + imgIndex + " - 1 = " + (imgIndex - 1));
    imgIndex--;
    if (imgIndex < 0)
    {
        console.log("ImgIndex is " + imgIndex + " which is < 0 . hence imgIndex restrted to 6");
        imgIndex = 6;
    }
    if (imgIndex == 0)
    {
        var imgUrl = "../images/dtown/" + images[0];
        console.log("setting to image at index " + imgIndex + " on array");
        $("#content img").animate({ left: "800px" }, 'slow').fadeIn("fast").attr('src', imgUrl)
        $('#content p').html(captions[imgIndex]);
        $('#name').html(names[imgIndex]);
        console.log("Done !");


        //$("#content img").attr('src',imgUrl).delay(2000);
        //$("#content img").fadeIn("slow");

    }
    else
    {
        var imgUrl = "../images/dtown/" + images[imgIndex];
        console.log("setting to image at index " + imgIndex + " on array");
        $("#content img").fadeIn("fast").attr('src', imgUrl);
        $('#content p').html(captions[imgIndex]);
        $('#name').html(names[imgIndex]);
        console.log();
        console.log("Done !");
    }

});

$("#next").click(function ()
{
    console.log('Inside Prev function..');

    console.log("imgIndex :" + imgIndex + " - 1 = " + (imgIndex - 1));
    imgIndex++;
    if (imgIndex > 6)
    {
        console.log("ImgIndex is " + imgIndex + " which is > 6 . hence imgIndex restrted to 0");
        imgIndex = 0;
    }
    if (imgIndex == 0)
    {
        var imgUrl = "../images/dtown/" + images[0];
        console.log("setting to image at index " + imgIndex + " on array");
        $('#content p').html(captions[imgIndex]);
        console.log("Done !");
        $('#name').html(names[imgIndex]);

        //$("#content img").attr('src',imgUrl).delay(2000);
        //$("#content img").fadeIn("slow");

    }
    else
    {
        var imgUrl = "../images/dtown/" + images[imgIndex];
        console.log("setting to image at index " + imgIndex + " on array");
        $("#content img").fadeIn("fast").attr('src', imgUrl);
        $('#content p').html(captions[imgIndex]);
        console.log("Done !");
        $('#name').html(names[imgIndex]);
    }

});
$("#menu a").mouseenter(function ()
{
    $(this).animate({ width: "200px" });
    $(this).css('backgroundColor', 'skyblue');

})
$("#menu a").mouseleave(function ()
{
    $(this).animate({ width: "150px" });
    $(this).css('backgroundColor', 'white');
})

$("#social").mouseenter(function ()
{
    $(this).animate({ width: "150px" });
    $("#social img").animate({right: "190px",
        width: "45px"
    });
})
$("#social").mouseleave(function ()
{
    $(this).animate({ width: "100px" });
      $("#social img").animate({ left: "90px",
        width: "30px",
        height: "30px"
    });

})