// 应用的根组件，每个angular应用都至少要有一个根组件(root component)

import { Component } from '@angular/core';			// 因为定义的是根组件，因此要导入此Component装饰器，好使用@Component装饰器来修饰组件
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',					// 通过<app-root></app-root>使用
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// export指定了组件可以再文件外使用，即是可被导出的
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
