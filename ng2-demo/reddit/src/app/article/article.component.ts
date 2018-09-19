import { Component, OnInit, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: {
	  class: 'row',
  },
})


export class ArticleComponent implements OnInit {
	// votes: number;
	// link: string;
	// title: string;
	@Input() article: Article;

  	constructor(){
		// this.votes = 100;
		// this.link = 'link text';
		// this.title = 'title text';
		// this.article = new Article('title text', 'link text', 200);
  	}

	voteUp():void{
		this.article.voteUp();
	}

	voteDown():void{
		this.article.voteDown();
	}
  	ngOnInit(){}

}
