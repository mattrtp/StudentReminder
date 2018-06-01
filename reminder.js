var urls = {
    "com": {
        "asos": {
            "title": "10% Off",
            "details": "Enjoy 10% Student Discount when you shop with ASOS online at asos.com.",
            "domain": "*://*.asos.com/*"
        },
        "boohooman": {
            "title": "40% Off",
            "details": "Enjoy 40% Student Discount when you shop with boohooMAN online at boohooman.com.",
            "domain": "*://*.boohooman.com/*"
        },
        "newlook": {
            "title": "20% Off",
            "details": "Enjoy 20% Student Discount when you shop with New Look online at newlook.com.",
            "domain": "*://*.newlook.com/*"
        }
    },
    "uk": {
        "co": {
            "blacks": {
                "title": "10% Off",
                "details": "Enjoy 10% Student Discount when you shop with Blacks online at blacks.co.uk.",
                "domain": "*://*.blacks.co.uk/*"
            },
            "quiksilver": {
                "title": "15% Off",
                "details": "Enjoy 15% Student Discount when you shop with Quiksilver online at quiksilver.co.uk.",
                "domain": "*://*.quiksilver.co.uk/*"
            }
        }
    }
};

var debugging = true;
var lookup = window.location.hostname.replace("www.","").split(".");
var directory = urls;
for(i = lookup.length-1; i > -1; i--){
	directory = directory[lookup[i]];
}
if(directory["title"] !== undefined){
	if(debugging){
		console.log(directory["title"]);
		console.log(directory["details"]);
	}
	document.body.style.border = "15px solid red";
}