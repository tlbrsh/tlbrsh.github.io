Dir["*.jpg"].each do |f|
  puts "<div class=\"col-xs-4 col-sm-2\">"
  puts "  <a href=\"#\" class=\"thumbnail\"><img src=\"images/#{f}\"></a>"
  puts "</div>"
end