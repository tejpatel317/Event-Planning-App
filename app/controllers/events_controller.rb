class EventsController < ApplicationController

    def index
        render json: Event.all
    end

    def create
        event = Event.new(event_params)
        event.user = User.find_by(id: session[:user_id])
        event.save!
        render json: event, status: :created
    end

    def update
        event = Event.find_by(id: params[:id])
        event.update!(event_params)
        render json: event, status: :ok
    end

    def destroy
        event = Event.find_by(id: params[:id])
        event.destroy
        head :no_content
    end

    private

    def event_params
        params.permit(:name, :location, :date, :time, :image_url)
    end

end
