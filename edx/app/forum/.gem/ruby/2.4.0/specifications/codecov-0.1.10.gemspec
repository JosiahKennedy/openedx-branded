# -*- encoding: utf-8 -*-
# stub: codecov 0.1.10 ruby lib

Gem::Specification.new do |s|
  s.name = "codecov".freeze
  s.version = "0.1.10"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["codecov".freeze]
  s.date = "2017-02-21"
  s.description = "hosted code coverage".freeze
  s.email = ["hello@codecov.io".freeze]
  s.homepage = "https://github.com/codecov/codecov-ruby".freeze
  s.rubyforge_project = "codecov".freeze
  s.rubygems_version = "2.7.8".freeze
  s.summary = "hosted code coverage ruby/rails reporter".freeze

  s.installed_by_version = "2.7.8" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<url>.freeze, [">= 0"])
      s.add_runtime_dependency(%q<json>.freeze, [">= 0"])
      s.add_runtime_dependency(%q<simplecov>.freeze, [">= 0"])
      s.add_development_dependency(%q<mocha>.freeze, [">= 0"])
      s.add_development_dependency(%q<rake>.freeze, [">= 0"])
      s.add_development_dependency(%q<minitest>.freeze, [">= 0"])
    else
      s.add_dependency(%q<url>.freeze, [">= 0"])
      s.add_dependency(%q<json>.freeze, [">= 0"])
      s.add_dependency(%q<simplecov>.freeze, [">= 0"])
      s.add_dependency(%q<mocha>.freeze, [">= 0"])
      s.add_dependency(%q<rake>.freeze, [">= 0"])
      s.add_dependency(%q<minitest>.freeze, [">= 0"])
    end
  else
    s.add_dependency(%q<url>.freeze, [">= 0"])
    s.add_dependency(%q<json>.freeze, [">= 0"])
    s.add_dependency(%q<simplecov>.freeze, [">= 0"])
    s.add_dependency(%q<mocha>.freeze, [">= 0"])
    s.add_dependency(%q<rake>.freeze, [">= 0"])
    s.add_dependency(%q<minitest>.freeze, [">= 0"])
  end
end
