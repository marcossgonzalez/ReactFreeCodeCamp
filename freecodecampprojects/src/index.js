import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyComponent from './App';
import Calendar from './App';
import ShoppingCart from './App';
import TypesOfFood from './App';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PropTypes from 'prop-types';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
    {/*<MyComponent />*/}
    {/*<TypesOfFood />*/}
    {/*<Calendar />*/}
    {/*<ShoppingCart />*/}
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

/*O React fornece recursos úteis de verificação de tipo para verificar se os componentes 
recebem adereços do tipo correto. Por exemplo, seu aplicativo faz uma chamada de API para 
recuperar dados que você espera que estejam em um array, que são então passados para um componente 
como uma propriedade. Você pode definir propTypes em seu componente para exigir que os dados sejam 
do tipo array. Isso lançará um aviso útil quando os dados forem de qualquer outro tipo.


É considerada uma prática recomendada definir propTypes quando você conhece o tipo de adereço 
com antecedência. Você pode definir uma propriedade propTypes para um componente da mesma forma
que definiu defaultProps. Fazer isso verificará se os adereços de uma determinada chave estão 
presentes em um determinado tipo. Aqui está um exemplo para exigir a função type para uma propriedade 
chamada handleClick:
MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }

No exemplo acima, a parte PropTypes.func verifica se handleClick é uma função. Adicionar isRequired 
informa ao React que handleClick é uma propriedade obrigatória para esse componente. Você verá um aviso 
se esse suporte não for fornecido. Observe também que func representa função. Entre os sete tipos primitivos 
de JavaScript, function e boolean (escritos como bool) são os únicos que usam ortografia incomum. Além
dos tipos primitivos, existem outros tipos disponíveis. Por exemplo, você pode verificar se um prop é 
um elemento React.
*/

/*Para essa lição devemos lembrar como adicionar props ao componente parente:
<Ex nome = "Nome"/>
e, após isso, usar os props do child-component.
<p>{this.props.nome}</p>*/