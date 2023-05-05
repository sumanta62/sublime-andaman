import './PrivateInter.css'

const PrivateInter = () => {
    return (
        <div id='PrivateInter' className="GovtSTSSection" style={{cursor:"pointer"}}>
            <div>
                <h3>Private Inter-Island Bus Schedule</h3>
            </div>
            <div className='GovtSTSTable'>
                <table id="customers">
                    <tr style={{ backgroundColor: 'gray' }}>
                        <th>ID</th>
                        <th>Departure Time</th>
                        <th>Arrival Time</th>
                        <th>Service</th>
                        <th>From Station</th>
                        <th>To Station</th>
                    </tr>
                    <tr>
                        <td>1 </td>
                        <td>12:30 PM</td>
                        <td>04:00 PM</td>
                        <td>EXPRESS</td>
                        <td>PORT BLAIR</td>
                        <td>BARATANG</td>
                    </tr>
                    <tr>
                        <td>2 </td>
                        <td>12:30 PM</td>
                        <td>05:30 PM</td>
                        <td>EXPRESS</td>
                        <td>PORT BLAIR</td>
                        <td>KADAMTALA</td>
                    </tr>
                    <tr>
                        <td>3 </td>
                        <td>04:00 AM</td>
                        <td>11:00 PM</td>
                        <td>EXPRESS</td>
                        <td>PORT BLAIR</td>
                        <td>KADAMTALA</td>
                    </tr>
                    <tr>
                        <td>4 </td>
                        <td>06:45 AM</td>
                        <td>02:00 PM</td>
                        <td>EXPRESS</td>
                        <td>PORT BLAIR</td>
                        <td>RANGAT</td>
                    </tr>
                    <tr>
                        <td>5 </td>
                        <td>12:15 AM</td>
                        <td>06:30 PM</td>
                        <td>EXPRESS</td>
                        <td>PORT BLAIR</td>
                        <td>RANGAT</td>
                    </tr>
                    <tr>
                        <td>6 </td>
                        <td>10:15 AM</td>
                        <td>05:00 PM</td>
                        <td>EXPRESS</td>
                        <td>PORT BLAIR</td>
                        <td>NIMBUDERA</td>
                    </tr>
                    <tr>
                        <td>7 </td>
                        <td>04:00 AM</td>
                        <td>02:30 PM</td>
                        <td>EXPRESS</td>
                        <td>PORT BLAIR</td>
                        <td>MAYABUNDER</td>
                    </tr>
                    <tr>
                        <td>8 </td>
                        <td>09:45 AM</td>
                        <td>05:30 PM</td>
                        <td>EXPRESS</td>
                        <td>PORT BLAIR</td>
                        <td>MAYABUNDER</td>
                    </tr>
                    <tr>
                        <td>9 </td>
                        <td>04:00 AM</td>
                        <td>02:30 PM</td>
                        <td>EXPRESS</td>
                        <td>PORT BLAIR</td>
                        <td>DIGLIPUR</td>
                    </tr>
                    <tr>
                        <td>10 </td>
                        <td>07:00 AM</td>
                        <td>04:00 PM</td>
                        <td>EXPRESS</td>
                        <td>PORT BLAIR</td>
                        <td>DIGLIPUR</td>
                    </tr>

                </table>
            </div>
        </div>
    );
};

export default PrivateInter;