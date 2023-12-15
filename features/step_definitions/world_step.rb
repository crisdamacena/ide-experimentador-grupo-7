When /^I visit hello page$/ do
  visit '/hello/world'
end
Then('I should see {string}') do |string|
  assert_selector "h1", text: string
end
Then('I should see the title {string}') do |string|
  assert_selector "h2", text: string
end
Given ("que eu solicite o status da bateria em um determinado instante") do 
Given ("que esse instante existe no teste")
Then