import React, {Component} from 'react'


export class ColGroup extends Component {
    render() {
        return (
            <colgroup>
                <col className="col1"/>
                <col className="col2"/>
                <col className="col3"/>
                <col className="col4"/>
                <col className="col5"/>
                <col className="col6"/>
                <col className="col7"/>
                <col className="col8"/>
                <col className="col9"/>
                <col className="col10"/>
                <col className="col11"/>
                <col className="col12"/>
                <col className="col13"/>
                <col className="col14"/>
                <col className="col15"/>
                <col className="col16"/>
                <col className="col17"/>
                <col className="col18"/>
                <col className="col19"/>
                <col className="col20"/>
                <col className="col21"/>
                <col className="col22"/>
                <col className="col23"/>
                <col className="col24"/>
                <col className="col25"/>
                <col className="col26"/>
            </colgroup>
        )
    }
}

export class PHead extends Component {
    render() {
        return (
            <thead>
                <tr className="header">
                    <td className="group0" nowrap="" rowSpan="2">Mã<br/>CK</td>
                    <td className="group0" nowrap="" rowSpan="2">Trần</td>
                    <td className="group0" rowSpan="2">TC</td>
                    <td className="group0" nowrap="" rowSpan="2">Sàn</td>
                    <td colSpan="6">Dư mua</td>
                    <td colSpan="3" className="group0">Khớp lệnh</td>
                    <td colSpan="6">Dư bán</td>
                    <td className="group0" rowSpan="2">Tổng<br/>
                        KL</td>
                    <td className="group0" colSpan="3">Giá khớp</td>
                    <td rowSpan="2">NN<br/>mua</td>
                    <td rowSpan="2">NN<br/>
                        bán</td>
                </tr>
                <tr className="header">
                    <td>Giá3</td>
                    <td>KL 3</td>
                    <td>Giá2</td>
                    <td>KL 2</td>
                    <td>Giá1</td>
                    <td>KL 1</td>
                    <td className="group0">Giá</td>
                    <td className="group0">KL</td>
                    <td className="group0">Thay đổi</td>
                    <td>Giá1</td>
                    <td>KL 1</td>
                    <td>Giá2</td>
                    <td>KL 2</td>
                    <td>Giá3</td>
                    <td>KL 3</td>
                    <td className="group0">Cao</td>
                    <td className="group0">TB</td>
                    <td className="group0">Thấp</td>
                </tr>
            </thead>
        )
    }
}
