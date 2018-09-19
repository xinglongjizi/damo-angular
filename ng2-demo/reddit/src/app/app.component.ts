import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
	articles: Array<Article>;

	constructor(){
		this.articles = [
			new Article('title text 1', 'link text 1', 100),
			new Article('title text 2', 'link text 2', 200),
			new Article('title text 3', 'link text 3', 300),
		];
	}

	addArticle($title: HTMLInputElement, $link: HTMLInputElement) : void {
		console.log(`title is ${$title.value}; link is ${$link.value}`);
		this.articles.push( new Article($title.value, $link.value) );
		$title.value = '';
		$link.value  = '';
	}
}
