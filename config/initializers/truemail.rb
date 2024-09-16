require "truemail"

Truemail.configure do |config|
  config.verifier_email = "projectawarend@gmail.com"
  config.email_pattern = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
end
