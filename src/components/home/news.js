import React from "react";
import './news.css';

class News extends React.Component {
    constructor(){
        super();

        const url = 'http://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'apiKey=776419a7a5bb442cbe5b47212aecb9df';

        let req = new Request(url);
        
        fetch(req)
        .then(response => {
            return response.json();
        })
        .then(data => {
            let x = data['articles']
            console.log(x);
        })

        const key = "776419a7a5bb442cbe5b47212aecb9df";
    }

    render() {
        return (
            <div></div>
        );
    }
}
export default News;