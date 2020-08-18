<?php

namespace DoubleStarSystems\MaterialTheme\DependencyInjection;

use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Extension\Extension;
use Symfony\Component\DependencyInjection\Extension\PrependExtensionInterface;
use Symfony\Component\DependencyInjection\Loader\YamlFileLoader;
use Symfony\Component\Yaml\Yaml;

class MaterialThemeExtension extends Extension implements PrependExtensionInterface
{
    public function load(array $configs, ContainerBuilder $container)
    {
        $configuration = new Configuration();
        $config = $this->processConfiguration($configuration, $configs);

        $container->setParameter('material_theme', $config);
    }

    public function prepend(ContainerBuilder $container)
    {
        // Override Twig loader to inject the theme.
        $container->loadFromExtension('twig', [
            'paths' => [
                dirname(__DIR__) . '/Resources/views/bundles/TwigBundle' => 'Twig',
            ],
        ]);
        $framework_config = Yaml::parseFile(__DIR__ . '/../Resources/config/assets.yaml');
        $container->loadFromExtension('framework', $framework_config['framework']);
        $twig_config = Yaml::parseFile(__DIR__ . '/../Resources/config/twig.yaml');
        $container->loadFromExtension('twig', $twig_config['twig']);
    }
}
