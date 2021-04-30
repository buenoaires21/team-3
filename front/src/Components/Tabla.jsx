import React from 'react'

const Tabla = () => {
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                />
                            </div>
                        </th>
                        <th scope="col">Lorem</th>
                        <th scope="col">Ipsum</th>
                        <th scope="col">Dolor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                />
                            </div>
                        </th>
                        <td>Sit</td>
                        <td>Amet</td>
                        <td>Consectetur</td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                />
                            </div>
                        </th>
                        <td>Adipisicing</td>
                        <td>Elit</td>
                        <td>Sint</td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                />
                            </div>
                        </th>
                        <td>Hic</td>
                        <td>Fugiat</td>
                        <td>Temporibus</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Tabla
