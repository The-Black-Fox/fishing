# frozen_string_literal: true

class Like < ApplicationRecord
  belongs_to :user
  belongs_to :fish_catch, counter_cache: true
end
