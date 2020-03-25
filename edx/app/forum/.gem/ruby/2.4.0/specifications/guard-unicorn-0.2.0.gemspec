# -*- encoding: utf-8 -*-
# stub: guard-unicorn 0.2.0 ruby lib

Gem::Specification.new do |s|
  s.name = "guard-unicorn".freeze
  s.version = "0.2.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Andrei Maxim".freeze]
  s.date = "2015-11-16"
  s.description = "Guard plug-in that allows you to restart Unicorn".freeze
  s.email = ["andrei@andreimaxim.ro".freeze]
  s.homepage = "https://github.com/xhr/guard-unicorn".freeze
  s.rubyforge_project = "guard-unicorn".freeze
  s.rubygems_version = "2.7.8".freeze
  s.summary = "Guard for Unicorn".freeze

  s.installed_by_version = "2.7.8" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<guard>.freeze, [">= 1.1"])
    else
      s.add_dependency(%q<guard>.freeze, [">= 1.1"])
    end
  else
    s.add_dependency(%q<guard>.freeze, [">= 1.1"])
  end
end