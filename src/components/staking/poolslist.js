import React from 'react';
import { Card, Col, Row, Form, Table } from 'react-bootstrap';
import asset1 from '../../images/asset1.png';
import asset2 from '../../images/asset2.png';
import asset3 from '../../images/asset3.png';
import asset4 from '../../images/asset4.png';
import arrowdown from '../../images/arrowdown.png';


export default function PoolsList(){
    return(
        <Card className="pools_list_block">
            <Table>
                <thead>
                    <tr>
                    <th>No</th>
                    <th>Pools</th>
                    <th>Staked</th>
                    <th>Total Revenue</th>
                    <th>Since</th>
                    <th>Revenue Price</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><h3>1</h3></td>    
                    <td className="amounticon"><img src={asset3}/>
                    <span>
                    <h3>10.5 ETH</h3>
                    <small>Ethereum</small>
                    </span>    
                    </td>
                    <td>50000 PAYR</td>
                    <td>30 ETH</td>
                    <td>03/03/2021</td>
                    <td>$ 7200</td>
                    <td>
                    <Form>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Control as="select" custom style={{ backgroundImage: `url(${arrowdown})` }}>
                            <option>Stake</option>
                            <option>Stake 1</option>
                            <option>Stake 2</option>
                            <option>Stake 3</option>
                            <option>Stake 4</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                     </td>   
                    </tr>

                    <tr>
                    <td><h3>2</h3></td>    
                    <td className="amounticon"><img src={asset4}/>
                    <span>
                    <h3>USDT</h3>
                    <small>US Dollar</small>
                    </span>    
                    </td>
                    <td>50000 PAYR</td>
                    <td>30 ETH</td>
                    <td>03/03/2021</td>
                    <td>$ 7200</td>
                    <td>
                    <Form>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Control as="select" custom style={{ backgroundImage: `url(${arrowdown})` }}>
                            <option>Stake</option>
                            <option>Stake 1</option>
                            <option>Stake 2</option>
                            <option>Stake 3</option>
                            <option>Stake 4</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                     </td>   
                    </tr>

                    <tr>
                    <td><h3>3</h3></td>    
                    <td className="amounticon"><img src={asset2}/>
                    <span>
                    <h3>PAYR</h3>
                    <small>Payrlink</small>
                    </span>    
                    </td>
                    <td>50000 PAYR</td>
                    <td>30 ETH</td>
                    <td>03/03/2021</td>
                    <td>$ 7200</td>
                    <td>
                    <Form>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Control as="select" custom style={{ backgroundImage: `url(${arrowdown})` }}>
                            <option>Stake</option>
                            <option>Stake 1</option>
                            <option>Stake 2</option>
                            <option>Stake 3</option>
                            <option>Stake 4</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                     </td>   
                    </tr>

                    <tr>
                    <td><h3>4</h3></td>    
                    <td className="amounticon"><img src={asset1}/>
                    <span>
                    <h3>BTC</h3>
                    <small>Bitcoin</small>
                    </span>    
                    </td>
                    <td>50000 PAYR</td>
                    <td>30 ETH</td>
                    <td>03/03/2021</td>
                    <td>$ 7200</td>
                    <td>
                    <Form>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Control as="select" custom style={{ backgroundImage: `url(${arrowdown})` }}>
                            <option>Stake</option>
                            <option>Stake 1</option>
                            <option>Stake 2</option>
                            <option>Stake 3</option>
                            <option>Stake 4</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                     </td>   
                    </tr>
                    
                </tbody>
            </Table>

        </Card>
    )
}