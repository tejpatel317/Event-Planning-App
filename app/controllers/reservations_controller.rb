class ReservationsController < ApplicationController

    def create
        reservation = Reservation.create!(reservation_params)
        render json: reservation, status: :created
    end

    private

    def reservation_params
        params.permit(:user_id, :event_id, :checkin_status)
    end

end
