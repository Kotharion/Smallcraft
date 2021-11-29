import singleProducts from './components/singleProducts.vue';
import listProduct from './components/listProduct.vue';
import AdminPage from './components/adminPage.vue';
import DeleteProducts from './components/deleteProducts.vue';
import AddProduct from './components/addProduct.vue';
import ForgottenPassword from './components/forgottenPassword.vue';


export default [
    { path: '/products/:id', component: singleProducts},
    { path: '/', component: listProduct},
    { path: '/admin', component: AdminPage},
    { path: '/admin/productslist', component: DeleteProducts},
    { path: '/admin/productslist/addproduct', component: AddProduct},
    { path: '/admin/forgot', component: ForgottenPassword},
]
