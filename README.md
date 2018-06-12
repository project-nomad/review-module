# Project Nomad: Review Module

> A clone of Airbnb's review module, made with React, Express, MySQL & Styled Components.

## Related Projects

  - https://github.com/project-nomad/review-module
  - https://github.com/project-nomad/image-carousel-module
  - https://github.com/project-nomad/booking-module/
  - https://github.com/project-nomad/listing-description-module

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions apply. See [Development](#development).

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies & Getting Started

From within the root directory:

```sh
npm install -g webpack
npm install
npm run react-dev
mysql.server start
mysql -u root < schema.sql
cd database
node generator.js
npm run serve
```

Finally, navigate to http://localhost:3003/listings/1/ in your browser. Any id from 1 to 100 is valid!