import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header.component';
import Hero01 from './components/Hero01/Hero01.component';
import Whathappened from './components/Whathappened/Whathappened.component';
import BestProducts from './components/BestProducts/BestProducts.component';

import reportWebVitals from './reportWebVitals';
import ProductList from './components/ProductList/ProductList.component';
import BrandStory from './components/BrandStory/BrandStory.component';
import HappendIssue from './components/HappendIssue/HappendIssue.component.js';
import Video from './components/Video/Video.component';
import Footer from './components/Footer/Footer.component';

ReactDOM.render(
  <React.StrictMode>
    <Header></Header>
    <Hero01></Hero01>
    <Whathappened></Whathappened>
    <BestProducts></BestProducts>
    <ProductList></ProductList>
    <BrandStory></BrandStory>
    <HappendIssue></HappendIssue>
    <Video></Video>
    <Footer></Footer>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
