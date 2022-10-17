class Message < ApplicationRecord
  validates :text, presence: true, length: { minimum: 0, maximum: 500 }
end