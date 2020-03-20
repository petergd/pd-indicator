# pd-indicator

A custom web component that can be used in web applications or websites. It provides a set of CSS icons designed for usage in other web components that could also be used on their own. Most of the icons used are from [iconocss](https://saeedalipoor.github.io/icono/)

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/pd-indicator)

[Demo page](https://unpkg.com/pd-indicator@1.1.1/pd-indicator.html)

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

***Example HTML***

	<div>
		<pd-indicator type="infinity" color="000099" active-color="990000">
		</pd-indicator>
		<pd-indicator type="infinity" color="000099" active-color="990000">
		</pd-indicator>
		<pd-indicator type="infinity" color="000099" active-color="990000">
		</pd-indicator>
	</div>
	<div>
		<pd-indicator type="heart" color="000099" active-color="990000">
		</pd-indicator>
		<pd-indicator type="heart" color="000099" active-color="990000">
		</pd-indicator>
		<pd-indicator type="heart" color="000099" active-color="990000">
		</pd-indicator>
	</div>
	<div>
		<pd-indicator type="circle" color="000099" active-color="990000">
		</pd-indicator>
		<pd-indicator type="circle" color="000099" active-color="990000">
		</pd-indicator>
		<pd-indicator type="circle" color="000099" active-color="990000">
		</pd-indicator>
	</div>
	<div>
		<pd-indicator type="rectangle" color="000099" active-color="990000">
		</pd-indicator>
		<pd-indicator type="rectangle" color="000099" active-color="990000">
		</pd-indicator>
		<pd-indicator type="rectangle" color="000099" active-color="990000">
		</pd-indicator>
	</div>
	<div>
		<pd-indicator type="pointer" color="000099" active-color="990000">
		</pd-indicator>
		<pd-indicator type="pointer" color="000099" active-color="990000">
		</pd-indicator>
		<pd-indicator type="pointer" color="000099" active-color="990000">
		</pd-indicator>
	</div>
	<div>
		<pd-indicator type="moon" color="000099" active-color="990000">
		</pd-indicator>
		<pd-indicator type="moon" color="000099" active-color="990000">
		</pd-indicator>
		<pd-indicator type="moon" color="000099" active-color="990000">
		</pd-indicator>
	</div>
	<div>
		<pd-indicator type="yin-yang" color="000099" active-color="990000">
		</pd-indicator>
		<pd-indicator type="yin-yang" color="000099" active-color="990000">
		</pd-indicator>
		<pd-indicator type="yin-yang" color="000099" active-color="990000">
		</pd-indicator>
	</div>
	<div>
		<pd-indicator type="pacman" color="000099" active-color="990000">
		</pd-indicator>
		<pd-indicator type="pacman" color="000099" active-color="990000">
		</pd-indicator>
		<pd-indicator type="pacman" color="000099" active-color="990000">
		</pd-indicator>
	</div>
	<div>
		<pd-indicator type="switch" color="000099" active-color="990000">
		</pd-indicator>
		<pd-indicator type="switch" color="000099" active-color="990000">
		</pd-indicator>
		<pd-indicator type="switch" color="000099" active-color="990000">
		</pd-indicator>
	</div>
	<div id="last">
		<pd-indicator type="octastar" color="000066" active-color="990000">
		</pd-indicator>
		<pd-indicator type="octastar" color="000066" active-color="990000">
		</pd-indicator>
		<pd-indicator type="octastar" color="000066" active-color="990000">
		</pd-indicator>
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
