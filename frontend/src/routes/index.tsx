import {
    BrowserRouter as Router,
    Route, 
    Routes
} from 'react-router-dom';
import Home from '../pages/Home';
import Clientes from '../pages/Listagem/clientes';
import Produtos from '../pages/Listagem/produtos';
import Servicos from '../pages/Listagem/servicos';
import Consumos from '../pages/Consumos/Consumos';
import CadastrarClientes from '../pages/Cadastro/clientes';
import CadastrarProdutos from '../pages/Cadastro/produtos';
import CadastrarServico from '../pages/Cadastro/servicos';
import VisualizarCliente from '../pages/Visualizar/clientes';
import VisualizarProduto from '../pages/Visualizar/produtos';
import VisualizarServico from '../pages/Visualizar/servicos';
import EditarCliente from '../pages/Editar/clientes';
import ClienteServico from '../pages/Vincular/Servico-Cliente'

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/clientes' element={<Clientes/>}/>
                <Route path='/produtos' element={<Produtos/>}/>
                <Route path='/servicos' element={<Servicos/>}/>
                <Route path='/consumos' element={<Consumos/>}/>
                <Route path='/cadastrar_cliente' element={<CadastrarClientes/>}/>
                <Route path='/cadastrar_produto' element={<CadastrarProdutos/>}/>
                <Route path='/cadastrar_servico' element={<CadastrarServico/>}/>
                <Route path='/clientes/:id' element={<VisualizarCliente/>}/>
                <Route path='/produtos/1' element={<VisualizarProduto/>}/>
                <Route path='/servicos/1' element={<VisualizarServico/>}/>
                <Route path='/editar_cliente/:id' element={<EditarCliente/>}/>
                <Route path='/editar_produto/1' element={<EditarCliente/>}/>
                <Route path='/editar_servico/1' element={<EditarCliente/>}/>
                <Route path='/cadastrar_produto_servico/:id' element={<ClienteServico/>}/>
            </Routes>
        </Router>
    );
}

export default AppRoutes;