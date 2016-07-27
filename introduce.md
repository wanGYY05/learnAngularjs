1、learn1: Angularjs MVC 以及 $scope 作用域 Angularjs 模块的 run(5) 方法 以及依赖注入中代码压缩问题(4)
2、learn2: 1：$scope 中的 $apply
           2: $scope 中的 $watch
3、learn3: demo1: Angularjs 工具方法
           demo2: Angularjs 中bootstrap的用法(动态绑定，就是不用自己将ng-app='myApp’写入div中，而是动态的，用代码在后面将
                  ng-app的模块直接与div进行绑定，从而解决了一个页面只能加载一个模块的问题，实现了一个页面中引入多个模块)
           demo3: angularjs中多页面的做法（相当于自己写了个插件然后引进来:分两步：在head中引进js文件；在获取模块中引进其他模块）
           demo4：Angularjs 中引入 jQuery
4、learn4: demo1: 函数，ng-model
           demo2：ng-select(用于select标签中)，ng-copy,ng-cut,ng-paste(判断input中进行的操作),ng-change(判断checkbox是否改变),
           ng-bind,ng-cloak()防止刷新页面闪烁的两种方法,ng-non-bindable(直接输出div中的内容)
           demo3: $interval定时器
5、learn5：demo1:ng-class,ng-href(ng-href 指令覆盖了原生的 <a> 元素 href 属性。如果在 href 的值中有 AngularJS 代码，则需要使
                 用 ng-href 而不是 href。ng-href 指令确保了链接是正常的，即使在 AngularJS 执行代码前点击链接。)
                 ng-src同ng-href，ng-style，ng-attr-title，ng-switch和on结合的例子（ng-switch-default，ng-switch-when），
                 ng-open和details结合，
           demo2: 绑定html的一种方法：ng-bind-html
           demo3: 绑定html的另一种方法：$sce
           demo4: ng-repeat和ng-init的联合使用