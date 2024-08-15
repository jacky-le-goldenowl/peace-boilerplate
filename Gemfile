# frozen_string_literal: true

source 'https://rubygems.org'

gem 'bootsnap', require: false
gem 'good_migrations'
gem 'pg', '~> 1.1'
gem 'puma', '>= 5.0'
gem 'rails', '~> 7.2.0'
gem 'redis', '>= 4.0.1'
gem 'stimulus-rails'
gem 'turbo-rails'
gem 'tzinfo-data', platforms: %i[windows jruby]
gem 'vite_rails', '~> 3.0'

group :development, :test do
  gem 'brakeman', require: false
  gem 'debug', platforms: %i[mri windows], require: 'debug/prelude'
  gem 'dotenv', '>= 3.0'
  gem 'factory_bot_rails'
  gem 'rspec-rails'
end

group :development do
  gem 'annotate'
  gem 'bundler-audit', require: false
  gem 'lefthook'
  gem 'letter_opener'
  gem 'pgcli-rails'
  gem 'rubocop', require: false
  gem 'rubocop-factory_bot', require: false
  gem 'rubocop-performance', require: false
  gem 'rubocop-rails', '>= 2.22.0', require: false
  gem 'web-console'
end

group :test do
  gem 'shoulda-matchers'
  gem 'vcr'
  gem 'webmock'
end
