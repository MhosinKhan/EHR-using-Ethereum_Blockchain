import web3 from './web3';

const address = '0xf0c9Fec615df6095e3b589f030A0edC44Fd8e153';

const abi = [{"constant":true,"inputs":[],"name":"getAdmin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"patAddr","type":"address"},{"name":"newEHR","type":"string"}],"name":"updateEHR","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"viewEHR","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newPatAddr","type":"address"}],"name":"addPat","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"docList","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newDocAddr","type":"address"}],"name":"addDoc","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"patAddr","type":"address"},{"name":"docAddr","type":"address"}],"name":"assignDoc","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];

export default new web3.eth.Contract(abi, address);