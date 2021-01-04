<?php
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . "/../../");
$dotenv->load();

return [
  // Set URL explicitly to ensure API responds with correct URL references
  'url' => $_ENV['URL'] ? $_ENV['URL'] : null,
  'languages' => true,
  'languages.detect' => false,
  'panel' => [
    // Remove after first user creation
    'install' => true
  ],
  'api' => [
    // Required for eleventy-plugin-kirby to work
    'basicAuth' => true,
    // Useful for local development, but never set to "true" in production
    'allowInsecure' => true
  ],
  'debug'  => true
];
