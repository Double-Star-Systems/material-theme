# Material Symfony Theme

Symfony Theme using [Materialize CSS](https://www.npmjs.com/package/materialize-css).

## Usage

1. Include this project in your Composer installation.

```sh
composer require double-star-systems/material-theme
```

2. Install assets supplied by this project to your app's public folder.

```
# From your app's route directory run...
php bin/console assets:install
```

### Updating

If you update this module, you should reinstall assets, to ensure that required
files are written to the correct location.

```
# From your app's route directory run...
php bin/console assets:install
```

## Requirements

This project leverages the [KNP Labs Menu Bundle](https://github.com/KnpLabs/KnpMenuBundle)
for generation of menu's within the theme.

## Support

This project is developed by [Double Star Systems](//doublestarsystems.com/).
For questions about project support or to report bugs, please [open an issue on
GitHub](https://github.com/Double-Star-Systems/material-theme/issues)
