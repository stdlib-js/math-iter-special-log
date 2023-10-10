<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# iterLog

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an [iterator][mdn-iterator-protocol] which iteratively computes the base `b` [logarithm][@stdlib/math/base/special/log].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import iterLog from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-iter-special-log@v0.1.1-esm/index.mjs';
```

#### iterLog( x, b )

Returns an [iterator][mdn-iterator-protocol] which iteratively computes the base `b` [logarithm][@stdlib/math/base/special/log] of `x`.

```javascript
import array2iterator from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-to-iterator@esm/index.mjs';

var x = array2iterator( [ 2.0, 2.0, 10.0 ] );
var y = array2iterator( [ 2.0, 6.0, 2.0 ] );

var it = iterLog( x, y );
// returns <Object>

var r = it.next().value;
// returns 1.0

r = it.next().value;
// returns ~0.3869

r = it.next().value;
// returns ~3.3219

// ...
```

The returned [iterator][mdn-iterator-protocol] protocol-compliant object has the following properties:

-   **next**: function which returns an [iterator][mdn-iterator-protocol] protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an [iterator][mdn-iterator-protocol] and returns a single (optional) argument in an [iterator][mdn-iterator-protocol] protocol-compliant object.

If provided a numeric value as an [`iterator`][mdn-iterator-protocol] argument, the value is broadcast as an **infinite** [iterator][mdn-iterator-protocol] which **always** returns the provided value.

```javascript
import array2iterator from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-to-iterator@esm/index.mjs';

var x = array2iterator( [ 2.0, 6.0 ] );

var it = iterLog( x, 2.0 );
// returns <Object>

var v = it.next().value;
// returns 1.0

v = it.next().value;
// returns ~2.58496

var bool = it.next().done;
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   For negative `b` or `x` iterated values, the returned [iterator][mdn-iterator-protocol] returns `NaN`.
-   If an iterated value is non-numeric (including `NaN`), the returned [iterator][mdn-iterator-protocol] returns `NaN`. If non-numeric iterated values are possible, you are advised to provide an [`iterator`][mdn-iterator-protocol] which type checks and handles non-numeric values accordingly.
-   The length of the returned [iterator][mdn-iterator-protocol] is equal to the length of the shortest provided [iterator][mdn-iterator-protocol]. In other words, the returned [iterator][mdn-iterator-protocol] ends once **one** of the provided [iterators][mdn-iterator-protocol] ends.
-   If an environment supports `Symbol.iterator` **and** a provided [iterator][mdn-iterator-protocol] is iterable, the returned [iterator][mdn-iterator-protocol] is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import uniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-iter-uniform@esm/index.mjs';
import iterLog from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-iter-special-log@v0.1.1-esm/index.mjs';

// Create seeded iterators for generating pseudorandom numbers:
var x = uniform( 0.0, 100.0, {
    'seed': 1234,
    'iter': 10
});

var y = uniform( 0.0, 10.0, {
    'seed': 4567,
    'iter': 10
});

// Create an iterator which consumes the pseudorandom number iterators:
var it = iterLog( x, y );

// Perform manual iteration...
var r;
while ( true ) {
    r = it.next();
    if ( r.done ) {
        break;
    }
    console.log( r.value );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/log`][@stdlib/math/base/special/log]</span><span class="delimiter">: </span><span class="description">base `b` logarithm.</span>
-   <span class="package-name">[`@stdlib/math-iter/special/log10`][@stdlib/math/iter/special/log10]</span><span class="delimiter">: </span><span class="description">create an iterator which evaluates the common logarithm (logarithm with base 10) for each iterated value.</span>
-   <span class="package-name">[`@stdlib/math-iter/special/log1p`][@stdlib/math/iter/special/log1p]</span><span class="delimiter">: </span><span class="description">create an iterator which evaluates the natural logarithm of 1+x for each iterated value.</span>
-   <span class="package-name">[`@stdlib/math-iter/special/log2`][@stdlib/math/iter/special/log2]</span><span class="delimiter">: </span><span class="description">create an iterator which evaluates the binary logarithm for each iterated value.</span>
-   <span class="package-name">[`@stdlib/math-iter/special/pow`][@stdlib/math/iter/special/pow]</span><span class="delimiter">: </span><span class="description">create an iterator which evaluates the exponential function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-iter-special-log.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-iter-special-log

[test-image]: https://github.com/stdlib-js/math-iter-special-log/actions/workflows/test.yml/badge.svg?branch=v0.1.1
[test-url]: https://github.com/stdlib-js/math-iter-special-log/actions/workflows/test.yml?query=branch:v0.1.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-iter-special-log/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-iter-special-log?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-iter-special-log.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-iter-special-log/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-iter-special-log/tree/deno
[umd-url]: https://github.com/stdlib-js/math-iter-special-log/tree/umd
[esm-url]: https://github.com/stdlib-js/math-iter-special-log/tree/esm
[branches-url]: https://github.com/stdlib-js/math-iter-special-log/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-iter-special-log/main/LICENSE

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/math/base/special/log]: https://github.com/stdlib-js/math-base-special-log/tree/esm

[@stdlib/math/iter/special/log10]: https://github.com/stdlib-js/math-iter-special-log10/tree/esm

[@stdlib/math/iter/special/log1p]: https://github.com/stdlib-js/math-iter-special-log1p/tree/esm

[@stdlib/math/iter/special/log2]: https://github.com/stdlib-js/math-iter-special-log2/tree/esm

[@stdlib/math/iter/special/pow]: https://github.com/stdlib-js/math-iter-special-pow/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
