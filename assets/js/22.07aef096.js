(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{494:function(n,t,e){"use strict";e.r(t);var a=e(31),i=Object(a.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[n._v("初始状态\nnew")]),n._v(" "),e("p",[n._v("线程创建成功但是没有执行，此时没有分配cpu资源，还没有调用start")]),n._v(" "),e("p",[n._v("运行状态\nrunnable")]),n._v(" "),e("p",[n._v("一种是运行中的线程，已经分配到cpu资源，执行中\n一种是可运行的线程，没有分配到cpu资源，但是可以获得cpu资源")]),n._v(" "),e("p",[n._v("休眠状态\ntime waiting\nblocked\nwaiting")]),n._v(" "),e("p",[n._v("调用阻塞api，线程进入休眠状态，此时无法获取cpu资源\n等待synchronized同步块的锁时，处于blocked状态\nrunnable线程调用阻塞api时，当前线程进入waiting状态，知道其他线程将其唤醒\ntime_waiting和waiting和区别是，前者有加休眠的超时时间")]),n._v(" "),e("p",[n._v("终止状态\nterminated\n线程执行完毕，或者异常")]),n._v(" "),e("p",[n._v("runnable to blocked\n线程访问加锁资源时无法获取到锁，当前线程变为blocked状态")]),n._v(" "),e("p",[n._v("blocked to runnable\n获取到的锁的线程调用notify或者notifyAll时，位于锁队列的线程变为runnable状态，尝试再次获取锁")]),n._v(" "),e("p",[n._v("runnable to waiting\n处于runnable的线程调用LockSupport.park线程由runnable变为waiting状态，线程调用LockSupport.unpark状态由waiting变为runnable状态。")])])}),[],!1,null,null,null);t.default=i.exports}}]);