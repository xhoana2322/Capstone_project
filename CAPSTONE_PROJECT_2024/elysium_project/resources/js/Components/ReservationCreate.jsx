import React from 'react'
import { useForm } from '@inertiajs/react'

export default function ReservationCreate() {

    const { data, setData, post } = useForm({
        name: '',
        phone: '',
        email: '',
        number_people: '',
        date: '',
        time: '',
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        post(route('reservation.store'));
    };

  return (
    <>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="toppete">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control inputto"
                                id="exampleInputName1"
                                name="name"
                                value={data.name} 
                                onChange={handleChange} 
                                required
                            />
                            <label htmlFor="exampleInputName1" className="form-label">
                                <i className="bi bi-person-fill pe-2"></i>
                                Name and surname
                            </label>
                        </div>

                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control inputto"
                                id="exampleInputPhone1"
                                name="phone"
                                value={data.phone} 
                                onChange={handleChange} 
                                required
                            />
                            <label htmlFor="exampleInputPhone1" className="form-label ms-2">
                            <i className="bi bi-phone-fill pe-2"></i>
                            Telephone
                            </label>
                        </div>
                    </div>
                    <div className="input-group toppete">
                        <input
                            type="text"
                            className="form-control inputto"
                            id="exampleInputEmail1"
                            name="email"
                            value={data.email} 
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            <i className="bi bi-envelope-fill pe-2"></i>
                            Email
                        </label>
                    </div>

                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <div className="input-group toppete">
                            <input 
                                type="number" 
                                class="form-control inputto" 
                                id="personeInput" 
                                name="number_people" 
                                min="1" 
                                max="10" 
                                value={data.number_people} 
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="personeInput" className="form-label">
                                <i className="bi bi-people-fill pe-2"></i>
                                Number of guests
                            </label>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="input-group toppete">
                            <input 
                                type="date" 
                                class="form-control inputto date-input" 
                                id="dataInput"
                                name='date'
                                value={data.date} 
                                onChange={handleChange} 
                                required
                            />
                            <label htmlFor="dataInput" className="data-label">
                                Date
                            </label>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="input-group toppete">
                                <select 
                                    className="form-select" 
                                    name="time" 
                                    value={data.time} 
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="19:30">19:30</option>
                                    <option value="19:45">19:45</option>
                                    <option value="20:00">20:00</option>
                                    <option value="20:15">20:15</option>
                                    <option value="20:30">20:30</option>
                                    <option value="20:45">20:45</option>
                                    <option value="21:00">21:00</option>
                                    <option value="21:15">21:15</option>
                                    <option value="21:30">21:30</option>
                                    <option value="21:45">21:45</option>
                                    <option value="22:00">22:00</option>
                                </select>
                                <label htmlFor="timeInput" className="data-label">
                                    Time
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 d-flex justify-content-center pb-4">
                        <button type="submit" className="btn btn-primary w-50 model-reservation-btn">Submit reservation</button>
                    </div>
                </form>
            </div>
    </>
  )
}
