const myImage = document.querySelector("img"); //用document.querySelector("img")获取“img元素的引用”，这个引用就像一个电话号码，通过这个引用可以对img元素产生影响。这里把这个引用赋值给了myImage变量
//通过这个引用就可以操作这个元素
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src"); //经由img元素的引用获取img元素的src属性，并把这个属性赋值给mySrc（注意，在js里万物皆是对象，所有这些属性，引用，都是对象，所有的对象都可以赋值给变量）
  if (mySrc === "images/gugugaga.jpg") {
    myImage.setAttribute("src", "images/shi.jpg"); //如果img元素的src属性对应第一张图，则更改src为另一张图的src。注意这里和函数的局部变量有区别，在js里对元素的引用进行的操作会直接反映到实际的元素上，而不会出现在这里改动但是在实际的html页面里没有改变的情况
  } else {
    //如果src的值是第二张图片的，则反之
    myImage.setAttribute("src", "images/gugugaga.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("请输入你的名字："); //prompt函数和alert函数类似，会弹出一个对话框，相较之下prompt的功能更多，需要用户输入数据，并把用户输入的数据在用户点击确定后存储在一个变量之中
  if (
    !myName
  ) //如果用户在弹窗点击取消，myName的值就会是NULL，导致输出也出现一个null，为了避免这个情况，如果用户不输入名字，就继续弹窗
  {
    setUserName();
  } else {
    localStorage.setItem("name", myName); //这里调用了localstorage API，它允许我们把数据存储在浏览器中，方便我们后续再次获取这个数据。使用API的setItem函数创建并存储一个名为name的数据项，并且这个数据项具体的值就是先前在用户处获得的数据（也就是myName变量）
    myHeading.textContent = `你是凑企鹅, ${myName}`; //把标题的textContent属性设置为带有用户设置的名字myName的字符串
  }
}

//以下条件判断代码是初始化代码
if (!localStorage.getItem("name")) {
  //getItem检查是否创建过name数据项，如果存在，说明用户设置过用户名。否则就是没设置过,返回NULL，需要设置
  setUserName(); //执行设置用户名称的函数
} else {
  //如果已经创建过数据项name
  const storedName = localStorage.getItem("name"); //给变量storedName赋值这个已经被存储了的名字数据
  myHeading.textContent = `你是凑企鹅，${storedName}`;
}

//以下代码供用户修改用户名，如果需要修改用户名，直接再次运行设置名字的函数就可以对name里存储的数据进行覆盖了
myButton.onclick = function () {
  setUserName();
};
