
import _ from 'lodash';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBSGC4M9UizvsZ21ivyIGCqZF5JjYvmMMk'



// create a new component.
// This Component shpuld produce some HTML

class  App extends Component {

	constructor(props){

		super(props);

		this.state = { 

			videos : [],
			selectedVideo: null


		 };

		 this.videoSearch('surfboards')

	}

	videoSearch(term){


		YTSearch({key:API_KEY, term : term},(videos) => {

		this.setState({

			videos:videos,
			selectedVideo:videos[0]

			});


		});


	}

	render(){

		const videoSearch = _.debounce((term )=> {this.videoSearch(term)},300)

	return (<div> 

	
	<SearchBar onSearchTermChange={videoSearch}/>
	<VideoDetail video={this.state.selectedVideo}/>
	<VideoList 
		onVideoSelect={selectedVideo => this.setState({selectedVideo})}
		videos={this.state.videos}/>
	 </div>

	 );
	}
}

///Take this componenets generated HTML and 
//put in on page(in DOM)

ReactDOM.render(<App />,document.querySelector('.container'))



//State in React is plain js object used to recrd and react
// to user events
//eahc class based component has its own state object
//whnever the state changes , the component and children re-rendrs
