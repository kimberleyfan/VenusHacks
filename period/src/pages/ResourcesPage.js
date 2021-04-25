import React, { Component } from "react";
import ArticleCard from '../components/ArticleCard.js'

class ResourcesPage extends Component {
  render(){

    return(

    <div style={{backgroundColor: '#F4DCE2'}}>
      <div>
        <ArticleCard />
        <ArticleCard />
      </div>
      <div>
        <ArticleCard />
        <ArticleCard />
      </div>

    </div>
  )
  }

}
export default ResourcesPage;
