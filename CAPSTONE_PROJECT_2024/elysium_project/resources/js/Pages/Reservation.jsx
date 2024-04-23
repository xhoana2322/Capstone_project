import React, { useState } from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import { usePage, router, useForm } from '@inertiajs/react'

export default function Prenotazioni({ auth, reservation }) {

    const [reservations, setReservations] = useState(reservation);

    const deleteReservation = (reservation) => {
        if(!window.confirm('Would you like to delete this reservation?')) {
            return;
        } 
        router.delete(route('reservation.destroy', reservation.id));
        window.location.reload();
    }


    const confirmReservation = (reservationId) => {
        if (!window.confirm('Would you like to confirm this reservation?')) {
            return;
        }

        const response = router.put(route('reservation.confirm', reservationId));
        window.location.reload();

        if (response && typeof response.then === 'function') {
            response.then(() => {
                // Aggiorna lo stato locale dopo il successo
                setReservations(reservations.map(reservation => 
                    reservation.id === reservationId 
                    ? { ...reservation, is_pending: false } 
                    : reservation
                ));
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
        } else {
            console.error('router.put did not return a Promise');
        }
    }


  return (
   <>
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Prenotazioni</h2>}
        >
            <Head title="Reservation" />

            <div className="container mt-5" style={{ height: '100vh', overflowX: 'auto' }}>
                <table className="w-full text-sm text-left rtl:text-right text-white bg-gray-800">
                    <thead className='text-xs text-white  uppercase bg-gray-700 border-b-2 border-gray-500'>
                        <tr className="text-nowrap">
                        <th scope="col" className='p-3 text-sm font-semibold tracking-wide text-center'>Name</th>
                        <th scope="col" className='p-3 text-sm font-semibold tracking-wide text-center'>Email</th>
                        <th scope="col" className='p-3 text-sm font-semibold tracking-wide text-center'>Phone</th>
                        <th scope="col" className='p-3 text-sm font-semibold tracking-wide text-center'>Guests</th>
                        <th scope="col" className='p-3 text-sm font-semibold tracking-wide text-center'>Date</th>
                        <th scope="col" className='p-3 text-sm font-semibold tracking-wide text-center'>Time</th>
                        <th scope="col" className='p-3 text-sm font-semibold tracking-wide text-center'>Status</th>
                        <th scope="col" className='p-3 text-sm font-semibold tracking-wide text-center'>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {reservations.map((reservation) => (
                            <tr className='bg-gray-800' key={reservation.id}>
                                <td className='p-3 text-sm text-gray-300'>{reservation.name}</td>
                                <td className='p-3 text-sm text-gray-300'>{reservation.email}</td>
                                <td className='p-3 text-sm text-gray-300'>{reservation.phone}</td>
                                <td className='p-3 text-sm text-gray-300'>{reservation.number_people}</td>
                                <td className='p-3 text-sm text-gray-300'>{reservation.date}</td>
                                <td className='p-3 text-sm text-gray-300'>{reservation.time}</td>
                                <td className='p-3 text-sm text-gray-300' style={{ color: reservation.is_pending ? '#faa20a' : '#12961d', fontWeight: 'bold' }}>
                                    {reservation.is_pending ? 'To confirm' : 'Confirmed' }
                                </td>
                                <td>
                                    <button 
                                        className="btn btn-success" 
                                        onClick={() => confirmReservation(reservation.id)}>
                                        <i className="bi bi-check-lg"></i>
                                    </button>
                                    <button 
                                        onClick={(e) =>deleteReservation(reservation)} 
                                        className="btn btn-danger ms-2">
                                        <i className="bi bi-trash3"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout>
   </>
  )
}
