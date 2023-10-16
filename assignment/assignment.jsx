import React from "react";
import img from './Assignment icon.png';
import evano from './evano.png';
import abstract from './abstract.png';
import './dash.css';
import { KeyOutlined, HelpCenter, KeyboardArrowRight, Sell, ShoppingCart, AccountBalanceWallet, AccountBox, KeyboardArrowDown, AccountBalanceWalletRounded, ShoppingBagOutlined } from "@mui/icons-material";
import { Card, } from "@mui/material";
import { ArrowDown, ArrowUp, CardList, CurrencyDollar } from "react-bootstrap-icons";
import BarChartExample from "./chart";
import Example from "./piechart";

export function Dashboard() {

    return (
        <div className="container-fluid">
            <div className="main">
                <div className="row">
                    <div style={{ backgroundColor: "#040440", height: '738px' }} className="col-2">
                        <div id="#sidebar" className=" mt-2 p-2">
                            <h4 id="dash" className="text-white"><img className="mb-1 mx-3" src={img} alt="imageOfIcon" />Dashboard</h4>
                            <div id="#option" className="mt-5">
                                <ul>
                                    <li style={{ backgroundColor: '#2D2D69' }} className=" rounded"><span>{<KeyOutlined />}</span> Dashboard</li>
                                    <li className="d-flex justify-content-between">{<ShoppingCart />}Products <span>{<KeyboardArrowRight />}</span></li>
                                    <li className="d-flex justify-content-between">{<AccountBox />}Customers <span>{<KeyboardArrowRight />}</span></li>
                                    <li className="d-flex justify-content-between">{<AccountBalanceWallet />}Income <span>{<KeyboardArrowRight />}</span></li>
                                    <li className="d-flex justify-content-between">{<Sell />}Promote <span>{<KeyboardArrowRight />}</span></li>
                                    <li className="d-flex justify-content-between">{<HelpCenter />}Help <span>{<KeyboardArrowRight />}</span></li>
                                </ul>
                            </div>
                            <div className="footer">
                                <Card style={{ backgroundColor: '#2D2D69' }} className="text-light p-1" id="footer">
                                    <div>
                                        <img className="mt-2" id="enavo" src={evano} alt="evano" /><span>evano <br /><small style={{ fontSize: '10px', position: 'relative', left: '32px', bottom: '18px', color: 'silver' }}>project manager</small></span>
                                    </div>
                                    <i className="mt-2">{<KeyboardArrowDown />}</i>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundColor: "#F5F6F8" }} className="col-10">
                        <div className="main2" style={{ position: 'relative', bottom: '20px' }}>
                            <div id="name" className="p-4 d-flex justify-content-between">
                                <h5 id="name2" className="mt-3">Hello Saqlain👋🏼,</h5>
                                <input className="form-control mt-3" placeholder="🔍Search" type="search" name="search" id="inputsm" />
                            </div>
                            <div id="yaya" className="container-fluid d-flex justify-content-between">
                                <Card className="d-flex p-2" style={{ width: '265px', height: '120px', alignItems: 'center' }}>
                                    <span style={{ height: '90px', backgroundColor: '#E3FFF0', color: '#05A841', borderRadius: '50%' }} className="text-center p-3 border">{<CurrencyDollar style={{ fontSize: '4pc' }} />}</span>
                                    <div className="mt-2 mx-2">
                                        <p className="text-secondary">Earning <br />
                                            <span className="fw-bold text-dark h3">$198k</span> <br />
                                            <span className="text-dark"><small className="text-success">{<ArrowUp className="mb-1" />}37.8%</small> this month</span>
                                        </p>
                                    </div>
                                </Card>
                                <Card className="d-flex p-2" style={{ width: '260px', height: '120px', alignItems: 'center' }}>
                                    <span style={{ height: '90px', backgroundColor: '#E7DBFF', color: '#A300FF', borderRadius: '50%' }} className="text-center p-3 border">{<CardList style={{ fontSize: '4pc' }} />}</span>
                                    <div className="mt-2 mx-2">
                                        <p className="text-secondary">Orders <br />
                                            <span className="fw-bold text-dark h3">$2.4k</span> <br />
                                            <span className="text-dark"><small className="text-danger mb-2">{<ArrowDown className="mb-1" />}2%</small> this month</span>
                                        </p>
                                    </div>
                                </Card>
                                <Card className="d-flex p-2" style={{ width: '260px', height: '120px', alignItems: 'center' }}>
                                    <span style={{ height: '90px', backgroundColor: '#CCF2FF', color: '#689CD9', borderRadius: '50%' }} className="text-center p-3 border">{<AccountBalanceWalletRounded style={{ fontSize: '4pc' }} />}</span>
                                    <div className="mt-2 mx-2">
                                        <p className="text-secondary">Balance <br />
                                            <span className="fw-bold text-dark h3">$2.4k</span> <br />
                                            <span className="text-dark"><small className="text-danger">{<ArrowDown className="mb-1" />}2%</small> this month</span>
                                        </p>
                                    </div>
                                </Card>
                                <Card className="d-flex p-2" style={{ width: '260px', height: '120px', alignItems: 'center' }}>
                                    <span style={{ height: '90px', backgroundColor: '#FEBBE0', color: '#D90011', borderRadius: '50%' }} className="text-center p-3 border">{<ShoppingBagOutlined style={{ fontSize: '4pc' }} />}</span>
                                    <div className="mt-2 mx-1">
                                        <p className="text-secondary">Total sales <br />
                                            <span className="fw-bold text-dark h3">$89k</span> <br />
                                            <span className="text-dark"><small className="text-success ">{<ArrowUp className="mb-1" />}11%</small> this month</span>
                                        </p>
                                    </div>
                                </Card>
                            </div>
                        </div>
                        <div id="chart" className=" p-1 d-flex justify-content-between">
                            <Card className="col-8 m-2">
                                <div className="overview d-flex justify-content-between p-3">
                                    <h6 className="fw-bold">Overview <br /><small className="text-secondary fw-light">Monthly Earning</small></h6>
                                    <select style={{ border: "none" }}>
                                        <option value="a">Quarterly</option>
                                        <option value="b">Quarterly</option>
                                        <option value="c">Quarterly</option>
                                    </select>
                                </div>
                                <BarChartExample />
                            </Card>
                            <Card className="col-4 m-2">
                                <div className="overview d-flex justify-content-between p-3">
                                    <h6 className="fw-bold">Customers<br /><small className="text-secondary fw-light">Customer that buy products</small></h6>
                                </div>
                                <div id="pie">
                                    <Example />
                                </div>
                            </Card>
                        </div>
                        <div id="down" className=" p-2">
                            <Card className="mt-2" style={{ height: "200px" }}>
                                <div id="ps" className="p-2 d-flex justify-content-between">
                                    <h6 className="fw-bold">Product Sell</h6>
                                    <div>
                                        <input id="input30" type="search" placeholder="Search" style={{ border: 'none' }} />
                                        <select style={{ border: 'none' }}>
                                            <option value="day">Last 30 days</option>
                                        </select>
                                    </div>
                                </div>
                                <table style={{ width: '100%' }} className="table bordered table-responsive w-100 bordered">
                                    <tbody>
                                        <tr >
                                            <th>Product Name</th>
                                            <th>Stock</th>
                                            <th>Price</th>
                                            <th>Total Sales</th>
                                        </tr>
                                        <tr>
                                            <td >
                                                <img src={abstract} alt="abstract 3d" />
                                                <span>
                                                    <span id="abstract1" style={{ position: 'relative', bottom: '8px' }} className="fw-bold py-2 m-2 h6 ">Abstract 3D</span>
                                                    <span id="abstract" className="fw-lighter" style={{ position: 'relative', top: '10px', right: '95px' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span></span>
                                            </td>
                                            <td>32 in stock</td>
                                            <td><strong>$45.99</strong></td>
                                            <td>20</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}