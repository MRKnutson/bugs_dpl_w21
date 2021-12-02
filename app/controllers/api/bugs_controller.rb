class Api::BugsController < ApplicationController
  before_action :set_bug, only: [:show, :update, :destroy]

  def index
    render json: Bug.all
  end

  def show
    render json: @bug
  end

  def create
    @bug = Bug.new(bug_params)
    if (@bug.save)
      render json: @bug
    else
      render json: { errors: @bug.errors }, status: 422
    end
  end

  def update
    if (@bug.update(bug_params))
      render json: @bug
    else
      render json: { errors: @bug.errors }, status: 422
    end
  end

  def destroy
    render json: @bug.destroy
  end

  private

  def set_bug
    @bug = Bug.find(params[:id])
  end

  def bug_params
    params.require(:bug).permit(:name, :description)
  end
end
