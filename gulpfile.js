/*
	这里的代码不是在浏览器执行
	而是在nodejs环境下执行


	目的：sass->css
		* 利用gulp和gulp-sass作为工具来进行编译
 */

// 安装成功后，必须引入gulp和gulp-sass
let gulp = require('gulp');
let sass = require('gulp-sass');
let htmlmin = require('gulp-htmlmin');
let clean = require('gulp-clean-css');
let uglify = require('gulp-uglify');
let concat = require('gulp-concat');
let rename = require('gulp-rename');

let less = require('gulp-less');
let pump = require('pump');
// let babel = require('gulp-babel');






// gulp.task('compressJs',cb=>{
// 	pump([
// 		// 匹配文件
// 		gulp.src('./src/js/*.js'),

// 		// 合并文件
// 		concat('page.js',{newLine:';'}),

// 		// 输出到硬盘
// 		gulp.dest('./dist'),

// 		// 转换6-5
// 		babel({
//             presets: ['env']
//         }),

// 		// 压缩
// 		uglify(),

// 		// 重命名
// 		rename({
// 			suffix: ".min",//后缀名
// 		}),

// 		// 输出到硬盘
// 		gulp.dest('./dist')
// 	],cb);
// });



// 1.创建任务
gulp.task('comSass',function(){
	// 执行任务时，会执行这里的代码

	// 在此把sass编译成css
	// 2.找出sass文件
	gulp.src(['./src/sass/*.scss'])	//返回一个文件流

	// 编译scss->css
	.pipe(sass({outputStyle:'compact'}).on('error', sass.logError))	// 得到css文件流

	
	// 输出到硬盘
	.pipe(gulp.dest('./src/css/'))
});



// 自动刷新页面
// 文件有修改，自动刷新页面
var browserSync = require('browser-sync');

gulp.task('server',function(){
	// 启动一个自动刷新的服务器
	browserSync({
		//创建一个静态服务器
		// server:'./src/',

		// 指定端口
		port:1100,

		// 代理服务器
		// 用browserSync代理php服务器
		// 	* 识别php
		// 	* 自动刷新
		proxy:'http://localhost:18041',

		// 监听文件修改
		files:['./src/**/*.html','./src/css/*.css']
	});

	// 监听sass修改
	gulp.watch('./src/sass/*.scss',['comSass']);
});