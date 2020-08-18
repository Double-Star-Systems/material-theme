<?php

namespace DoubleStarSystems\MaterialTheme;

use Symfony\Component\HttpKernel\Bundle\Bundle;
use DoubleStarSystems\MaterialTheme\DependencyInjection\MaterialThemeExtension;

class MaterialThemeBundle extends Bundle
{
    public function getContainerExtension()
    {
        return new MaterialThemeExtension();
    }
}
