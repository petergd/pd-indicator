# pd-indicator

A custom web component that can be used in web applications or websites. It provides a set of CSS icons designed for usage in other web components that could also be used on their own. Most of the icons used are from [iconocss](https://saeedalipoor.github.io/icono/)

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/pd-indicator)

[Demo page](https://unpkg.com/pd-indicator@1.1.4/pd-indicator.html)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

`node.js`

### Installing

`$ npm install pd-indicator`

## Running the tests

`npm test`

### Tests output explanation

#### pd-indicator

_**indicatorStyles**_

_✓ checks the indicator styles is a non empty object upon initialization._

_**color**_

_✓ Checks that color has default value._

_**activeColor**_

_✓ Checks that active-color has default value._

_**focusColor**_

_✓ Checks that focus-color has default value._

_**type**_

_✓ Checks that type has default value._

_**sRoot**_

_✓ Checks that component is attached to DOM and is equal to <pd-indicator>_

_**sRoot**_

_✓ Checks that component is attached to DOM and has empty innerHTML_

##### Array

_**indexOf()**_

_✓ should return -1 when the value is not present. This is a demo test to check that the response from the testing framework is ok._


## Deployment

Add the custom element tag to your HTML page. 

The element's parameters are:

 - **type** (string - default `circle`). Set the type of the indicator acceptable values are `moon`, `yin-yang`, `pointer`, `rectangle`, `circle`, `pacman`, `octastar`, `infinity`, `heart`. 
 - **color** (string - default `232323`). Set only the hexadecimal value of the background colour of the overlay (without #).
 - **active-color** (string - default `ff0000`). Set only the hexadecimal value of the background colour of the overlay (without #).

**Basic Usage**

***Example CSS***

    html, body {
		height: 100%;
		overflow: hidden;
		-webkit-perspective: 37.5rem;
		-moz-perspective: 37.5rem;
		perspective: 37.5rem;
	}
	:host {
		display: block;
	}
	div {
	    width: auto;
	    max-width: 7rem;
	    display: flex;
	    justify-content: space-between;
	    align-items: center;
	    align-content: center;
	    padding: .5rem 0;
	}
	pd-indicator:not(:defined) {
	    display: none;
	}
	pd-indicator,
	pd-indicator:defined {
	    display: block;
	}

<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="pd-indicator.html">
  </template>
</custom-element-demo>
```
-->

***Example HTML***

	<div>
        <pd-indicator type="moon"></pd-indicator>
        <pd-indicator type="yin-yang"></pd-indicator>
        <pd-indicator type="pointer"></pd-indicator>
        <pd-indicator type="rectangle"></pd-indicator>
        <pd-indicator type="circle"></pd-indicator>
        <pd-indicator type="pacman"></pd-indicator>
        <pd-indicator type="octastar"></pd-indicator>
        <pd-indicator type="donut"></pd-indicator>
        <pd-indicator type="infinity"></pd-indicator>
        <pd-indicator type="heart"></pd-indicator>
        <pd-indicator type="switch"></pd-indicator>
        <pd-indicator type="icon-home"></pd-indicator>
        <pd-indicator type="icon-mail"></pd-indicator>
        <pd-indicator type="icon-rss"></pd-indicator>
        <pd-indicator type="icon-bluetooth"></pd-indicator>
        <pd-indicator type="icon-hamburger"></pd-indicator>
        <pd-indicator type="icon-plus"></pd-indicator>
        <pd-indicator type="icon-cross"></pd-indicator>
        <pd-indicator type="icon-check"></pd-indicator>
        <pd-indicator type="icon-power"></pd-indicator>
        <pd-indicator type="icon-heart"></pd-indicator>
        <pd-indicator type="icon-infinity"></pd-indicator>
        <pd-indicator type="icon-flag"></pd-indicator>
        <pd-indicator type="icon-file"></pd-indicator>
        <pd-indicator type="icon-image"></pd-indicator>
        <pd-indicator type="icon-video"></pd-indicator>
        <pd-indicator type="icon-music"></pd-indicator>
        <pd-indicator type="icon-headphone"></pd-indicator>
        <pd-indicator type="icon-document"></pd-indicator>
        <pd-indicator type="icon-folder"></pd-indicator>
        <pd-indicator type="icon-pin"></pd-indicator>
        <pd-indicator type="icon-smile"></pd-indicator>
        <pd-indicator type="icon-eye"></pd-indicator>
        <pd-indicator type="icon-sliders"></pd-indicator>
        <pd-indicator type="icon-share"></pd-indicator>
        <pd-indicator type="icon-sync"></pd-indicator>
        <pd-indicator type="icon-reset"></pd-indicator>
        <pd-indicator type="icon-gear"></pd-indicator>
        <pd-indicator type="icon-signIn"></pd-indicator>
        <pd-indicator type="icon-signOut"></pd-indicator>
        <pd-indicator type="icon-support"></pd-indicator>
        <pd-indicator type="icon-dropper"></pd-indicator>
        <pd-indicator type="icon-tiles"></pd-indicator>
        <pd-indicator type="icon-list"></pd-indicator>
        <pd-indicator type="icon-chain"></pd-indicator>
        <pd-indicator type="icon-youtube"></pd-indicator>
        <pd-indicator type="icon-rename"></pd-indicator>
        <pd-indicator type="icon-search"></pd-indicator>
        <pd-indicator type="icon-book"></pd-indicator>
        <pd-indicator type="icon-forbidden"></pd-indicator>
        <pd-indicator type="icon-trash"></pd-indicator>
        <pd-indicator type="icon-keyboard"></pd-indicator>
        <pd-indicator type="icon-mouse"></pd-indicator>
        <pd-indicator type="icon-user"></pd-indicator>
        <pd-indicator type="icon-crop"></pd-indicator>
        <pd-indicator type="icon-display"></pd-indicator>
        <pd-indicator type="icon-imac"></pd-indicator>
        <pd-indicator type="icon-iphone"></pd-indicator>
        <pd-indicator type="icon-macbook"></pd-indicator>
        <pd-indicator type="icon-imacBold"></pd-indicator>
        <pd-indicator type="icon-iphoneBold"></pd-indicator>
        <pd-indicator type="icon-macbookBold"></pd-indicator>
        <pd-indicator type="icon-nexus"></pd-indicator>
        <pd-indicator type="icon-microphone"></pd-indicator>
        <pd-indicator type="icon-asterisk"></pd-indicator>
        <pd-indicator type="icon-terminal"></pd-indicator>
        <pd-indicator type="icon-paperClip"></pd-indicator>
        <pd-indicator type="icon-market"></pd-indicator>
        <pd-indicator type="icon-clock"></pd-indicator>
        <pd-indicator type="icon-textAlignRight"></pd-indicator>
        <pd-indicator type="icon-textAlignCenter"></pd-indicator>
        <pd-indicator type="icon-textAlignLeft"></pd-indicator>
        <pd-indicator type="icon-indent"></pd-indicator>
        <pd-indicator type="icon-outdent"></pd-indicator>
        <pd-indicator type="icon-frown"></pd-indicator>
        <pd-indicator type="icon-meh"></pd-indicator>
        <pd-indicator type="icon-locationArrow"></pd-indicator>
        <pd-indicator type="icon-plusCircle"></pd-indicator>
        <pd-indicator type="icon-checkCircle"></pd-indicator>
        <pd-indicator type="icon-crossCircle"></pd-indicator>
        <pd-indicator type="icon-exclamation"></pd-indicator>
        <pd-indicator type="icon-exclamationCircle"></pd-indicator>
        <pd-indicator type="icon-comment"></pd-indicator>
        <pd-indicator type="icon-commentEmpty"></pd-indicator>
        <pd-indicator type="icon-areaChart"></pd-indicator>
        <pd-indicator type="icon-pieChart"></pd-indicator>
        <pd-indicator type="icon-barChart"></pd-indicator>
        <pd-indicator type="icon-bookmark"></pd-indicator>
        <pd-indicator type="icon-bookmarkEmpty"></pd-indicator>
        <pd-indicator type="icon-filter"></pd-indicator>
        <pd-indicator type="icon-volume"></pd-indicator>
        <pd-indicator type="icon-volumeLow"></pd-indicator>
        <pd-indicator type="icon-volumeMedium"></pd-indicator>
        <pd-indicator type="icon-volumeHigh"></pd-indicator>
        <pd-indicator type="icon-volumeDecrease"></pd-indicator>
        <pd-indicator type="icon-volumeIncrease"></pd-indicator>
        <pd-indicator type="icon-volumeMute"></pd-indicator>
        <pd-indicator type="icon-tag"></pd-indicator>
        <pd-indicator type="icon-calendar"></pd-indicator>
        <pd-indicator type="icon-camera"></pd-indicator>
        <pd-indicator type="icon-piano"></pd-indicator>
        <pd-indicator type="icon-ruler"></pd-indicator>
        <pd-indicator type="icon-cup"></pd-indicator>
        <pd-indicator type="icon-creditCard"></pd-indicator>
        <pd-indicator type="icon-facebook"></pd-indicator>
        <pd-indicator type="icon-twitter"></pd-indicator>
        <pd-indicator type="icon-gplus"></pd-indicator>
        <pd-indicator type="icon-linkedIn"></pd-indicator>
        <pd-indicator type="icon-instagram"></pd-indicator>
        <pd-indicator type="icon-flickr"></pd-indicator>
        <pd-indicator type="icon-delicious"></pd-indicator>
        <pd-indicator type="icon-codepen"></pd-indicator>
        <pd-indicator type="icon-blogger"></pd-indicator>
        <pd-indicator type="icon-play"></pd-indicator>
        <pd-indicator type="icon-pause"></pd-indicator>
        <pd-indicator type="icon-stop"></pd-indicator>
        <pd-indicator type="icon-rewind"></pd-indicator>
        <pd-indicator type="icon-forward"></pd-indicator>
        <pd-indicator type="icon-next"></pd-indicator>
        <pd-indicator type="icon-previous"></pd-indicator>
        <pd-indicator type="icon-caretRight"></pd-indicator>
        <pd-indicator type="icon-caretLeft"></pd-indicator>
        <pd-indicator type="icon-caretUp"></pd-indicator>
        <pd-indicator type="icon-caretDown"></pd-indicator>
        <pd-indicator type="icon-rightArrow"></pd-indicator>
        <pd-indicator type="icon-leftArrow"></pd-indicator>
        <pd-indicator type="icon-upArrow"></pd-indicator>
        <pd-indicator type="icon-downArrow"></pd-indicator>
        <pd-indicator type="icon-sun"></pd-indicator>
        <pd-indicator type="icon-moon"></pd-indicator>
        <pd-indicator type="icon-disqus"></pd-indicator>
        <pd-indicator type="icon-cart"></pd-indicator>
        <pd-indicator type="icon-caretRightCircle"></pd-indicator>
        <pd-indicator type="icon-caretLeftCircle"></pd-indicator>
        <pd-indicator type="icon-caretUpCircle"></pd-indicator>
        <pd-indicator type="icon-caretDownCircle"></pd-indicator>
        <pd-indicator type="icon-caretRightSquare"></pd-indicator>
        <pd-indicator type="icon-caretLeftSquare"></pd-indicator>
        <pd-indicator type="icon-caretUpSquare"></pd-indicator>
        <pd-indicator type="icon-caretDownSquare"></pd-indicator>
        <pd-indicator type="icon-dribbble"></pd-indicator>
        <pd-indicator type="icon-sitemap"></pd-indicator>
        <pd-indicator type="icon-spinner"></pd-indicator>
        <pd-indicator type="icon-circle"></pd-indicator>
        <pd-indicator type="icon-ellipsis"></pd-indicator>
        <pd-indicator type="octastar" active="true"></pd-indicator>
        <pd-indicator type="octastar"></pd-indicator>
        <pd-indicator type="octastar"></pd-indicator>
    </div>

You can change the element's attributes by using Javascript for example.

	customElements.whenDefined('pd-modal').then(() => {			
		document.getElementById("last").querySelectorAll("pd-indicator").forEach((item) => {
			let type = item.getAttribute("type");
			item.addEventListener("click", (e) => {
				e.target.getAttribute("type") == "circle" ? e.target.setAttribute("type", type) : e.target.setAttribute("type", "circle") ;
			});
		});
	});

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request 😁

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* test-utils.js can be found in https://github.com/github/custom-element-boilerplate
