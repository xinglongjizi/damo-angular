// 应用的根模块，通常命名为 xxx.module.ts 比如这里命名的 app.module.ts说明它是定义应用根模块的文件
// 每个angular应用至少需要一个根模块(root module)



import { BrowserModule } from '@angular/platform-browser';  //因为此应用是运行在浏览器环境的web应用，所以要导入此模块
import { NgModule } from '@angular/core';                   //因为是应用的根模块，angular中定义模块需要依赖NgModule装饰器，好使用@NgModule装饰器
import { FormsModule } from '@angular/forms';               //顾名思义这是导入表单模块已处理提交的表单
import { HttpModule } from '@angular/http';                 //导入发送ajax请求的模块

// 导入应用的组件，因为declarations字段使用了
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';

// NgModule注解来修饰此根模块
@NgModule({
	// (declarations声明的意思)说明根模块依赖的组件、指令、管道都放进这个字段定义的数组
	// 应用中的定义的所有组件都要写进这个字段定义的数组中
  	declarations: [
    	AppComponent,
    	ArticleComponent
  	],
  	// 说明此模块依赖的其他模块
  	imports: [
    	BrowserModule,
    	FormsModule,
    	HttpModule
  	],
  	//	服务的创建者，本模块吧他们加入全局的服务列表中，让他们在应用中的任何部分都可以被访问到
  	providers: [],
  	// 只能将根模块写到bootstrap对应的数组中
  	bootstrap: [AppComponent]
})

// class Xxx关键字class用来定义名为Xxx的类
// 关键字export则定义了这个类是可以被导出的，即其他文件可以通过import来导入这个类
export class AppModule {}
