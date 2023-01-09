class ReservationsController < ApplicationController

    def create
        reservation = Reservation.create!(reservation_params)
        render json: reservation, status: :created
    end

    def update
        reservation = Reservation.find_by(id: params[:id])
        reservation.update!(reservation_params)
        render json: reservation, status: :ok
    end

    def destroy
        reservation = Reservation.find_by(id: params[:id])
        reservation.destroy
        head :no_content
    end

    private

    def reservation_params
        params.permit(:user_id, :event_id, :checkin_status)
    end

end
