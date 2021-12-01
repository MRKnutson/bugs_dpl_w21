class Api::BugsController < ApplicationController
  def index
    render json: Bug.all
  end
end
