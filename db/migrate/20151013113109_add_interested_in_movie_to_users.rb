class AddInterestedInMovieToUsers < ActiveRecord::Migration
  def change
    add_column :users, :movie_interest, :boolean
  end
end
