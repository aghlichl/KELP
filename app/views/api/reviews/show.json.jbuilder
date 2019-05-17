json.review do
  json.id @review.id
  json.user_id @review.user_id
  json.rating @review.rating
  json.body @review.body
end
