<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Weibull

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Weibull distribution.



<section class="usage">

## Usage

To use in Observable,

```javascript
weibull = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-weibull@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var weibull = require( 'path/to/vendor/umd/stats-base-dists-weibull/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-weibull@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
(function () {
    window.weibull;
})();
})();
</script>
```

#### weibull

Weibull distribution.

```javascript
var dist = weibull;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pdf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, k, lambda )`][@stdlib/stats/base/dists/weibull/cdf]</span><span class="delimiter">: </span><span class="description">Weibull distribution cumulative distribution function.</span>
-   <span class="signature">[`logcdf( x, k, lambda )`][@stdlib/stats/base/dists/weibull/logcdf]</span><span class="delimiter">: </span><span class="description">Weibull distribution logarithm of cumulative distribution function.</span>
-   <span class="signature">[`logpdf( x, k, lambda )`][@stdlib/stats/base/dists/weibull/logpdf]</span><span class="delimiter">: </span><span class="description">Weibull distribution logarithm of probability density function (PDF).</span>
-   <span class="signature">[`mgf( t, k, lambda )`][@stdlib/stats/base/dists/weibull/mgf]</span><span class="delimiter">: </span><span class="description">Weibull distribution moment-generating function (MGF).</span>
-   <span class="signature">[`pdf( x, k, lambda )`][@stdlib/stats/base/dists/weibull/pdf]</span><span class="delimiter">: </span><span class="description">Weibull distribution probability density function (PDF).</span>
-   <span class="signature">[`quantile( p, k, lambda )`][@stdlib/stats/base/dists/weibull/quantile]</span><span class="delimiter">: </span><span class="description">Weibull distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`entropy( k, lambda )`][@stdlib/stats/base/dists/weibull/entropy]</span><span class="delimiter">: </span><span class="description">Weibull distribution differential entropy.</span>
-   <span class="signature">[`kurtosis( k, lambda )`][@stdlib/stats/base/dists/weibull/kurtosis]</span><span class="delimiter">: </span><span class="description">Weibull distribution excess kurtosis.</span>
-   <span class="signature">[`mean( k, lambda )`][@stdlib/stats/base/dists/weibull/mean]</span><span class="delimiter">: </span><span class="description">Weibull distribution expected value.</span>
-   <span class="signature">[`median( k, lambda )`][@stdlib/stats/base/dists/weibull/median]</span><span class="delimiter">: </span><span class="description">Weibull distribution median.</span>
-   <span class="signature">[`mode( k, lambda )`][@stdlib/stats/base/dists/weibull/mode]</span><span class="delimiter">: </span><span class="description">Weibull distribution mode.</span>
-   <span class="signature">[`skewness( k, lambda )`][@stdlib/stats/base/dists/weibull/skewness]</span><span class="delimiter">: </span><span class="description">Weibull distribution skewness.</span>
-   <span class="signature">[`stdev( k, lambda )`][@stdlib/stats/base/dists/weibull/stdev]</span><span class="delimiter">: </span><span class="description">Weibull distribution standard deviation.</span>
-   <span class="signature">[`variance( k, lambda )`][@stdlib/stats/base/dists/weibull/variance]</span><span class="delimiter">: </span><span class="description">Weibull distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating a [Weibull][weibull-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`Weibull( [k, lambda] )`][@stdlib/stats/base/dists/weibull/ctor]</span><span class="delimiter">: </span><span class="description">Weibull distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var Weibull = require( '@stdlib/stats-base-dists-weibull' ).Weibull;

var dist = new Weibull( 2.0, 4.0 );

var y = dist.pdf( 0.8 );
// returns ~0.096
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-weibull@umd/browser.js"></script>
<script type="text/javascript">
(function () {
(function () {

console.log( objectKeys( weibull ) );

})();
})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-weibull.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-weibull

[test-image]: https://github.com/stdlib-js/stats-base-dists-weibull/actions/workflows/test.yml/badge.svg?branch=v0.0.7
[test-url]: https://github.com/stdlib-js/stats-base-dists-weibull/actions/workflows/test.yml?query=branch:v0.0.7

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-weibull/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-weibull?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-weibull.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-weibull/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-weibull/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-weibull/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-weibull/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-weibull/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-weibull/main/LICENSE

[weibull-distribution]: https://en.wikipedia.org/wiki/Weibull_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/weibull/ctor]: https://github.com/stdlib-js/stats-base-dists-weibull-ctor/tree/umd/tree/umd

[@stdlib/stats/base/dists/weibull/entropy]: https://github.com/stdlib-js/stats-base-dists-weibull-entropy/tree/umd/tree/umd

[@stdlib/stats/base/dists/weibull/kurtosis]: https://github.com/stdlib-js/stats-base-dists-weibull-kurtosis/tree/umd/tree/umd

[@stdlib/stats/base/dists/weibull/mean]: https://github.com/stdlib-js/stats-base-dists-weibull-mean/tree/umd/tree/umd

[@stdlib/stats/base/dists/weibull/median]: https://github.com/stdlib-js/stats-base-dists-weibull-median/tree/umd/tree/umd

[@stdlib/stats/base/dists/weibull/mode]: https://github.com/stdlib-js/stats-base-dists-weibull-mode/tree/umd/tree/umd

[@stdlib/stats/base/dists/weibull/skewness]: https://github.com/stdlib-js/stats-base-dists-weibull-skewness/tree/umd/tree/umd

[@stdlib/stats/base/dists/weibull/stdev]: https://github.com/stdlib-js/stats-base-dists-weibull-stdev/tree/umd/tree/umd

[@stdlib/stats/base/dists/weibull/variance]: https://github.com/stdlib-js/stats-base-dists-weibull-variance/tree/umd/tree/umd

[@stdlib/stats/base/dists/weibull/cdf]: https://github.com/stdlib-js/stats-base-dists-weibull-cdf/tree/umd/tree/umd

[@stdlib/stats/base/dists/weibull/logcdf]: https://github.com/stdlib-js/stats-base-dists-weibull-logcdf/tree/umd/tree/umd

[@stdlib/stats/base/dists/weibull/logpdf]: https://github.com/stdlib-js/stats-base-dists-weibull-logpdf/tree/umd/tree/umd

[@stdlib/stats/base/dists/weibull/mgf]: https://github.com/stdlib-js/stats-base-dists-weibull-mgf/tree/umd/tree/umd

[@stdlib/stats/base/dists/weibull/pdf]: https://github.com/stdlib-js/stats-base-dists-weibull-pdf/tree/umd/tree/umd

[@stdlib/stats/base/dists/weibull/quantile]: https://github.com/stdlib-js/stats-base-dists-weibull-quantile/tree/umd/tree/umd

<!-- </toc-links> -->

</section>

<!-- /.links -->
