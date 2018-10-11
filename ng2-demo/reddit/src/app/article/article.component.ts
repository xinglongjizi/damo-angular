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

/*
通过<app-article></app-article>来使用此组件
<app-article></app-article>标签的实际的html标签是article.component.html中的html内容
组件的输入输出属性写法都是写在使用<app-article></app-article>的地方，即就写在<app-article></app-article>上:
比如<app-article [childParam]="parentParam" (action)="something"></app-article>

而通常的DOM事件绑定(比如click等)，还是写在实际的html标签上，即article.component.html中的html内容中
*/

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
