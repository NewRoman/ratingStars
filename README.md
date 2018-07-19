# ratingStars
Show rating using stars as background of list

Rating would be shown only one star or more than one star/
Which star use for showing mixin's options set.

Example of mixin using:

<code>
.stars {
	.makeRatingCollections(@imagePathInactive: "../img/star_gray_small_collection.svg"; @imagePathActive: "../img/star_yellow_small_collection.svg"; @starWidth: 15px; @countStars: 5; @heightStars: 14px; @topActive: 0; @topInactive: 0; );

}
</code>

<br/>

<code>
.one-star {
	.makeRatingCollections(@imagePathInactive: "../img/star-big-collections.png"; @imagePathActive: "../img/star-big-collections.png"; @starWidth: 19px; @countStars: 1; @heightStars: 16px; @topActive: bottom; @topInactive: top; );
}
</code>
