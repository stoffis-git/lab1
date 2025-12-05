#!/bin/bash
for file in app.html dna-kit.html process.html privacy.html terms.html; do
  echo "Updating $file..."
  # Use sed to replace the old navigation with new dropdown navigation
  sed -i.bak '/<ul class="nav-links">/,/<\/ul>/{
    /<ul class="nav-links">/!d
    /<ul class="nav-links">/r /dev/stdin
  }' "$file" << 'NEWNAV'
                <ul class="nav-links">
                    <li class="nav-dropdown">
                        <a href="#" data-i18n="nav.products">Products ▾</a>
                        <ul class="dropdown-menu">
                            <li><a href="products-essential.html">Essential Line</a></li>
                            <li><a href="tests.html">Core Line</a></li>
                            <li><a href="products-pro.html">Pro Line</a></li>
                            <li><a href="products-compare.html">Compare Products</a></li>
                        </ul>
                    </li>
                    <li><a href="index.html#science" data-i18n="nav.science">Science</a></li>
                    <li><a href="process.html" data-i18n="nav.process">How It Works</a></li>
                    <li><a href="index.html#results" data-i18n="nav.results">Results</a></li>
                    <li><a href="app.html" data-i18n="nav.app">App</a></li>
                </ul>
NEWNAV
done
