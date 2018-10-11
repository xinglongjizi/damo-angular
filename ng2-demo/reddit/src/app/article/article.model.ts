






// 普通的一个定义Article类的ts文件，Article类作为一个数据模型，因此命名为 xxx.model.ts


export class Article{
	title: string;
	link: string;
	votes: number;

	constructor(title: string, link: string, votes?: number){
		this.title = title;
		this.link  = link;
		this.votes = votes || 0;

	}

	voteUp():void{
		this.votes += 1;
	}

	voteDown():void{
		this.votes -= 1;
	}
}
