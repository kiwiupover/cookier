class SiteSalesController < ApplicationController

  def index
    site_sales = SiteSale.all
    render json: site_sales
  end

  def show
    site_sale = SiteSale.find(params[:id])
    render json: site_sale
  end

  def create
    params[:site_sale][:cookie_cases_attributes] = params[:site_sale].delete(:cookie_cases) if params[:site_sale].has_key? :cookie_cases

    @site_sale =  SiteSale.new(params[:site_sale])
    if @site_sale.save
      render json: @site_sale, status: :ok
    else
      render json: @site_sale.errors, status: :unprocessable_entity
    end
  end

  def update
    @site_sale = SiteSale.find(params[:id])
      params[:site_sale][:cookie_cases_attributes] = params[:site_sale].delete(:cookie_cases) if params[:site_sale].has_key? :cookie_cases
    if @site_sale.update_attributes(params[:site_sale])
      render json: @site_sale, status: :ok
    else
      render json: @site_sale.errors, status: :unprocessable_entity
    end
  end

  def destroy
    site_sale = SiteSale.find(params[:id])
    site_sale.destroy
    render json: nil, status: :ok
  end
end
