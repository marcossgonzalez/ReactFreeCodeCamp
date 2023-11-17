import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyComponent from './App';
import Calendar from './App';
import TypesOfFood from './App';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/*<App />*/}
    {/*<MyComponent />*/}
    {/*<TypesOfFood />*/}
    <Calendar />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
/*Com essa base, é hora de examinar outro recurso muito comum no React: props.
No React, você pode passar adereços, ou propriedades, para componentes filhos. Digamos que você tenha um componente App
que renderiza um componente filho chamado Welcome, que é um componente funcional sem estado.
Você pode passar Welcome como uma propriedade de usuário escrevendo:
<App>
  <Welcome user='Mark' />
</App>

Você usa atributos HTML personalizados criados por você e suportados pelo React 
para serem passados ​​ao componente. Neste caso, a propriedade criada user é passada 
para o componente Welcome. Como Welcome é um componente funcional sem estado, ele 
tem acesso a este valor da seguinte forma:
const Welcome = (props) => <h1>Hello, {props.user}!</h1>

É padrão chamar esse valor de props e, ao lidar com componentes funcionais sem 
estado, você basicamente considera isso como um argumento para uma função que retorna 
JSX. Você pode acessar o valor do argumento no corpo da função. Com componentes de classe, 
você verá que isso é diferente.
*/