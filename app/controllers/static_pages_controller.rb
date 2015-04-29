class StaticPagesController < ApplicationController
  include RecommendationHelper

	@@rawdata = File.read("public/assets/california.json")

  def home
  end

  def treemap
  end

  def data
  	respond_to do |format|
  	  format.json {
          render :json => @@rawdata
        }
  	end
  end

  def me
    #@recommendations = RecommendationHelper.recommendations_of([:block])
  end

  def algorithm
  end
end