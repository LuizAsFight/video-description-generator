video-description-generator
===============

Generate description from titles, links and times. A cool default template for describing videos.

### Install

`npm i video-description-generator`

### Usage

``` Javascript
import videoDescriptionGenerator from 'video-description-generator';

const items = [{
  title: 'Some great product',
  link: 'https://somestore.com/affiliateId',
  time: 85
}, {
  title: 'Some awesome product',
  link: 'https://somestore.com/affiliateId',
  time: 126
}];

videoDescriptionGenerator.generateTextToCopy(items)
```
