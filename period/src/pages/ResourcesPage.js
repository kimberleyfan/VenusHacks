import React, { Component } from "react";
import ArticleCard from '../components/ArticleCard.js'
import ArticleCard1 from '../components/ArticleCard1.js'
import ArticleCard2 from '../components/ArticleCard2.js'
import ArticleCard3 from '../components/ArticleCard3.js'
import ArticleCard4 from '../components/ArticleCard4.js'
import NavBar from '../components/NavBar.js'

class ResourcesPage extends Component {
  render(){
    return(

    <div style={{backgroundColor: '#F4DCE2'}}>
      <NavBar />
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <ArticleCard1 />
        <ArticleCard2/>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <ArticleCard3 />
        <ArticleCard4 />
      </div>

    </div>
  )
  }

}
export default ResourcesPage;
