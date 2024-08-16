import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';  

const LopMonHoc = () => {
    const [data, setData] = useState([]);

    const loadData = () => { 
        $.ajax({
            url: '/daotao/lops',
            success: function (data) {
                setData(data.lops);
            }
        });
    };

    useEffect(() => {
        loadData();
    }, [data]);

    useEffect(() => { 
        const table = $('#mytable').DataTable({ 
            paging: true,  
            autoWidth: false,  
            destroy: true,
            searching: false,
            data: data, 
        });

        return () => {
            table.destroy(); // Cleanup on unmount
        };
    }, [data]);

    return (
        <div className="table-responsive"> 
            <table className="table table-bordered" id="mytable">
                <thead>
                    <tr className="success">
                        <td>Stt</td>
                        <td>Mã lớp</td>
                        <td>Tên môn học</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            {/* <td>{d.ma_lop}</td>
                            <td>{d.ten_mon_hoc}</td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LopMonHoc;
