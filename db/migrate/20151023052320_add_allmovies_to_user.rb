class AddAllmoviesToUser < ActiveRecord::Migration
  def change
  	add_column :users, :allmovies, :text, array:true
  end
end
