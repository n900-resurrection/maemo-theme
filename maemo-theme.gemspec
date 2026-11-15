# frozen_string_literal: true

# Only for local development of a site with this theme (gem "maemo-theme", path: "../maemo-theme"); GitHub Pages uses it as a remote theme.
Gem::Specification.new do |spec|
  spec.name          = "maemo-theme"
  spec.version       = "0.1.0"
  spec.authors       = ["elPytel"]
  spec.summary       = "Jekyll theme in the look of the Maemo community web sites"
  spec.homepage      = "https://github.com/n900-resurrection/maemo-theme"
  spec.license       = "MIT"
  spec.files         = Dir["_layouts/**/*", "_includes/**/*", "assets/**/*", "README.md", "NOTICE.md"]
  spec.add_runtime_dependency "jekyll", ">= 3.5", "< 5.0"
end
