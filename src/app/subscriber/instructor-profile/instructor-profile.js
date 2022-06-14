// https://codepen.io/Betich/pen/XWmOaRE

var hues = [53, 30, 14, 344, 0]; // Color Scheme based on hue

$(document).ready(function() {
  var stars = $(".star");
	var rating = parseInt($("#ratingInput").val());
	const ratingPreview = $("#ratingVal");
	
  var Star = {
    onClicked: function() {
			// Determine Input Value
		$("#ratingInput").val($(this).attr("star-rating"));
			rating = parseInt($("#ratingInput").val());
			judgeRating(ratingPreview, rating);
			
			// Assign Colors
      $(this).siblings()
				.filter(".star").removeClass("clickedStars"); // Reset Color
      assignColor(hues[rating - 1], "Color");
      $(this).prevAll().addBack().addClass("clickedStars");
    },

    onHovered: function() {
      const currIndex = $(this).index();
			
			// If the hovered star is higher than the clicked star,
			// Assign the current star's color value to all stars
			var ratingIdx = rating - 1; // Rating Index
      if (currIndex > ratingIdx) {
        assignColor(hues[currIndex], "Color");
      }

      $(this).prevAll().addBack().addClass("hoveredStars");
			
			let hovRating = parseInt($(this).attr("star-rating"));
			judgeRating(ratingPreview, hovRating);
    },
		
		unHover: function() {
			// Reset Color
    	$(this).prevAll().addBack()
      	.removeClass("hoveredStars");
			assignColor(hues[rating - 1], "Color");
			
			// Change Rating Text
			if (rating) { judgeRating(ratingPreview, rating); }
			else { ratingPreview.text("Click on the Stars to Rate them!"); }
  	}
  };
	
	/* INIT: Set up stars beforehand */
	init(stars, rating);
	
	/* Star Events */
  stars.click(Star.onClicked);
  stars.hover(Star.onHovered, Star.unHover);
});

// Functions

function init(obj, initRating) {
	judgeRating($("#ratingVal"), initRating);
	
	initRating--; // Convert to Array Index
	let initStar = obj.get(initRating);
			
	// Assign Colors
  $(initStar).siblings()
		.filter(".star").removeClass("clickedStars"); // Reset Color
  assignColor(hues[initRating], "Color");
  $(initStar).prevAll().addBack().addClass("clickedStars");
}

function assignColor(hue, assignedVar) {
  const sat = "85%",
    		val = "55%"; // Saturation & Value
  document.documentElement.style.setProperty(
    "--" + assignedVar,
    "hsl(" + hue + "," + sat + "," + val + ")"
  );
}

function judgeRating(selector, rating) {
	var reaction = (rating) => {
		switch(rating) {
			case 1:
				return "Terrible!"
				break;
			case 2:
				return "Eh, could've been better."
				break;
			case 3:
				return "Okay, I guess."
				break;
			case 4:
				return "This is great!"
				break;
			case 5:
				return "Wow! As good as it gets!"
				break;
			default:
				return "ERR: you shouldn't be able to see this value..."
		}
	};
	selector.text(
		"Rating: " + rating +
		",\t\t" + reaction(rating)
	);
}