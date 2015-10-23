class AddMymoviesToUser < ActiveRecord::Migration
  def change
  	add_column :users, :mymovies, :text, array:true
  end
end
