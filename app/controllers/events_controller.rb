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

    def event_params
        params.permit(:name, :location, :date, :time, :image_url)
    end

end
