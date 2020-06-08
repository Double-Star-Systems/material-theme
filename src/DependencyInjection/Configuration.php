<?php

namespace DoubleStarSystems\MaterialTheme\DependencyInjection;

use Symfony\Component\Config\Definition\Builder\TreeBuilder;
use Symfony\Component\Config\Definition\ConfigurationInterface;

class Configuration implements ConfigurationInterface
{
    public function getConfigTreeBuilder()
    {
        $treeBuilder = new TreeBuilder('material_theme');

        $treeBuilder->getRootNode()
            ->children()
                ->arrayNode('app')
                    ->children()
                        ->scalarNode('name')->end()
                    ->end()
                ->end() // app
                ->arrayNode('theme')
                    ->children()
                        ->arrayNode('classes')
                            ->prototype('scalar')->end()
                        ->end()
                    ->end()
                ->end() // theme
            ->end()
        ;

        return $treeBuilder;
    }
}
