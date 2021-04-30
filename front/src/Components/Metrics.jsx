import React from 'react'
import DirectorAccount from './DirectorAccount'

const Metrics = () => {

    const data = {
        labels: ['Santiago del estero', 'Buenos Aires', 'Chaco'],
        datasets: [{
            label: 'Ausentes',
            backgroundColor: 'rgba(0,255,0,0,2)',
            borderColor: 'black',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(0,255,0,0,2)',
            hoverBorderColor: '#FFFF00',
            data: [12, 3, 4, 0] //Acá van contadores de ausentes
        }]
    }
    const opciones = {
        maintainAspectRatio: false,
        responsive: true
    }

    return (
        <div className='App' style={{ width: '100%', height: '500%' }}>
            <DirectorAccount/>

            <h2>Ausentes por región</h2>
        </div>
    )
}

export default Metrics
