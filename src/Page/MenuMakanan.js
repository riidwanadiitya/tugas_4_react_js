import React, { Component } from 'react';
import ListMakanan from '../ListData/ListMakanan';

class MenuMakanan extends Component {
    constructor(props){
        super(props);
        this.state={
            pesan: "",
            jumlah: 0,
            tampil: false,
        }
        this.pilihPesanan = this.pilihPesanan.bind(this);
        this.nasiPadang = this.nasiPadang.bind(this);
        this.sate = this.sate.bind(this);
        this.soto = this.soto.bind(this);
        this.nasiKentut = this.nasiKentut.bind(this);
        this.nasiKuning = this.nasiKuning.bind(this);
        this.batal= this.batal.bind(this)
    }

    pilihPesanan(value, e){
        this.setState({ [value]: e.target.value, tampil: true})
    }

    nasiPadang(){
        this.setState((state, props)=>{
            return{
                pesan: "Nasi Padang",
                jumlah: state.jumlah + 1,
                tampil: true 
            }
        })
    }

    sate(){
        this.setState((state, props)=>{
            return{
                pesan: "Sate",
                jumlah: state.jumlah + 1,
                tampil: true 
            }
        })
    }

    soto(){
        this.setState((state, props)=>{
            return{
                pesan: "Soto Lamongan",
                jumlah: state.jumlah + 1,
                tampil: true 
            }
        })
    }

    nasiKentut(){
        this.setState((state, props)=>{
            return{
                pesan: "Nasi Kentut",
                jumlah: state.jumlah + 1,
                tampil: true 
            }
        })
    }

    nasiKuning(){
        this.setState((state, props)=>{
            return{
                pesan: "Nasi Kuning",
                jumlah: state.jumlah + 1,
                tampil: true 
            }
        })
    }

    batal(){
        this.setState((state, props)=>{
            return{
                pesan: "",
                jumlah: 0,
                tampil: false 
            }
        })
    }

    render() {
        return (
            <div>
                <h3>Daftar Makanan Yang Kami Sediakan : </h3>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <ListMakanan gambarMakanan="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" />
                                <center>
                                    <button onClick={this.nasiPadang}>Pesan Sekarang</button>
                                </center>
                            </td>

                            <td>
                                <ListMakanan gambarMakanan="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" />
                                <center>
                                    <button onClick={this.sate}>Pesan Sekarang</button>
                                </center>
                            </td>

                            <td>
                                <ListMakanan gambarMakanan="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" />
                                <center>
                                    <button onClick={this.soto}>Pesan Sekarang</button>
                                </center>
                            </td>

                            <td>
                                <ListMakanan gambarMakanan="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png" />
                                <center>
                                    <button onClick={this.nasiKentut}>Pesan Sekarang</button>
                                </center>
                            </td>

                            <td>
                                <ListMakanan gambarMakanan="https://blog.tokowahab.com/wp-content/uploads/2020/03/Resep-Nasi-Kuning-Tumpeng-Mini.jpg" />
                                <center>
                                    <button onClick={this.nasiKuning}>Pesan Sekarang</button>
                                </center>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <br/>
                <input type="text" placeholder="Masukkan Pesanan Anda" onChange={e=> this.pilihPesanan("pesan", e)}/>
                <input type="number" placeholder="Jumlah Pesanan" onChange={e=> this.pilihPesanan("jumlah", e)}/>
                <button onClick={this.batal}>Batalkan Semua Pesanan</button>

                {this.state.tampil === true ? (
                    <div>
                        <h3>Pesanan Anda : {this.state.pesan}</h3>
                        <h4>Jumlah Pesanan : {this.state.jumlah}</h4>
                        </div>
                        ):(
                        <div>
                            <h3>Anda Belum Memesan</h3>
                        </div>
                        )
                }
            </div>
        );
    }
}

export default MenuMakanan;