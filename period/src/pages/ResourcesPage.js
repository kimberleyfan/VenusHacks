import React, { Component } from "react";
import ArticleCard from '../components/ArticleCard.js'
import NavBar from '../components/NavBar.js'

class ResourcesPage extends Component {
  render(){
    const articlePad = {
      padding: '10px'
    };
    return(

    <div style={{backgroundColor: '#F4DCE2'}}>
      <NavBar />
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <ArticleCard style={articlePad} />
        <ArticleCard style={articlePad}/>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <ArticleCard style={articlePad}/>
        <ArticleCard style={articlePad}/>
      </div>

    </div>
  )
  }

}
export default ResourcesPage;
