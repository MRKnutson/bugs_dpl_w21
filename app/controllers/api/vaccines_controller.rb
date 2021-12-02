class Api::VaccinesController < ApplicationController
  before_action :set_bug
  before_action :set_vaccine, only: [:show, :update, :destroy]

  def index
    render json: @bug.vaccines
  end

  def show
    render json: @vaccine
  end

  def create
    @vaccine = @bug.vaccines.new(vaccine_params)

    # this also works
    # @vaccine = Vaccine.new(vaccine_params)
    # @vaccine.bug_id = @bug.id
    if (@vaccine.save)
      render json: @vaccine
    else
      render json: { errors: @vaccine.errors }, status: 422
    end
  end

  def update
    if (@vaccine.update(vaccine_params))
      render json: @vaccine
    else
      render json: { errors: @vaccine.errors }, status: 422
    end
  end

  def destroy
    render json: @vaccine.destroy
  end

  private

  def vaccine_params
    params.require(:vaccine).permit(:name, :efficacy)
  end

  def set_bug
    @bug = Bug.find(params[:bug_id])
  end

  def set_vaccine
    @vaccine = @bug.vaccines.find(params[:id])
  end
end
